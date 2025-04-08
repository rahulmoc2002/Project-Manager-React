export default function SelectedProject({ project, ondeleteProject }) {
  return (
    <div>
      <header>
        <div>
          <h1>{project.title}</h1>
          <button onClick={ondeleteProject}>Delete</button>
        </div>
        <p>{project.dueDate}</p>
        <p>{project.description}</p>
      </header>
    </div>
  );
}
