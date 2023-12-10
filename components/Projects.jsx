import React from 'react'
import ProjectCard from './ProjectCard'

const projectData = [
  {
    id: 1,
    title: 'Favorite Song List',
    description:
      'Made in 2021. Made to practice WEBGL. Only works in safari now for some reason.',
    image: '/projects/songlist.webp',
    gitUrl: 'https://song-list.vercel.app/'
  },
  {
    id: 2,
    title: 'Holonometria',
    description:
      'Made in 2021. Also made to practice WEBGL and also Svelte. Works best in desktop.',
    image: '/projects/holonometria.webp',
    gitUrl: 'https://holonometria.vercel.app'
  },
  {
    id: 3,
    title: 'MangaDex',
    description:
      '"Best website to read manga scanlations." Made with Vue. I started developing the frontend in July 2023.',
    image: '/projects/mangadex.webp',
    gitUrl: 'https://mangadex.org'
  }
]

const Projects = () => {
  return (
    <div id="projects">
      <div className="text-4xl font-semibold mb-8">My Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-1 gap-x-8 gap-y-4 md:gap-12 h-full mb-8">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
