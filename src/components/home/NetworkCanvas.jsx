import { useEffect, useRef } from 'react';

import useReducedMotion from '../../hooks/useReducedMotion.js';
import './NetworkCanvas.css';

/**
 * NetworkCanvas — the animated dots-and-lines background.
 *
 * Two looks (the `variant` prop):
 *   "hero"    : the bold version behind the Home hero. Fills its parent.
 *   "ambient" : a calmer version fixed behind every other page. Fewer,
 *               fainter dots and rarer pulses, so it never competes with
 *               the cards and text on top of it.
 *
 * What you see:
 *   - Dots ("nodes") drifting slowly.
 *   - A line between any two dots that are close together.
 *   - Small apricot "pulses" travelling along lines, like messages
 *     passing between AI agents.
 *   - Lines reaching toward the mouse pointer when it is nearby.
 *
 * It draws on a <canvas> using plain JavaScript, not React elements,
 * because redrawing 60 times a second with React state would be slow.
 * React only creates the <canvas>; the useEffect below does the drawing.
 *
 * TUNING: change the constants just below to adjust the look.
 */

// ---- Settings you can safely change ----
// One set of numbers per variant.
//   linkDistance   : dots closer than this (px) get a line
//   pointerDistance: dots closer than this to the mouse get a line to it
//   speed          : how fast dots drift
//   pulseEveryMs   : a new pulse starts this often
//   pulseTravelMs  : how long a pulse takes to cross a line
//   areaPerNode    : one dot per this many square pixels (lower = more dots)
//   lineAlpha, dotAlpha, pointerAlpha, pulseAlpha : strength of each layer (0-1)
const VARIANTS = {
  hero: {
    linkDistance: 150,
    pointerDistance: 190,
    speed: 0.22,
    pulseEveryMs: 550,
    pulseTravelMs: 1100,
    areaPerNode: 17000,
    minNodes: 22,
    maxNodes: 64,
    lineAlpha: 0.34,
    dotAlpha: 0.85,
    pointerAlpha: 0.55,
    pulseAlpha: 0.95,
  },
  ambient: {
    linkDistance: 150,
    pointerDistance: 170,
    speed: 0.16,
    pulseEveryMs: 1200,
    pulseTravelMs: 1400,
    areaPerNode: 24000,
    minNodes: 14,
    maxNodes: 48,
    lineAlpha: 0.24,
    dotAlpha: 0.6,
    pointerAlpha: 0.35,
    pulseAlpha: 0.75,
  },
};

// Canvas can't read CSS variables directly, so the colors are repeated here
// as "r,g,b". Keep them in sync with --peri and --apricot in tokens.css.
const PERI_RGB = '142,152,255';
const APRICOT_RGB = '255,178,122';

