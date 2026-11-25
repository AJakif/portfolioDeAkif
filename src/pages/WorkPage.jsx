import { Link, Navigate, useParams } from 'react-router-dom';

import { getProjectById, projects } from '../data/projects.js';
import ProjectDetail from '../components/work/ProjectDetail.jsx';
import ProjectList from '../components/work/ProjectList.jsx';
import ViewHeader from '../components/ui/ViewHeader.jsx';
import './WorkPage.css';

/**
 * WorkPage — a project overview at /work and a story at each /work/<id>.
 */
export default function WorkPage() {
  const { projectId } = useParams();

  if (projectId === undefined) {
    return (
      <div className="wrap">
        <ViewHeader title="Work">
          <p>A few projects I’ve worked on, plus a Bangla writing experiment I’m still figuring out.</p>
        </ViewHeader>
        <div className="work-page__projects">
          <ProjectList projects={projects} />
        </div>
      </div>
    );
  }

  const project = getProjectById(projectId);
  if (!project) return <Navigate to="/work" replace />;

  return (
    <div className="wrap work-page__story">
      <Link to="/work" className="work-page__back">
        <span aria-hidden="true">←</span> All projects
      </Link>
      <ProjectDetail project={project} />
    </div>
  );
}
