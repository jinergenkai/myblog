import "./globals.css";
import { Inter } from "next/font/google";
import HeaderLayout from "@/components/globalLayout/header";
import FooterLayout from "@/components/globalLayout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: 'Blog',
    description: 'My blog about the thing I love.',
    icons: {
        icon: "/next.svg",
        shortcut: "next.svg",
        apple: "next.svg",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <HeaderLayout></HeaderLayout>
                {children}
                <FooterLayout></FooterLayout>
            </body>
        </html>
    );
}
