import Image from "next/image";

function Service({ image, title, text }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-10">
      <div className="relative w-[80%] aspect-[1/1] rounded-full overflow-hidden ">
        <Image
          src={`/${image}.jpg`}
          alt="Service 1"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <h1 className="font-freightDisp font-light text-2xl text-center">
        {title}
      </h1>
      <p className="font-freight font-light text-sm text-center md:text-lg ">
        {text}
      </p>
    </div>
  );
}

export default Service;
