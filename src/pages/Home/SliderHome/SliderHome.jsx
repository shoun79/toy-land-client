import { Carousel } from 'flowbite-react';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const SliderHome = () => {
    return (
        <div data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center" className="h-56 sm:h-64 xl:h-80 2xl:h-96 my-10">
            <Carousel pauseOnHover>
                <img src="https://plus.unsplash.com/premium_photo-1701984401096-1177278eccc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyJTIwdG95c3xlbnwwfDB8MHx8fDA%3D" alt="..." />
                <img src="https://plus.unsplash.com/premium_photo-1702214406781-355475756452?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwdG95c3xlbnwwfDB8MHx8fDA%3D" alt="..." />
                <img src="https://plus.unsplash.com/premium_photo-1702214406894-731633052b4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhciUyMHRveXN8ZW58MHwwfDB8fHww" alt="..." />
            </Carousel>
        </div>
    );
};

export default SliderHome;