function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "Responsive Design",
    "UI/UX Design",
  ];

  return (
    <section id="skills" className="py-20 bg-gray-200 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          My Skills
        </h2>

        {/* Skills Grid - Responsive */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm sm:text-base md:text-lg font-medium transition-transform transform hover:scale-105 hover:bg-blue-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
