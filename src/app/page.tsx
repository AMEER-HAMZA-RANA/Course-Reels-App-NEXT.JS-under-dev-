import ProjectCard from "./components/ProjectCard"

export default function Home() {
  return (
    // <!-- Projects Section on Main Page-->
    <section id="projects">
      <div className="container grid grid-cols-5  justify-items-center gap-y-8 mt-20 max-w-5xl">
        <ProjectCard title="My Project 1"/>  
        <ProjectCard title="My Project 2"/>        
        <ProjectCard title="My Project 3"/>     
        <ProjectCard title="My Project 4"/>        
        <ProjectCard title="My Project 5"/>        
        <ProjectCard title="My Project 6"/>        
        <ProjectCard title="My Project 7"/>  
        <ProjectCard title="My Project 8"/>        
      </div>
    </section>
  )
}
