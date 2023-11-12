import Button from "@/components/Button";
import Card from "@/components/Card";
import Layout from "@/components/Layout";
import { getAllPosts } from "@/lib/readAssets";
import { NextPageWithLayout, ProjectsType } from "@/lib/types";
import Link from "next/link";
import { ReactElement, useEffect, useRef } from "react";
import Typed from "typed.js";

const Home: NextPageWithLayout<{ projects: ProjectsType[] }> = ({ projects }) => {
  const skillsString = 'nextjs vuejs javascript typescript figma reactjs mongodb ms-office tailwindcss shadcn vuetify googling';
  const linksArray = ['nextjs.org', 'vuejs.org', 'developer.mozilla.org/en-US/docs/Web/JavaScript', 'typescriptlang.org', 'figma.com', 'react.dev',
    'mongodb.com', 'office.com', 'tailwindcss.com', 'ui.shadcn.com', 'vuetifyjs.com', 'google.com'];
  const intro = useRef(null);
  const about = useRef(null);

  useEffect(() => {
    const typedIntro = new Typed(intro.current, {
      strings: ['frontend dev', 'long life learner', 'overthinker', 'certified human', ''],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      cursorChar: '_',
    })

    const typedAbout = new Typed(about.current, {
      strings: [' cat about-me.txt^800\n<br/><br/>`Im a frontend developer whos passionate about creating engaging and user-friendly web experiences. My journey in web development began with a curious exploration of HTML and CSS, and Ive been hooked ever since. While I dont have all the answers, Im always eager to learn and improve, and I find great satisfaction in solving design and coding I believe in the power of collaboration and am grateful for the opportunity to work with talented designers and developers who continuously inspire me to grow.`'],
      typeSpeed: 50,
      startDelay: 800,
      cursorChar: '_',
    })
    
    return () => {
      typedIntro.destroy();
      typedAbout.destroy();
    }
  }, [])

  const aboutSection = (
    <div className="flex-start gap-4 flex-col " id="about">
      <div className="flex-start flex-col gap-4 md:gap-6">
        <span className="title hidden md:flex"># About</span>
        <div className="w-72 flex-center text-2xl font-extrabold shadow-bold py-4">
          Hi, iam alfahmi
        </div>
        <div className="flex-start gap-2 mb-0 md:mb-6">
          <span>{`> Im`}</span>
          <span ref={intro} />
        </div>
      </div>
      <div className="w-72 flex-start flex-col gap-6">
        <span className="title flex md:hidden"># About</span>
        <div className="w-full p-3 text-xs shadow-bold font-bold">
          <div>
            <span className="mr-2">{`[vorxsaken@fedora ~]$`}</span>
            <span ref={about} />
          </div>
        </div>
      </div>
    </div>
  )

  const projectsSection = (
    <div className="w-72 flex-start flex-col gap-6 ml-0 md:ml-3" id="projects">
      <span className="title"># Projects</span>
      {
        projects.map(project => (
          <Card key={project.title} title={project.title} slug={project.slug} techStack={project.techStack} />
        ))
      }
      <Link href={'/projects'} className="w-full" scroll={true}>
        <Button variant={"full"}>{`{ More .. }`}</Button>
      </Link>
    </div>
  )

  const skillsSection = (
    <div className="w-72 flex-start flex-col gap-6" id="skills">
      <span className="title"># Skills</span>
      <div className="flex-start flex-col gap-4">
        <div className="flex-start gap-4 flex-wrap">
          {
            skillsString.split(' ').map((skill, index) => (
              <a key={skill} href={`https://${linksArray[index]}`} target="_blank" rel="noopener noreferrer">
                <Button variant={"full"} className="w-[85px] px-2 text-xs capitalize">
                  {skill}
                </Button>
              </a>
            ))
          }
        </div>
        <div className="flex-start flex-col gap-2">
          <span className="text-sm">And the two and only</span>
          <div className="flex-start gap-4">
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
              <Button variant={"full"} className="w-20 px-2 text-xs capitalize">html</Button>
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
              <Button variant={"full"} className="w-20 px-2 text-xs capitalize">css</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex-center flex-col md:flex-row md:flex-start gap-8 md:gap-12">
      {aboutSection}
      {projectsSection}
      {skillsSection}
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Home">
      {page}
    </Layout>
  )
}

export default Home


export const getStaticProps = async () => {
  const getProjects = getAllPosts([
    'title',
    'slug',
    'techStack'
  ])

  const projects = getProjects.filter(project => project.slug === 'electronics-store' || project.slug === 'inventory-system')

  return {
    props: { projects }
  }
}
