import Education from "./Education";

export default function Experience() {
  return (
    <article
      id="journey"
      className="flex flex-col px-10 py-20 gap-14 lg:items-center lg:mt-12"
    >
      <Education experience="Education" />
      <Education experience="Work Experience" />
    </article>
  );
}
