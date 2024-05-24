import noProjectImg from "../assets/no-projects.png";
import Button from "./Button";
export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3 ">
      <img
        src={noProjectImg}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-gray-500 my-4">
        No Project Selected
      </h2>
      <p className="text-gray-400 mb-4">
        Select a project, create a new one, or join using a workspace code.
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
