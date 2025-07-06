function Footer() {
  const date = new Date().getFullYear();
  return (
    <>
      <hr style={{ backgroundColor: "#f3f0e8" }} />
      <footer
        // data-aos="fade-up"
        // data-aos-duration="3000"
        className="bg-[#94b0b0] font-freightDisp font-light text-lg text-center py-8 "
      >
        © {date} Serena Blake PsyD Psychological Services. All rights reserved.
      </footer>
    </>
  );
}

export default Footer;
