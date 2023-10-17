import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"

import '../globals.css';
import Topbar from "@/components/shared/Topbar"
import LeftSidebar from "@/components/shared/LeftSidebar"
import RightSidebar from "@/components/shared/RightSidebar"
import Bottombar from "@/components/shared/Bottomar"

export const metadata = {
    title: 'Threads',
    description: 'threads clone made with nextjs'
}

const inter = Inter({ subsets: ["latin"]})

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>
                    <Topbar />

                    <main>
                        <LeftSidebar />

                        <section className="main-container">
                            <div className="w-full max-w-4xl">

                            </div>
                        </section>

                        <RightSidebar />

                    </main>
                    <Bottombar />
                </body>
            </html>
        </ClerkProvider>
    )
}