"use client";

import React from "react";
import { Disclosure } from "@headlessui/react";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Services", href: "/services/", current: false },
  { name: "About", href: "/about/", current: false },
  { name: "Contact", href: "/contact/", current: false },
];
const NavBar = () => {
  const routerPath = usePathname();

  return (
    <div className="bg-secondary border-b sticky top-0 z-[10000]">
      <Disclosure as="nav" className="mx-auto py-4 px-6 container">
        {({ open }) => (
          <>
            <div className="">
              <div className="flex items-center justify-between">
                {/* logo */}
                <Link href="/">
                  <Image
                    src="/assets/logo/sisyphus-logo.png"
                    width={90}
                    height={90}
                    alt="sisyphus infotech logo"
                  />
                </Link>
                {/* mobile menu */}
                <div className="block items-center md:hidden">
                  {/* mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-callToAction focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <AiOutlineCloseCircle
                        size={30}
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    ) : (
                      <AiOutlineMenu
                        size={30}
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                {/* desktop menu items  */}
                <div className="hidden md:flex space-x-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`${
                        routerPath === item.href
                          ? "text-callToAction"
                          : "text-white hover:bg-callToAction"
                      } px-3 py-2 rounded-md text-sm font-medium`}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* mobile menu items */}
              <Disclosure.Panel className="p-6 space-y-2 md:hidden">
                {navigation.map((item) => (
                  <Link href={item.href} key={item.name}>
                    <Disclosure.Button
                      as="a"
                      aria-current={item.current ? "page" : undefined}
                      className={`${
                        routerPath === item.href
                          ? "text-callToAction"
                          : "text-white hover:bg-callToAction"
                      } block px-3 py-2 rounded-md text-base font-medium`}
                    >
                      {item.name}
                    </Disclosure.Button>
                  </Link>
                ))}
              </Disclosure.Panel>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default NavBar;
