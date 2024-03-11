'use client'
import { Inter } from "next/font/google";
import "./gloab.css";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkToken = async () => {
            setLoading(true);
            const token = localStorage.getItem('token');
            setLoading(false);

            if (!token) {
                router.push('/admin/login');
            }
            else{
                router.push('/admin/gallery')
            }
        };

        checkToken();
    }, [router]);

    if (loading) {
        return (
            <h1>Loading...</h1>
        );
    }

    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
