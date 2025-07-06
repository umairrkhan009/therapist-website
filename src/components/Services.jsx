import Service from "./Service";

function Services() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="3000"
      className="px-10 py-6 mt-10 text-[#41413f] bg-[#f3f0e8] "
    >
      <h1 className="font-freightDisp font-light text-3xl text-center text">
        Area of Focus
      </h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start mx-auto">
        <Service
          image="anxiety-stress-control"
          title="Anxiety & Stress Management"
          text="Managing anxiety and stress can feel overwhelming, especially when daily demands begin to impact your emotional well-being, relationships, or physical health. Through therapy, you can gain practical tools to identify triggers, manage anxious thoughts, and build healthier coping strategies. Together, we’ll work to understand the root causes of your stress and create a personalized plan to restore balance, build resilience, and support lasting emotional wellness."
        />
        <Service
          image="relationship-counselling"
          title="Relationship Counseling "
          text="Healthy relationships require communication, trust, and emotional connection—but even the strongest partnerships can face challenges. Whether you're experiencing conflict, feeling disconnected, or navigating a major life transition, relationship counseling offers a supportive space to strengthen your bond. In therapy, we’ll explore patterns, improve communication skills, and help each partner feel heard and valued, fostering a more fulfilling and resilient relationship."
        />
        <Service
          image="trauma-recovery"
          title="Trauma Recovery"
          text="Trauma can leave lasting emotional and physical effects, often shaping how we see ourselves and the world. Trauma recovery therapy provides a safe and compassionate space to process painful experiences at your own pace. Using evidence-based approaches, we’ll work together to reduce distress, rebuild a sense of safety, and empower you to reclaim control of your life. Healing is possible—and you don’t have to go through it alone."
        />
      </div>
    </section>
  );
}

export default Services;
