import "./globals.css";
import { Inter } from "next/font/google";
import HeaderLayout from "@/components/globalLayout/header";
import FooterLayout from "@/components/globalLayout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Jiner",
    description: "My blog about the thing I love.",
    icons: {
        icon: "/logo.png",
        shortcut: "logo.png",
        apple: "logo.png",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head />
            <body className={inter.className}>
                <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
                <HeaderLayout/>
                {children}
                <FooterLayout/>
</div>
            </body>
        </html>
    );
}
