'use client';

import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCity, faBolt, faUsers, faHandshake } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const fontStyle = {
    fontSize: '20px',
    width: '25px',
    marginRight: '8px'
  }

  const mobileMenuItems = [
    { text: <><FontAwesomeIcon style={fontStyle} icon={faUsers} /><div>About Us</div></>, url: '/about-us' },
    { text: <><FontAwesomeIcon style={fontStyle} icon={faBolt} /><div>Services</div></>, url: '/services' },
    { text: <><FontAwesomeIcon style={fontStyle} icon={faCity} /><div>Projects</div></>, url: '/' },
    { text: <><FontAwesomeIcon style={fontStyle} icon={faEnvelope} /><div>Contact Us</div></>, url: '/contact-us' },
    { text: <><FontAwesomeIcon style={fontStyle} icon={faHandshake} /><div>Join the Team</div></>, url: '/careers' }
  ];

  const desktopMenuItems = [
    { text: 'About Us', url: '/about-us' },
    { text: 'Services', url: '/services' },
    { text: 'Projects', url: '/' },
    { text: 'Contact Us', url: '/contact-us' },
    { text: 'Join the Team', url: '/careers' },
  ]

  return (
    <Navbar
      shouldHideOnScroll
      disableAnimation
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="h-24 bg-white"
    >
      <NavbarContent className="pr-3 md:pr-0" justify="center">
        <a href="/">
          <NavbarBrand>
            <Image
              src="/rse-logo.png"
              alt="Rose Sing Eastham and Associates, Inc. logo"
              width={100}
              height={79}
            />
            <p className="text-xl ml-2 text-blue">Rose Sing Eastham <br />and Associates, Inc.</p>
          </NavbarBrand>
        </a>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        {desktopMenuItems.map((item, index) => (
          <NavbarItem key={`${item}=${index}`}>
            <a className="text-black hover:text-blue" href={item.url}>
              {item.text}
            </a>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="lg:hidden" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} style={{ color: '#000000' }} />
      </NavbarContent>
      <NavbarMenu className={`bg-light-blue top-24 transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        {mobileMenuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className="pt-5">
            <a
              className="w-full text-black flex items-center"
              href={item.url}
            >
              {item.text}
            </a>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
