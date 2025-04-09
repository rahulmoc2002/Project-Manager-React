export default function Deleted({ deleteds }) {
  console.log(deleteds);
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h1 className="mb-8 font-bold uppercase md-text-xl text-stone-200">
        Deleted Projects
      </h1>
      {deleteds.map((deleted, index) => (
        <p
          key={index}
          className="mb-8 font-bold uppercase md-text-xl text-stone-200"
        >
          {deleted.title}
          {deleted.description}
        </p>
      ))}
    </aside>
  );
}
