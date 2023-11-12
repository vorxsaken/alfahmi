import Button from "./Button"
import Router from "next/router";

function Navigation() {
  const scroll = (id: string) => {
    if (Router.pathname === '/') {
      Router.push(`/#${id}`);
    } else {
      if (id === 'projects') {
        Router.push(`/${id.toLowerCase()}`);
      } else {
        Router.push(`/#${id}`);
      }
    }

  }

  return (
    <div className="flex-center py-4 px-6 gap-1 w-full h-14 z-10">
      <Button className="w-auto flex md:hidden h-7 px-2 text-xs border-2 border-black bg-white" onClick={() => scroll('about')}>{`{ About }`}</Button>
      <Button className="w-auto hidden md:flex h-7 px-2 text-xs border-2 border-black bg-white" onClick={() => Router.push('/')}>{`{ Home }`}</Button>
      <Button className="w-auto hidden md:flex h-7 px-2 text-xs border-2 border-black bg-white" onClick={() => Router.push('/projects')}>{`{ Projects }`}</Button>
      <Button className="w-auto flex md:hidden h-7 px-2 text-xs border-2 border-black bg-white" onClick={() => scroll('projects')}>{`{ Projects }`}</Button>
      <Button className="w-auto flex md:hidden h-7 px-2 text-xs border-2 border-black bg-white" onClick={() => scroll('skills')}>{`{ Skills }`}</Button>
    </div>
  )
}

export default Navigation