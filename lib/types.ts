import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = {}> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export type buttonProps = React.ComponentProps<'button'>;

export type ProjectsType = { title: string, slug: string, techStack: string }

export type ProjectType = {
    title: string,
    date: string,
    slug: string,
    author?: string,
    coverImage: string,
    excerpt: string,
    content: string,
    landscape: string[],
    portrait: string[],
    demo: string,
}