export default function NetworkCanvas({ variant = 'hero' }) {
  const canvasRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const {
      linkDistance: LINK_DISTANCE,
      pointerDistance: POINTER_DISTANCE,
      speed: SPEED,
      pulseEveryMs: PULSE_EVERY_MS,
      pulseTravelMs: PULSE_TRAVEL_MS,
      areaPerNode: AREA_PER_NODE,
      minNodes: MIN_NODES,
      maxNodes: MAX_NODES,
      lineAlpha,
      dotAlpha,
      pointerAlpha,
      pulseAlpha,
    } = VARIANTS[variant] ?? VARIANTS.hero;
    // Hero: listen for the mouse on the hero only.
    // Ambient: the canvas sits behind the whole page, so listen on the whole page.
    const pointerTarget = variant === 'ambient' ? document.documentElement : canvas.parentElement;

    let width = 0;
    let height = 0;
    let nodes = [];
    let pulses = [];
    let frameId = 0;
    let lastTime = 0;
    let sinceLastPulse = 0;
    const pointer = { x: -999, y: -999 }; // far off-screen = "no pointer"

    /** Match the canvas to its on-screen size and create the dots. */
    function setup() {
      const rect = canvas.getBoundingClientRect();
      // On sharp ("retina") screens we draw at 2x so lines stay crisp.
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      const count = Math.round(Math.min(MAX_NODES, Math.max(MIN_NODES, (width * height) / AREA_PER_NODE)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * SPEED, // horizontal speed
        vy: (Math.random() - 0.5) * SPEED, // vertical speed
        radius: Math.random() < 0.18 ? 3.4 : 2, // a few dots are bigger
      }));
      pulses = [];
    }

    /** Find every pair of dots close enough to be linked. */
    function findLinks() {
      const links = [];
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const distance = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (distance < LINK_DISTANCE) links.push({ from: i, to: j, distance });
        }
      }
      return links;
    }

    /** Draw one frame. `time` is supplied by requestAnimationFrame. */
    function draw(time) {
      // Time since the previous frame, capped so a paused tab doesn't cause a jump.
      const delta = Math.min(40, time - lastTime || 16);
      lastTime = time;
      sinceLastPulse += delta;

      ctx.clearRect(0, 0, width, height);

      // 1. Move the dots. A dot leaving one edge re-enters from the opposite edge.
      nodes.forEach((node) => {
        node.x += (node.vx * delta) / 16;
        node.y += (node.vy * delta) / 16;
        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;
      });

      // 2. Draw the lines. Closer dots get a stronger line.
      const links = findLinks();
      ctx.lineWidth = 1;
      links.forEach((link) => {
        const a = nodes[link.from];
        const b = nodes[link.to];
        const opacity = lineAlpha * (1 - link.distance / LINK_DISTANCE);
        ctx.strokeStyle = `rgba(${PERI_RGB},${opacity.toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      });

      // 3. Draw the dots, plus a line to the pointer if it is near.
      nodes.forEach((node) => {
        const distance = Math.hypot(node.x - pointer.x, node.y - pointer.y);
        if (distance < POINTER_DISTANCE) {
          const opacity = pointerAlpha * (1 - distance / POINTER_DISTANCE);
          ctx.strokeStyle = `rgba(${APRICOT_RGB},${opacity.toFixed(3)})`;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
        ctx.fillStyle = `rgba(${PERI_RGB},${dotAlpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. Start a new pulse on a random line every so often.
      if (sinceLastPulse > PULSE_EVERY_MS && links.length > 0) {
        sinceLastPulse = 0;
        const link = links[Math.floor(Math.random() * links.length)];
        pulses.push({ from: link.from, to: link.to, progress: 0 });
      }

      // 5. Move and draw the pulses. `progress` goes from 0 (start) to 1 (arrived).
      pulses = pulses.filter((pulse) => pulse.progress < 1);
      pulses.forEach((pulse) => {
        pulse.progress += delta / PULSE_TRAVEL_MS;
        const a = nodes[pulse.from];
        const b = nodes[pulse.to];
        const x = a.x + (b.x - a.x) * pulse.progress;
        const y = a.y + (b.y - a.y) * pulse.progress;

        ctx.fillStyle = `rgba(${APRICOT_RGB},${pulseAlpha})`; // bright core
        ctx.beginPath();
        ctx.arc(x, y, 3.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(${APRICOT_RGB},${(pulseAlpha * 0.23).toFixed(3)})`; // soft glow
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();
      });

      // Ask the browser to call draw() again before the next screen repaint.
      if (!reducedMotion) frameId = requestAnimationFrame(draw);
    }

    function start() {
      cancelAnimationFrame(frameId);
      lastTime = performance.now();
      if (reducedMotion) {
        draw(lastTime); // reduced motion: draw a single still picture
      } else {
        frameId = requestAnimationFrame(draw);
      }
    }

    // ---- Event handlers ----
    function onPointerMove(event) {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    }
    function onPointerLeave() {
      pointer.x = -999;
      pointer.y = -999;
    }

    let resizeTimer;
    function onResize() {
      // Wait until the visitor stops resizing before rebuilding the dots.
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setup();
        start();
      }, 150);
    }

    function onVisibilityChange() {
      // Save battery: pause while the browser tab is in the background.
      if (document.hidden) cancelAnimationFrame(frameId);
      else start();
    }

    setup();
    start();
    pointerTarget.addEventListener('pointermove', onPointerMove);
    pointerTarget.addEventListener('pointerleave', onPointerLeave);
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibilityChange);

    // Cleanup: runs when the canvas leaves the page.
    // Without it the animation would keep running invisibly.
    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(resizeTimer);
      pointerTarget.removeEventListener('pointermove', onPointerMove);
      pointerTarget.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [reducedMotion, variant]);

  return <canvas ref={canvasRef} className={`network-canvas network-canvas--${variant}`} aria-hidden="true" />;
}
