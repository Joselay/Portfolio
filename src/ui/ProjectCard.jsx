function ProjectCard({ image }) {
  return (
    <div className="bg-[#1C1C22] w-[70%] rounded-2xl cursor-pointer transition duration-300 group hover:bg-[#222121] md:w-[90%] ">
      <figure className="overflow-hidden rounded-t-2xl">
        <img
          className="transition duration-300 rounded-t-2xl hover:scale-110"
          src={image}
          alt=""
        />
      </figure>
      <div className="p-8">
        <h1 className="text-lg font-bold transition duration-300 group-hover:text-indigo-400">
          Finance Landing Page
        </h1>
        <span className="text-sm transition duration-300 group-hover:text-indigo-400">
          Landing Page UI Kit
        </span>
      </div>
    </div>
  );
}

export default ProjectCard;
