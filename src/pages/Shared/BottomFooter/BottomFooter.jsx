import React from 'react';
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from './../../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const BottomFooter = () => {
    return (
        <Footer data-aos="fade-up"

            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out" container className='mt-10 bg-gray-900 rounded-none'>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <Link>
                        <Footer.Brand className='h-16'
                            src={logo}
                            alt="Logo"
                        />
                    </Link>
                    <Footer.LinkGroup>
                        <Footer.Link href="#">About</Footer.Link>
                        <Footer.Link href="#">Privacy Policy</Footer.Link>
                        <Footer.Link href="#">Licensing</Footer.Link>
                        <Footer.Link href="#">Contact</Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="TOYS LAND™" year={2024} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="#" icon={BsFacebook} />
                        <Footer.Icon href="#" icon={BsInstagram} />
                        <Footer.Icon href="#" icon={BsTwitter} />
                        <Footer.Icon href="#" icon={BsGithub} />
                        <Footer.Icon href="#" icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </Footer>
    );
};

export default BottomFooter;