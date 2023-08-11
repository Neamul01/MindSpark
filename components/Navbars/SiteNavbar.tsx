"use client";
import { navbarTabs } from "@/constants/navTabs";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";
import React from "react";
import Layout from "../Layouts/Layout/Layout";
import { usePathname } from "next/navigation";
import AppLogo from "../Common/AppLogo";

export default function SiteNavbar() {
  const router = usePathname();

  const navTabs = navbarTabs.map((tab) => (
    <Navbar.Link
      active={router.indexOf(tab.href) !== -1}
      key={tab.id}
      href={tab.href}
      className="text-secondary active:text-primary"
    >
      {tab.title}
    </Navbar.Link>
  ));
  return (
    <Layout>
      <Navbar fluid rounded>
        <AppLogo />
        <div className="flex md:order-2">
          <Dropdown
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            {navTabs}
            <Dropdown.Divider />
            <p>Sign out</p>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>{navTabs}</Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}
