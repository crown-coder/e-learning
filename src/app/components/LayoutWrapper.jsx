"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
    const pathname = usePathname();
    const isAdminPage = pathname.startsWith("/admin") || pathname.startsWith("/mentor") || pathname.startsWith("/sign-up") || pathname.startsWith("/sign-in") || pathname.startsWith("/forget");

    return (
        <>
            {!isAdminPage && <Navbar />}
            {children}
            {!isAdminPage && <Footer />}
        </>
    );
}
