import List from "./List";

function Lists() {
  return (
    <ul className="absolute z-10 flex flex-col items-center justify-center hidden w-screen h-screen gap-20 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-md lists left-1/2 top-1/2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60">
      <List name="Home" id="" />
      <List name="Journey" id="#journey" />
      <List name="Projects" id="#projects" />
      <List name="About" id="#about" />
      <List name="Contact" id="#contact" />
    </ul>
  );
}

export default Lists;
