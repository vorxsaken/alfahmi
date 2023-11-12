import Head from "next/head"
import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";


function Layout({ children, title }: { children: ReactNode, title: string }) {
    const headTitle = `${title} | vorxsaken`;

    return (
        <>
            <Head>
                <title>{headTitle}</title>
            </Head>
            <header>
                <Navigation />
            </header>
            <main className="w-full min-h-screen h-auto flex justify-start items-center flex-col mt-8 md:mt-6">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout