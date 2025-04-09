import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectsSidebar from "./Components/ProjectsSidebar";
import SelectedProject from "./Components/SelectedProject";
import Deleted from "./Components/Deleted";
function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  const [deletedProjects, setDeletedProjects] = useState([]);
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );
  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  function handleDeleteProject() {
    setProjectsState((prevState) => {
      const deletedProject = prevState.projects.find(
        (project) => project.id === prevState.selectedProjectId
      );
      const updatedProjects = prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      );

      setDeletedProjects((prevDeletedProjects) => [
        ...prevDeletedProjects,
        deletedProject,
      ]);

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: updatedProjects,
      };
    });
  }
  function handledelete() {
    const deletedProject = prevState.projects.find(
      (project) => project.id === prevState.selectedProjectId
    );
    setDeletedProjects((prevDeletedProjects) => [
      ...prevDeletedProjects,
      deletedProject,
    ]);
  }
  console.log(deletedProjects);
  function handleSelectedProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }
  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  console.log(projectsState);
  // const deleteddProject = deletedProject.find(
  //   (project) => project.id === deletedProject.project.id
  // );
  let content = (
    <SelectedProject
      project={selectedProject}
      ondeleteProject={handleDeleteProject}
    />
  );
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <div className="h-screen my-8 flex gap-10">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projectsdata={projectsState.projects}
        onSelectProject={handleSelectedProject}
      />
      {content}
      <Deleted deleteds={deletedProjects} />
    </div>
  );
}

export default App;
