// src/components/Services.jsx
import { useState, useEffect } from 'react';

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: "SEO Services",
      tagline: "Be visible. Be found. Be chosen.",
      stat: "+300% Organic Traffic",
      description: "We optimize your digital presence to rank higher, attract more organic traffic, and dominate search results.",
      features: [
        "Technical SEO Audits",
        "On-Page Optimization", 
        "Keyword Strategy",
        "Link Building"
      ],
      illustration: "/images/seoimg.jpg" // SEO Services image
    },
    {
      title: "Paid Advertising",
      tagline: "Every click counts. Every ad earns.",
      stat: "+250% ROAS",
      description: "Performance-driven campaigns across Google, Facebook, Instagram, and LinkedIn that convert clicks into customers.",
      features: [
        "Campaign Strategy & Setup",
        "Audience Targeting",
        "Ad Creative Development", 
        "Performance Optimization"
      ],
      illustration: "/images/paidimg.jpg" // Paid Advertising image
    },
    {
      title: "Social Media Management",
      tagline: "Build communities. Drive engagement.",
      stat: "+400% Engagement",
      description: "Strategic social media management that builds brand awareness and fosters meaningful connections with your audience.",
      features: [
        "Content Strategy",
        "Community Management",
        "Social Advertising",
        "Analytics & Reporting"
      ],
      illustration: "/images/socialimg.jpg" // Social Media Management image
    },
    {
      title: "Content Strategy",
      tagline: "We turn ambition into action with integrated digital marketing services that connect, captivate, and convert.",
      stat: "+200% Conversions",
      description: "We create content that not only tells your story but drives action. Every blog, script, and email is crafted to command trust, and boost conversions powered by Insight-Led framework.",
      features: [
        "SEO Blog Content",
        "Video Script Writing",
        "Email Copywriting",
        "Brand Storytelling"
      ],
      illustration: "/images/contentimg.jpg" // Content Strategy image
    },
    {
      title: "Brand Development",
      tagline: "We turn ambition into action with integrated digital marketing services that connect, captivate, and convert.",
      stat: "+150% Brand Recognition",
      description: "We help you craft a brand that goes beyond a logo one that's instantly recognizable, emotionally resonant, and built to connect with your ideal audience at every touchpoint.",
      features: [
        "Brand Identity Design",
        "Voice & Messaging",
        "Brand Guidelines",
        "Market Positioning"
      ],
      illustration: "/images/brandimg.jpg" // Brand Development image
    },
    {
      title: "Analytics & Reporting",
      tagline: "We turn ambition into action with integrated digital marketing services that connect, captivate, and convert.",
      stat: "100% Data Accuracy",
      description: "We turn raw data into powerful insights that guide your next move. With smart tracking and real-time analysis, you'll always know what's working and where to go next.",
      features: [
        "Custom Dashboards",
        "Performance Analytics",
        "ROI Tracking",
        "Monthly Reports"
      ],
      illustration: "/images/servicesimg.jpg" // Analytics & Reporting image
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 4000); // Change slide every 4 seconds for better flow

    return () => clearInterval(interval);
  }, [services.length]);



  return (
    <section 
      id="services" 
      className="min-h-screen bg-black text-white py-20 px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/servicesbg.jpg')" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Services</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We turn ambition into action with integrated digital marketing services that connect, captivate, and convert.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                         <div className="grid md:grid-cols-2 gap-8">
                                               {/* Left Side - Illustration */}
                        <div className="flex items-center justify-center">
                          <div className="w-full">
                            {service.illustration.startsWith('/') ? (
                              <div className="w-full rounded-2xl overflow-hidden border border-white/20 aspect-square">
                                <img 
                                  src={service.illustration} 
                                  alt={service.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ) : (
                              <div className="w-full rounded-2xl bg-gradient-to-br from-blue-900 to-purple-700 flex items-center justify-center border border-white/20 aspect-square">
                                <div className="text-6xl">{service.illustration}</div>
                              </div>
                            )}
                          </div>
                        </div>

                       {/* Right Side - Content */}
                       <div className="space-y-6 flex flex-col justify-center">
                        <div>
                          <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                          <p className="text-xl text-gray-300 mb-4">{service.tagline}</p>
                          <div className="text-2xl font-bold text-purple-400 mb-4">
                            {service.stat}
                          </div>
                        </div>

                        <p className="text-gray-200 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <span className="text-yellow-400">⭐</span>
                              <span className="text-gray-200">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>



                            {/* Dots Indicator */}
                  <div className="flex justify-center mt-8 space-x-3">
                    {services.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                          index === currentSlide ? 'bg-white shadow-lg scale-110' : 'bg-white/30 hover:bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
        </div>
      </div>
    </section>
  );
}
  