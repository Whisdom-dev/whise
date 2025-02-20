function Hero() {
  return (
    <section id="hero" className="text-center py-20">
      <h1 className="text-4xl font-bold" data-aos="fade-up">
        Hi, I'm Whisdom 👋
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300" data-aos="fade-up" data-aos-delay="200">
        Frontend Developer | React Enthusiast | UI/UX Lover
      </p>
     
      <a
        href="#projects"
        className="mt-6 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        data-aos="fade-up" data-aos-delay="400"
      >
        View My Work
      </a>
    </section>
  );
}

export default Hero;
