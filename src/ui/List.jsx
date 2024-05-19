function List({ name, id }) {
  return (
    <>
      <li>
        <a
          href={id}
          onClick={() =>
            document.querySelector(".lists").classList.add("hidden")
          }
          className="text-2xl font-bold hover:text-indigo-500"
        >
          {name}
        </a>
      </li>
    </>
  );
}

export default List;
