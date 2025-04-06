import { useRef } from "react";
import Input from "./Input";
export default function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const duedate = useRef();
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = title.current.value;
    const enteredDuedate = title.current.value;
    onAdd({
      title: enteredTitle,
      desc: enteredDescription,
      due: enteredDuedate,
    });
  }
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex itemsn-center justify-end gap-4 my-4">
        <li>
          <button className=" px-3 py-1.5 text-stone-800 hover:text-stone-900">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} label="Title" />
        <Input ref={description} textarea label="Desc" />
        <Input ref={duedate} label="Due date" />
      </div>
    </div>
  );
}
