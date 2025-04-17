import TestimonialCard from "../reuseable/testimonialcard";
import ayushImg from '../../assets/PP1.jpg';
import alexImg from '../../assets/PP2.jpg';

const Testimonials = () => {
  return (
    <section className="my-[160px] mx-[80px]" id="testimonials">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Title */}
        <div className="mb-8 md:mb-0 md:w-1/3 flex items-start">
          <h2 className="text-3xl font-semibold text-black">Testimonials</h2>
        </div>

        {/* Right Content */}
        <div className="md:w-2/3">
          <TestimonialCard
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            image={ayushImg}
            name="Ayush Raj"
            title="VP of Marketing @ Webflow"
          />
          <TestimonialCard
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            image={alexImg}
            name="Alex Cattoni"
            title="Founder @ CopyPosse"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
