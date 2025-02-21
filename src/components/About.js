function About() {
  return (
    <section id="about" className="py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold" data-aos="fade-up">
          About Me
        </h2>
        <p
          className="mt-4 text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I'm a frontend developer passionate about building beautiful UIs with
          React. I create stunning, responsive websites with clean and
          efficient code.
        </p>
      </div>
    </section>
  );
}

export default About;
