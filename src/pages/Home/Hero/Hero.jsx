import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Hero = () => {
    return (
        <section data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center" className="bg-gray-800 text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="https://plus.unsplash.com/premium_photo-1702498664869-47f37ff07088?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fHRveXMlMjBjYXJzfGVufDB8fDB8fHww" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leadi sm:text-6xl">
                        <span className="text-violet-400">Toys</span>Land
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">We’ve picked few pieces we’re pretty sure you’ll ❤.
                        <br className="hidden md:inline lg:hidden" />Check back often and enjoy.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link rel="noopener noreferrer" to="/login" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-white">Login</Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;