import Link from "next/link";
import Image from "next/image";

export default function HeaderLayout() {
    return (
        <>
            <div className="flex justify-between border-black border-b-[1px]">
                <header className="m-4 text-3xl font-extrabold">JinerGenkai</header>
                <nav className="flex justify-end">
                    <Link className="m-2 mt-6" href="/blog">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="inline-block w-5 h-5" role="presentation"><path d="M18,22A2,2 0 0,0 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18Z"></path></svg>
                        <div className="inline-block">Blog</div>
                    </Link>
                    <Link className="m-2 mt-6" href="/gallery">
                        <Image src="/image-gallery.png" className="inline-block w-5 h-5 m-1" width={24} height={24} alt="logo" />
                        <div className="inline-block">Gallery</div>
                    </Link>
                    <Link className="m-2 mt-6" href="/">
                        <Image src="/open-book.png" className="inline-block w-5 h-5 m-1" width={24} height={24} alt="logo" />
                        <div className="inline-block">Books</div>
                    </Link>
                    <Link className="m-2 mt-6" href="/">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="inline-block w-5 h-5" role="presentation"><path d="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z"></path></svg>
                        <div className="inline-block">Code</div>
                    </Link>
                </nav>
            </div>
            <div className="mt-8"></div>
        </>
    );
}
