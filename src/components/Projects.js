import image1 from "../images/image1.png"
import image2 from "../images/image2.png"
import image3 from "../images/image3.png"

function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A full-featured online store built with React and Node.js",
      image: image1,
      url: "https://e-groceries.vercel.app/",
    },
    {
      title: "Uber-Clone App",
      description: "A ride-hailing app inspired by Uber, built with React Native",
      image: image2,
      url: "https://uber-clone-seven-liard.vercel.app/",
    },
    {
      title: "Profile Card",
      description: "A React-based to-do list application with local storage",
      image: image3,
      url: "https://profilecard-eight-phi.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48 sm:h-56 md:h-64">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-lg sm:text-xl mb-2">{project.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base mb-4">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md text-sm sm:text-base hover:bg-blue-600 transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

