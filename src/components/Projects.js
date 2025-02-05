import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';

function Projects() {
    const projects = [
      {
        title: "E-commerce Website",
        description: "A full-featured online store built with React and Node.js",
        image: image1,  // ✅ Use imported image variable
      },
      {
        title: "Uber-Clone App",
        description: "A ride-hailing app inspired by Uber, built with React Native",
        image: image2,  // ✅ Use imported image variable
      },
      {
        title: "Task Manager",
        description: "A React-based to-do list application with local storage",
        image: image3,  // ✅ Use imported image variable
      },
    ];

    return (
      <section id="projects" className="py-20">
        <div className="container mx-auto py-10 px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={project.image} // ✅ Now correctly references the image file
                  alt={project.title} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default Projects;
