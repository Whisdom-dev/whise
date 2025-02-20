import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

const services = [
  { 
    icon: <FaLaptopCode size={40} className="text-blue-500 mx-auto" />, 
    title: "Web Development", 
    description: "Building responsive & modern websites with React & Tailwind." 
  },
  { 
    icon: <FaMobileAlt size={40} className="text-green-500 mx-auto" />, 
    title: "Mobile Optimization", 
    description: "Ensuring websites work seamlessly on mobile devices." 
  },
  { 
    icon: <FaPaintBrush size={40} className="text-purple-500 mx-auto" />, 
    title: "UI/UX Design", 
    description: "Creating visually appealing user interfaces with Figma & CSS." 
  },
];

function Services() {
  return (
    <section id="services" className="py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center" data-aos="fade-up">What I Offer</h2>
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-10">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="p-6 border rounded-lg text-center shadow-md transition-transform transform hover:scale-105 bg-white dark:bg-gray-900"
          >
            {service.icon}
            <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-500 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
