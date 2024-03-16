'use client'
import React,{useState} from 'react';
import Link from 'next/link';
import ContactForm from './ContactForm';  // Import ContactForm component
import {  useRouter } from 'next/navigation';
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter()
    const [isContactFormOpen, setContactFormOpen] = useState(false);
  
    const handleToggle = () => {
      setOpen(!open);
    };
  
    const handleToggleForm = () => {
        router.push('/donate')
    };
  
    return (
        <nav className=" bg-[#1D24CA]   w-full z-20 top-0 start-0  ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src='/logo.png' className=" h-20 w-auto"  />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">CFI Mission</span>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                {/* <button
        type="button"
        onClick={handleToggleForm}
bg      >
        Donate us
      </button> */}

      {isContactFormOpen && <ContactForm onClose={handleToggleForm} />}
    
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        onClick={handleToggle}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden"
                        aria-controls="navbar-sticky"
                        aria-expanded={open ? 'true' : 'false'}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                        open ? '' : 'hidden'
                    }`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-[#1D24CA] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
                        <li>
                            <Link
                                href="/"
                                className="block py-2 px-3 text-white rounded    hover:text-[#1D24CA]md:hover:bg-transparent md:hover:text-purple-900 md:p-0 "
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about/sureshkumar"
                                className="block py-2 px-3 text-white rounded    hover:text-[#1D24CA]md:hover:bg-transparent md:hover:text-purple-900 md:p-0 "
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/testimonials"
                                className="block py-2 px-3 text-white rounded    hover:text-[#1D24CA]md:hover:bg-transparent md:hover:text-purple-900 md:p-0 "
                            >
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/gallery"
                                className="block py-2 px-3 text-white rounded    hover:text-[#1D24CA]md:hover:bg-transparent md:hover:text-purple-900 md:p-0 "
                            >
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services"
                                className="block py-2 px-3 text-white rounded    hover:text-[#1D24CA]md:hover:bg-transparent md:hover:text-purple-900 md:p-0 "
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="block py-2 px-3 text-white rounded    hover:text-[#1D24CA]md:hover:bg-transparent md:hover:text-purple-900 md:p-0"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
