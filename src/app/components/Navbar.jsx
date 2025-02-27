"use client";
import { useState } from "react";
import Link from "next/link";
import { GiTwinShell } from "react-icons/gi";
import { FaCartFlatbed } from "react-icons/fa6";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full flex justify-between items-center px-10 py-3 bg-white relative">
            {/* Logo & Brand */}
            <div className="flex items-center gap-2 font-bold">
                <Link href="/" className="p-2 bg-indigo-700 rounded-md text-white">
                    <GiTwinShell size={25} />
                </Link>
                <h2 className="text-xl">UniqueShelves</h2>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-5 items-center font-semibold text-sm">
                {["Home", "About", "Courses", "Products", "Blogs", "My Courses"].map((item, index) => (
                    <li key={index}>
                        <Link className="hover:text-indigo-700 transition" href={`/${item.toLowerCase().replace(" ", "-")}`}>
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Cart & Sign In */}
            <div className="hidden md:flex items-center gap-4">
                <Link href="/cart">
                    <FaCartFlatbed size={20} className="cursor-pointer hover:text-indigo-700 transition" />
                </Link>
                <div className="flex items-center gap-3">
                    <SignedOut>
                        <SignInButton />
                        <SignUpButton className="py-1 px-5 text-white bg-indigo-700 rounded-full hover:bg-indigo-800 transition" />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>

            {/* Mobile Menu Icon */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
            </button>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-[100%] left-0 w-full bg-white shadow-md md:hidden z-50">
                    <ul className="flex flex-col items-center gap-5 py-5 font-semibold text-sm">
                        {["Home", "About", "Courses", "Products", "Blogs", "My Courses"].map((item, index) => (
                            <li key={index} onClick={() => setIsOpen(false)}>
                                <Link className="hover:text-indigo-700 transition" href={`/${item.toLowerCase().replace(" ", "-")}`}>
                                    {item}
                                </Link>
                            </li>
                        ))}
                        {/* Cart & Sign In (Mobile) */}
                        <li className="flex items-center gap-4 mt-4">
                            <Link href="/cart" onClick={() => setIsOpen(false)}>
                                <FaCartFlatbed size={20} className="cursor-pointer hover:text-indigo-700 transition" />
                            </Link>
                            {/* <button className="py-1 px-5 text-white bg-indigo-700 rounded-full hover:bg-indigo-800 transition">
                                Sign in
                            </button> */}
                            <div>
                                <SignedOut>
                                    <SignInButton />
                                    <SignUpButton />
                                </SignedOut>
                                <SignedIn>
                                    <UserButton />
                                </SignedIn>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
