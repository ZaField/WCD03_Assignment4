import profileImg from '../../assets/selfpp.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white px-[80px] py-[100px]" id='contact'>
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            {/* Left Side: Text + Image */}
            <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-semibold mb-4">
                Have something in mind?
                </h2>
    
                <div className="flex items-center gap-4">
                {/* Profile image */}
                <img
                    src={profileImg}
                    alt="Profile"
                    className="w-16 h-16 rounded-full object-cover"
                />
    
                {/* Subheading */}
                <p className="text-4xl md:text-5xl font-semibold">
                    let’s build it together.
                </p>
                </div>
            </div>
    
            {/* Right Button */}
                <Link to="/contact">
                    <button className="bg-white text-black rounded-full px-8 py-4 text-sm font-medium hover:bg-gray-200 transition">
                        Get in touch
                    </button>
                </Link>
            </div>
    
            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p className="mb-4 md:mb-0">
                Build with <span className="text-pink-500">💖</span> by Brightscout & Ayush
            </p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white transition">LinkedIn</a>
                <a href="#" className="hover:text-white transition">Twitter</a>
                <a href="#" className="hover:text-white transition">Instagram</a>
                <a href="#" className="hover:text-white transition">Webflow</a>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
