const certifications = [
    { title: "Meta Frontend Developer Certificate", year: 2023 },
    { title: "Google UX Design Certificate", year: 2022 },
    { title: "JavaScript Mastery Course", year: 2021 },
  ];
  
  function Certifications() {
    return (
      <section id="certifications" className="py-20 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white" data-aos="fade-up">
          Certifications
        </h2>
  
        {/* Responsive Grid Layout */}
        <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-5 border rounded-md bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{cert.title}</h3>
              <p className="text-gray-500">{cert.year}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Certifications;
  