import Layout from "@/components/Layout";
import { getAllPosts, getPostBySlug, getProjectImages, markdownToHtml } from "@/lib/readAssets";
import { NextPageWithLayout, ProjectType } from "@/lib/types";

const Project: NextPageWithLayout<{ project: ProjectType }> = ({ project }) => {
    return (
        <div className="w-full md:w-[700px] px-6 flex-start md:flex-center flex-col gap-8">
            <div className="flex-start flex-col gap-4 shadow-bold p-2">
                <span className="title">{project.title}</span>
                <div className="flex-start flex-col gap-2">
                    <span className="subtitle">{project.excerpt}</span>
                    <span className="subtitle">Finished at {project.date}</span>
                    <span className="subtitle">
                        Check the demo here &nbsp;
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-red-800">
                            {`{ ${project.title} }`}
                        </a>
                    </span>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: project.content}} className="markdown" />
        </div>
    )
}

Project.getLayout = function getLayout(page) {
    const { project } = page.props as { project: ProjectType }
    return (
        <Layout title={project.title}>
            {page}
        </Layout>
    )
}

export default Project;

export const getStaticPaths = () => {
    const projects = getAllPosts(['slug']);
    return {
        paths: projects.map(project => {
            return {
                params: {
                    slug: project.slug
                }
            }
        }),
        fallback: false
    }
}

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
    const project = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'coverImage',
        'excerpt',
        'content',
        'demo'
    ])

    const galleryImages = getProjectImages(project.slug);
    const content = await markdownToHtml(project.content || '');

    return {
        props: {
            project: {
                ...project,
                landscape: galleryImages.landscapeImages,
                content
            }
        }
    }
}