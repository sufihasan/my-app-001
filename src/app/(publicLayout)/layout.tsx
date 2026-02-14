import Footer from '@/components/shared/Footer/Footer';
import Header from '@/components/shared/Header/Header';
import React from 'react'

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
