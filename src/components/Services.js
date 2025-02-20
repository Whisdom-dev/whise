import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

const services = [
  { icon: <FaLaptopCode size={40} className="text-blue-500" />, title: "Web Development", description: "Building responsive & modern websites with React & Tailwind." },
  { icon: <FaMobileAlt size={40} className="text-green-500" />, title: "Mobile Optimization", description: "Ensuring websites work seamlessly on mobile devices." },
  { icon: <FaPaintBrush size={40} className="text-purple-500" />, title: "UI/UX Design", description: "Creating visually appealing user interfaces with Figma & CSS." },
];

function Services() {
  return (
    <section id="services" className="py-20">
      <h2 className="text-3xl font-bold text-center" data-aos="fade-up">What I Offer</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-6">
        {services.map((service, index) => (
          <div key={index} className="p-6 border rounded-md text-center shadow-md">
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
