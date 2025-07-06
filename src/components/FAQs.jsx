import FaqComponent from "@/components/FaqComponent";

const faqs = [
  {
    title: "Do you accept insurance?",
    text: "No, but a superbill is provided for self-submission.",
  },
  {
    title: "Are online sessions available?",
    text: "Yes—all virtual sessions via Zoom",
  },
  {
    title: "What is your cancellation policy?",
    text: "24—hour notice required",
  },
];

function FAQs() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="3000"
      className="bg-[#f3f0e8] px-12 py-16 text-center"
    >
      <h1 className="font-freightDisp font-bold text-3xl text-[#000000]">
        Frequently Asked Questions
      </h1>
      <div className="my-10 divide-y divide-black divide border-y border-black">
        {faqs.map((faq) => {
          return (
            <FaqComponent title={faq.title} text={faq.text} key={faq.title} />
          );
        })}
      </div>
    </section>
  );
}

export default FAQs;
