import ProjectItem from "../reuseable/projectitem";

const projectData = [
  {
    title: "Decodable.co",
    description: "Brand Design - Webflow Development - Web Design",
    url: "https://decodable.co",
  },
  {
    title: "Gofirefly.io",
    description: "Brand Design - Webflow Development - Web Design",
    url: "https://gofirefly.io",
  },
  {
    title: "Blinkops.com",
    description: "Brand Design - Webflow Development - Web Design",
    url: "https://blinkops.com",
  },
  {
    title: "Withkanvas.com",
    description: "Brand Design - Webflow Development - Web Design",
    url: "https://withkanvas.com",
  },
];

const RecentWork = () => {
  return (
    <section className="bg-[#FFFFFF] my-[160px] mx-[80px]" id="recent-work">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Section Title */}
        <div className="mb-8 md:mb-0 md:w-1/3 flex items-start">
          <h2 className="text-3xl font-semibold text-black">Recent Work</h2>
        </div>

        {/* Projects List */}
        <div className="md:w-2/3 space-y-6">
          {projectData.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              description={project.description}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
