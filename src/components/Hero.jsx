function Hero() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="3000"
      className=" bg-[#f3f0e8] pb-8 relative w-full h-screen overflow-hidden px-[clamp(2rem,5vw,4rem)]"
    >
      {/* Container that centers & limits width */}
      <div className="relative w-full max-w-8xl h-full mx-auto">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Text Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center">
          <h1
            className="font-bold font-freightDisp"
            style={{ fontSize: "clamp(2rem, 4vw, 5rem)" }}
          >
            Find Clarity, Healing, and Balance
          </h1>
          <h2
            className="font-light font-freightDisp mt-4 md:mt-6 lg:mt-8"
            style={{ fontSize: "clamp(1rem, 2vw, 3rem)" }}
          >
            Compassionate, confidential therapy tailored to help you navigate
            life’s challenges and reconnect with your true self.
          </h2>

          <a href="#contact">
            <button
              style={{ fontSize: "clamp(0.7rem, 1.5vw, 2rem)" }}
              className="font-freight font-medium mt-7 md:mt-10 lg:mt-15 bg-[#94b0b0] px-3 py-2 md:px-5 md:py-4 rounded-full uppercase hover:opacity-80"
            >
              Schedule a consultation
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
