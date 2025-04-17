const Footerbio = () => {
    return (
        <footer className="bg-black text-white px-[80px] py-[100px]" id='contact'>
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

export default Footerbio;