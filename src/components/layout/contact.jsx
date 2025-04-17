import profileImg from '../../assets/selfpp.png';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen text-black px-8 md:px-24 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={profileImg}
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover mb-6"
          />

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Contact Details</h3>
            <p>ayush.barnwal@brightscout.com</p>
            <p>+91 8651447521</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Social</h3>
            <ul className="space-y-1 text-blue-500">
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Webflow</a></li>
              <li><a href="#">Figma</a></li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-4xl font-semibold mb-10">
            Let’s build something cool together
          </h2>

          <form className="space-y-8">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input type="text" className="w-full border-b border-gray-400 bg-transparent py-2 outline-none" placeholder="Your name" />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input type="email" className="w-full border-b border-gray-400 bg-transparent py-2 outline-none" placeholder="you@email.com" />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Subject</label>
              <input type="text" className="w-full border-b border-gray-400 bg-transparent py-2 outline-none" placeholder="Your subject" />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea className="w-full border-b border-gray-400 bg-transparent py-2 outline-none" placeholder="Type your message" rows="4"></textarea>
            </div>

            <button type="submit" className="mt-6 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
