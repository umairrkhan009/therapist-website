function Rates() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="3000"
      className="bg-[#94b0b0] text-center p-11 text-[#000000] "
    >
      <h1 className="font-freightDisp font-light text-2xl">Rates and Fees</h1>
      <div className="font-freight font-light space-y-7 text-lg ">
        <p className="mt-8">
          Individual Session Fee - <strong>$200</strong>
        </p>
        <p>
          Couple Session Fee - <strong>$240</strong>
        </p>

        <p>
          I do not accept insurance, but I can provide a superbill for possible
          out-of-network reimbursement.
        </p>
        <p>
          Cancellations require at least 24 hours’ notice to avoid a full
          session fee.
        </p>
      </div>
    </section>
  );
}

export default Rates;
