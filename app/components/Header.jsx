'use client';

import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem,
} from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCity, faBolt, faUsers, faHandshake } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const fontStyle = {
    fontSize: '18px',
    width: '20px',
    marginRight: '12px'
  }

  const mobileMenuItems = [
    { text: <><FontAwesomeIcon style={fontStyle} icon={faUsers} /><span>About Us</span></>, url: '/#about-us' },
    { text: <><FontAwesomeIcon style={fontStyle} icon={faBolt} /><span>Services</span></>, url: '/#services' },
    { text: <><FontAwesomeIcon style={fontStyle} icon={faCity} /><span>Projects</span></>, url: '/projects' },
    { text: <><FontAwesomeIcon style={fontStyle} icon={faEnvelope} /><span>Contact Us</span></>, url: '/contact-us' },
    { text: <><FontAwesomeIcon style={fontStyle} icon={faHandshake} /><span>Join the Team</span></>, url: '/careers' }
  ];

  const desktopMenuItems = [
    { text: 'Projects', url: '/projects' },
    { text: 'Services', url: '/#services' },
    { text: 'About Us', url: '/#about-us' },
    { text: 'Contact', url: '/contact-us' },
    { text: 'Join the Team', url: '/careers' },
  ]

  // Custom hamburger toggle function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-btn')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isMenuOpen]);

  return (
    <>
      <Navbar
        shouldHideOnScroll
        disableAnimation
        isBordered
        className="h-24 bg-white relative z-50"
        maxWidth="full"
      >
        {/* Left side - Logo and Brand */}
        <NavbarContent className="flex-grow" justify="start">
          <Link href="/">
            <NavbarBrand className="flex items-center">
              <Image
                src="/rse-logo.png"
                alt="Rose Sing Eastham and Associates, Inc. logo"
                width={80}
                height={63}
                className="flex-shrink-0"
              />
              <div className="ml-3 hidden sm:block">
                <p className="text-lg text-black leading-tight">
                  Rose Sing Eastham<br />
                  and Associates, Inc.
                </p>
              </div>
            </NavbarBrand>
          </Link>
        </NavbarContent>
        
        {/* Desktop Menu */}
        <NavbarContent className="hidden lg:flex gap-6" justify="end">
          {desktopMenuItems.map((item, index) => (
            <NavbarItem key={`${item.text}-${index}`}>
              <Link className="text-black hover:text-blue font-medium transition-colors mr-3" href={item.url}>
                {item.text}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Custom Mobile Menu Toggle */}
        <NavbarContent className="lg:hidden" justify="end">
          <button
            onClick={toggleMenu}
            className="hamburger-btn flex flex-col justify-center items-center w-8 h-8 bg-transparent border-none cursor-pointer p-1 z-50"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span 
              className={`bg-black block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
                isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}
            ></span>
            <span 
              className={`bg-black block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out my-0.5 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span 
              className={`bg-black block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}
            ></span>
          </button>
        </NavbarContent>
      </Navbar>

      {/* Custom Mobile Menu */}
      <div className={`mobile-menu fixed top-24 left-0 w-full bg-light-blue/95 backdrop-blur-sm border-t border-gray-200 transition-all duration-300 ease-in-out z-40 lg:hidden ${
        isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
      }`}>
        <div className="flex flex-col space-y-1 max-w-sm mx-auto py-6">
          {mobileMenuItems.map((item, index) => (
            <Link
              key={`mobile-${index}`}
              className="w-full text-black flex items-center py-3 px-4 rounded-lg hover:bg-white/20 transition-colors text-base font-medium"
              href={item.url}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.text}
            </Link>
          ))}
        </div>
        
        {/* Contact Info in Mobile Menu */}
        <div className="mt-4 pt-6 border-t border-gray-300 max-w-sm mx-auto pb-6">
          <div className="text-center text-black">
            <p className="text-sm font-medium mb-2">Contact Us</p>
            <p className="text-xs mb-1">559-733-2671</p>
            <p className="text-xs">jeastham@rse-eng.com</p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-30 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
