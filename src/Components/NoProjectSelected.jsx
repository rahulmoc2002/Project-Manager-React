import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";
export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3 ">
      <p className="text-xl font-bold text-stone-500 my-4">
        No Project Selected Currently
      </p>
      <img
        src={noProjectImage}
        alt="Image"
        className="h-16 w-16 object-contain mx-auto"
      />
      <p>Select a Project</p>
      <p>
        <Button onClick={onStartAddProject}>Create a New Project</Button>
      </p>
    </div>
  );
}
