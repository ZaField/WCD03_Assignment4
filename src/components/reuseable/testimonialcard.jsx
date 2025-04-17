const TestimonialCard = ({ text, image, name, title }) => {
    return (
      <div className="mb-10">
        <p className="text-lg text-gray-700 mb-4">“{text}”</p>
        <div className="flex items-center gap-4">
          <img src={image} alt={name} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default TestimonialCard;
  