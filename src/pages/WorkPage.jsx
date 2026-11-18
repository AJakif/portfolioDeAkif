import { useParams } from 'react-router-dom';

import { getProjectById, projects } from '../data/projects.js';
import ProjectDetail from '../components/work/ProjectDetail.jsx';
import ProjectList from '../components/work/ProjectList.jsx';
import ViewHeader from '../components/ui/ViewHeader.jsx';
import './WorkPage.css';

/**
 * WorkPage — URLs: /work and /work/<project id>
 *
 * Left  : the list of projects
 * Right : the details of the selected project
 *
 * Which project is selected comes from the URL, not from React state.
 * That means a link like /work/querio always opens Querio, and the
 * browser's Back button moves between projects.
 *
 * To add or edit projects, change src/data/projects.js only.
 */
export default function WorkPage() {
  // Reads ":projectId" from the route "work/:projectId" (see src/App.jsx).
  const { projectId } = useParams();

  // If the URL has no id, or an id we don't know, show the first project.
  const project = getProjectById(projectId) ?? projects[0];

  return (
    <div className="wrap">
      <ViewHeader title="Work">
        <p>Four systems. Two are live products, one is my startup, one is open source and one is research.</p>
      </ViewHeader>

      <div className="work-page__grid">
        <ProjectList projects={projects} currentId={project.id} />
        {/* key={project.id} gives each project a fresh panel, so nothing
            from the previous project lingers when you switch. */}
        <ProjectDetail key={project.id} project={project} />
      </div>
    </div>
  );
}
