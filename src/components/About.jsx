import Image from "next/image";

function About() {
  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-duration="3000"
        className=" px-10 py-12 max-w-6xl mx-auto text-[#7e7e6b] md:max-w-[50rem] lg:max-w-[60rem] "
      >
        <h1 className="text-2xl md:text-3xl font-bold font-freightDisp mb-6 lg:text-4xl md:hidden">
          About Dr. Jennifer Hahm
        </h1>

        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          {/* Image */}
          {/* <div className="relative w-60 h-64 aspect-auto mx-auto"> */}
          <Image
            src="/headshot.jpg"
            alt="Dr. Serena Blake"
            // className="w-full h-auto object-cover rounded"
            // fill
            width={400}
            height={500}
            sizes="100vw"
          />
          {/* </div> */}
          {/* Text Content */}
          <div className="md:max-w-[20rem] lg:max-w-[25rem]">
            <h1 className="text-2xl hidden md:text-3xl font-bold font-freightDisp mb-6 lg:text-4xl md:block">
              About Dr. Serena Blake
            </h1>
            <p className=" font-freight font-normal text-lg md:text-xl ">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based
              in Los Angeles, CA, with eight years of experience and over 500
              client sessions. She blends evidence-based approaches—like
              cognitive-behavioral therapy and mindfulness—with compassionate,
              personalized care to help you overcome anxiety, strengthen
              relationships, and heal from trauma. Whether you meet in her
              Maplewood Drive office or connect virtually via Zoom, Dr. Blake is
              committed to creating a safe, supportive space for you to thrive.
            </p>
          </div>
        </div>
      </section>
      <hr className="mx-auto w-[80%] border border-stone-[#7e7e6b]" />
    </>
  );
}

export default About;
