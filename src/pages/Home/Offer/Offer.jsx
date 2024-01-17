import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
AOS.init();

const Offer = () => {
    return (
        <div data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center" className="p-6 py-12 bg-violet-400 text-gray-900 rounded">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <h2 className="text-center text-6xl tracki font-bold">Up to
                        <br className="sm:hidden" />50% Off
                    </h2>
                    <div className="space-x-2 text-center py-2 lg:py-0">
                        <span>Plus free shipping! Use code:</span>
                        <span className="font-bold text-lg">TOYSLAND</span>
                    </div>
                    <Link to="/all-toys" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 text-gray-900 dark:border-gray-400">Shop Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Offer;