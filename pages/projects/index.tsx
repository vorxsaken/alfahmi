import Card from "@/components/Card"
import Layout from "@/components/Layout"
import { getAllPosts } from "@/lib/readAssets"
import { NextPageWithLayout, ProjectsType } from "@/lib/types"
import { ReactElement } from "react"

const Projects: NextPageWithLayout<{ projects: ProjectsType[] }> = ({ projects }) => {
    return (
        <div className="flex-start gap-8 flex-col w-auto md:w-[950px]">
            <span className="title"># Projects</span>
            <div className="flex-start flex-col md:flex-row gap-6 md:gap-8 flex-wrap">
                {projects.map(project => (
                    <Card
                        key={project.slug}
                        slug={project.slug}
                        techStack={project.techStack}
                        title={project.title}
                    />
                ))}
            </div>
        </div>
    )
}

Projects.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout title="Projects">
            {page}
        </Layout>
    )
}

export default Projects;

export const getStaticProps = async () => {
    const projects = getAllPosts([
        'title',
        'slug',
        'techStack'
    ])

    return {
        props: { projects }
    }
}