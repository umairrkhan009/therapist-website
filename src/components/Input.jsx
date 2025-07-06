function Input({ children, type }) {
  return (
    <input
      type={type}
      placeholder={children}
      className="px-4 py-2 rounded-lg bg-[#94b0b0] placeholder-[#f3f0e8] font-freight font-normal placeholder:font-freight placeholder:font-light text-[#f3f0e8] focus:outline-none"
      required
    />
  );
}

export default Input;
