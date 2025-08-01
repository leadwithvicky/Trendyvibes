// src/components/LetsTalk.jsx
import { useState } from 'react';

const contactInfo = [
  {
    icon: "📧",
    title: "Email",
    main: "hello@trendyvibes.com",
    subtitle: "We'll respond within 24 hours"
  },
  {
    icon: "📞",
    title: "Call Us",
    main: "+1 (555) 123-4567",
    subtitle: "Mon-Fri, 9AM-6PM"
  },
  {
    icon: "📍",
    title: "Visit Us",
    main: "Cyber Towers, HITEC City, Hyderabad",
    subtitle: "Schedule an appointment",
    
  },
  {
    icon: "🕒",
    title: "Business Hours",
    main: "Monday-Friday: 9AM-6PM",
    subtitle: "Weekend consultations available"
  }
];

const whyChoose = [
  "4+ years of digital marketing expertise",
  "50+ successful projects completed",
  "98% client satisfaction rate",
  "Dedicated account management",
  "Data-driven strategies that deliver ROI",
  "24/7 support and monitoring"
];

const ContactCard = ({ icon, title, main, subtitle, button }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/30 flex flex-col group">
    <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-125">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-lg mb-1">{main}</p>
    <p className="text-gray-300 text-sm mb-4">{subtitle}</p>
    {button && (
      <div className="mt-auto">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
          {button}
        </button>
      </div>
    )}
  </div>
);

const Field = ({ label, as, children, ...props }) => (
  <div>
    <label className="block text-sm font-semibold mb-2">{label}</label>
    {as === 'textarea' ? (
      <textarea
        {...props}
        className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-all duration-300 resize-none"
      ></textarea>
    ) : as === 'select' ? (
      <select
        {...props}
        className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
      >
        {children}
      </select>
    ) : (
      <input
        {...props}
        className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-all duration-300"
      />
    )}
  </div>
);

export default function LetsTalk() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData((f) => ({
      ...f,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section
      id="lets-talk"
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white py-20 px-6"
      style={{ backgroundImage: "url('/whybg.jpg')" }}
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your next big move starts here.
          </h1>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto">
            Whether you're looking to grow, rebrand, or simply do things smarter we're ready to help you make it happen. No fluff, just focused conversations and real solutions.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, i) => (
            <ContactCard key={i} {...info} />
          ))}
        </div>

                 {/* Form + Illustration Wrapper */}
         <div
           className="rounded-3xl p-1 border border-white/20 bg-cover bg-center bg-no-repeat min-h-[400px] transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
           style={{ backgroundImage: "url('/contactimg.jpg')" }}
         >
           <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 h-full">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Illustration placeholder */}
             

              {/* Form */}
              <div>
                <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field
                      label="Name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                    />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field
                      label="Company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company"
                    />
                    <Field
                      label="Project Budget"
                      name="budget"
                      as="select"
                      value={formData.budget}
                      onChange={handleInputChange}
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-10k">$5K - $10K</option>
                      <option value="10k-25k">$10K - $25K</option>
                      <option value="25k-50k">$25K - $50K</option>
                      <option value="50k+">$50K+</option>
                    </Field>
                  </div>

                  <Field
                    label="Message"
                    name="message"
                    as="textarea"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    rows={4}
                    required
                  />

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8">
            Why Choose Trendy Vibes?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 flex items-start gap-4 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/30 group"
              >
                <div className="text-yellow-400 text-2xl mt-1 transition-transform duration-300 group-hover:scale-125">✓</div>
                <p className="text-white flex-grow">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Free Strategy Session */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Free Strategy Session
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Claim your free 30-minute strategy session — let's explore your goals
            and map out the smartest path to digital growth.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 border-2 border-yellow-400">
            Schedule Free Call
          </button>
        </div>
      </div>
    </section>
  );
}
