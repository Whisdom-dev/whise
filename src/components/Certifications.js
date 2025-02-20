const certifications = [
    { title: "Meta Frontend Developer Certificate", year: 2023 },
    { title: "Google UX Design Certificate", year: 2022 },
    { title: "JavaScript Mastery Course", year: 2021 },
  ];
  
  function Certifications() {
    return (
      <section id="certifications" className="py-20">
        <h2 className="text-3xl font-bold text-center" data-aos="fade-up">Certifications</h2>
        <div className="max-w-lg mx-auto mt-6 space-y-4">
          {certifications.map((cert, index) => (
            <div key={index} className="p-4 border rounded-md bg-gray-100 dark:bg-gray-800">
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-gray-500">{cert.year}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Certifications;
  