// src/components/ServicesNew.jsx
import { useState } from "react";

export default function ServicesNew() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: "/seoico.png",
      title: "SEO Services",
      short: "Built for search, shaped for dominance—we make your brand unmissable.",
      details: [
        "Comprehensive keyword research targeting high-intent searchers.",
        "Technical SEO audit & implementation (site speed, schema, crawlability).",
        "Content gap analysis and content pillar strategy.",
        "Authority-building via link acquisition and PR integration.",
        "Monthly performance reporting with actionable insights.",
        "Competitor intelligence and trend adaptation.",
      ],
      color: "text-black",
    },
    {
      icon: "/paidico.png",
      title: "Paid Advertising",
      short: "We engineer every ad to ignite action—sharp, strategic, built for instant impact.",
      details: [
        "Audience segmentation and intent-based targeting.",
        "Creative testing (copy + visual) with multivariate experimentation.",
        "Bid strategy tuning for efficiency and scale.",
        "Cross-platform funnel orchestration (awareness → conversion).",
        "Automated budget pacing and alerting.",
        "Post-click experience optimization (landing page synergy).",
      ],
      color: "text-black",
    },
    {
      icon: "/analyticico.png",
      title: "Social Media Management",
      short: "We sculpt your social presence into a living brand that speaks and captivates.",
      details: [
        "Brand-aligned content calendar with strategic hooks.",
        "Community engagement and reputation monitoring.",
        "Short-form video & carousel content production.",
        "Platform-tailored growth experiments.",
        "Sentiment tracking and feedback loops.",
        "Monthly audience insights and trend reports.",
      ],
      color: "text-black",
    },
    {
      icon: "/contentico.png",
      title: "Content Strategy",
      short: "Strategic content that inspires action and elevates your brand.",
      details: [
        "Audience persona development and mapping.",
        "Content pillar and cluster planning.",
        "Cross-channel content repurposing roadmap.",
        "Story-driven narrative arcs aligned to customer journey.",
        "Performance-based editorial calendar.",
        "Content ROI modeling and optimization.",
      ],
      color: "text-black",
    },
    {
      icon: "/brandico.png",
      title: "Brand Development",
      short: "We shape brands that speak with clarity and connect with purpose.",
      details: [
        "Brand core discovery (mission, values, voice).",
        "Visual identity and asset system.",
        "Tone & messaging frameworks.",
        "Go-to-market brand positioning playbook.",
        "Customer perception testing.",
        "Brand guidelines for consistency and scaling.",
      ],
      color: "text-black",
    },
    {
      icon: "/reportico.png",
      title: "Analytics & Reporting",
      short: "Precision insights that turn performance into progress.",
      details: [
        "KPI framework tailored to business goals.",
        "Dashboard creation (real-time + historical).",
        "Automated reporting with narrative summaries.",
        "Attribution modeling and funnel leakage analysis.",
        "A/B test tracking & statistical significance.",
        "Quarterly strategic insight reviews.",
      ],
      color: "text-black",
    },
  ];

  return (
    <section
      className="text-white py-20 px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/whybg.jpg')" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We help brands grow smarter, faster, and stronger. Whether you're
            building from scratch or scaling what works, our services are
            crafted to spark real results.
          </p>
        </div>

        {/* Detail pane replacing cards */}
        {activeIndex !== null ? (
          <div className="mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-10 border border-white/30 shadow-2xl relative">
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute top-4 right-4 text-sm px-3 py-1 bg-gray-800 rounded-full hover:bg-gray-700 transition"
              >
                Close
              </button>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={services[activeIndex].icon}
                    alt={services[activeIndex].title}
                    className="w-36 h-36 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4">
                    {services[activeIndex].title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {/* could add a longer description here if desired */}
                    {services[activeIndex].short}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    {services[activeIndex].details.map((point, i) => (
                      <div
                        key={i}
                        className="bg-white/10 rounded-lg p-4 border border-white/20"
                      >
                        <p className="text-gray-100">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Grid of six service cards with the new hover effect
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setActiveIndex(index)}
                >
                  <div
                    className={` backdrop-blur-sm rounded-2xl p-8 border border-purple-600/30 transition-all duration-500 ease-in-out cursor-pointer group ${
                      isHovered
                        ? "scale-110 shadow-2xl shadow-black/60 border-purple-400/50"
                        : ""
                    }`}
                  >
                    <div className="mb-4">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-50 h-36 object-contain"
                      />
                    </div>
                    <h3
                      className={`text-xl font-bold mb-3 ${service.color}`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-2">{service.short}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
