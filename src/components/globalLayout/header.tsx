import React from "react";
import Link from "next/link";

export default function HeaderLayout() {
    return (
        <>
            <header>Hung</header>
            <nav className="flex justify-end">
                <Link className="ml-2" href="/">Home</Link>
                <Link className="ml-2" href="/gallery">Gallery</Link>
                <Link className="ml-2" href="/book">Books</Link>
                <Link className="ml-2" href="/about">About</Link>
            </nav>
        </>
    );
}
