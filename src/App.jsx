import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";

function App() {
  // Using state to determine if we should show NoProjectSelected component or Project component to add new one with:
  // selectedProject stores the id of the proj selected or undefined if we are not adding/select any project.
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  // Function that starts Adding project i.e shows add project screen.
  function handleStartAddProject() {
    // selectedProjectId: null ==> we are adding a project.
    // selectedProjectId: undefined ==> we did not select anything.
    setProjectState(prevState => {
      return {
        // preserving prevState object properties and overriding selectedProjectId.
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  // Function that saves the project data.
  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      // Using random id for new projects.
      id: Math.random()
    }
    setProjectState(prevState => {
      return {
        // Saving prevState object properties and overriding/updating the projects array with new Project data added.
        ...prevState,
        // Setting the selectedProjectId to undefined, so that on click of save, the Project Add screen goes away.
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject], 
      };
    });
  }

  let content;
  if (projectState.selectedProjectId === null) {
    content = <Project onSaveProject={handleAddProject} />
  }
  else if(projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      {/* Adding handleStartAddProject to both buttons in Sidebar and NoProjectSelected. */}
      {/* Passing the projects object to the sidebar to show all those added. */}
      <Sidebar onStartAddProject={handleStartAddProject} projects={projectState.projects}/>
      {/* Show the Project component only when clicked on Add Project, if not show NoProjectSelected. */}
      { content }
    </main>
  );
}

export default App;
