import Input from "./Input";
export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex itemsn-center justify-end gap-4 my-4">
        <li>
          <button className=" px-3 py-1.5 text-stone-800 hover:text-stone-900">
            Cancel
          </button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input textarea label="Desc" />
        <Input label="Due date" />
      </div>
    </div>
  );
}
