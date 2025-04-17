import React from "react";
import profileImg from "../../assets/profile.png";
import { useState, useEffect } from "react";


export default function Hero() {
    return (
        <section className="bg-[#C7D0D9] h-screen w-screen overflow-hidden" id="home">
            {/* Navbar */}
            <nav className="flex justify-between items-center px-18 py-6 text-xl">
                
            </nav>

            {/* Hero Content */}
            <div className="relative h-full w-full text-center">
                {/* Large Text Behind */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="scroll-x text-[8vw] font-semibold text-white opacity-70 z-10 select-none leading-none whitespace-nowrap animate-move-right-to-left">
                    Webflow Developer - UI/UX Designer - Web Designer
                    </h2>
                </div>

                {/* Image at Bottom */}
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-0">
                    <img
                        src={profileImg}
                        alt="Profile"
                        className="h-[calc(100vh-40px)] max-h-screen w-auto object-contain"
                    />
                </div>

                {/* CTA Button */}
                <div className="absolute right-5 top-1/4 z-20">
                    <button className="group relative bg-black text-white px-6 py-3 rounded-full text-3xl flex items-center gap-2 transition-all duration-500 transform translate-x-[75%] hover:translate-x-6">
                    👋 <span className="whitespace-nowrap">Hi I’m Ayush</span>
                    </button>
                </div>
                {/* {showMenu && (
                <button
                    className="fixed top-[40px] right-[40px] bg-black text-white p-4 rounded-full shadow-lg z-50 transition-transform hover:scale-110"
                    aria-label="Menu"
                >
                    ☰
                </button>
                )} */}
            </div>
        </section>
    );
}
