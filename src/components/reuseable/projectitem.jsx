const ProjectItem = ({ title, description, url }) => {
    return (
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h3 className="text-xl font-medium text-black">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 border rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
        >
          ↗
        </a>
      </div>
    );
  };
  
  export default ProjectItem;
  