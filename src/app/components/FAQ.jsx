// src/components/FAQ.jsx
export default function FAQ() {
  const faqs = [
    {
      question: "How do you customize strategies for different industries?",
      answer: "We start by understanding your audience, goals, and market landscape then build a tailored plan rooted in real data, not guesswork.",
    },
    {
      question: "Can I choose specific services instead of a full package?",
      answer: "Yes! Our services are modular. You can start with what you need now and scale as your business grows.",
    },
    {
      question: "What platforms do you specialize in?",
      answer: "We work across major digital platforms including Google, Meta (Facebook/Instagram), LinkedIn, YouTube, and emerging channels relevant to your audience.",
    },
    {
      question: "How do you measure campaign success?",
      answer: "Success is measured through key performance indicators (KPIs) aligned with your goals whether that's leads, traffic, conversions, or revenue.",
    },
    {
      question: "Is there a minimum contract term?",
      answer: "We offer flexible plans. While some strategies benefit from 3-6 month commitments, we're happy to discuss options that work for your timeline.",
    },
  ];

  return (
    <section 
      id="faq"
      className="text-white py-20 px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/whybg.jpg')" }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8 mb-20">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-purple-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-600/30 transition-all duration-500 ease-in-out cursor-pointer hover:scale-110 hover:shadow-2xl hover:shadow-black/60 hover:border-purple-400/50"
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-200 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="text-center pt-10 border-t border-white/10">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">
            TrendyVibes
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
            From strategy to scale, we craft digital experiences that captivate,
            convert, and keep your audience coming back for more.
          </p>
          <div className="text-gray-400 text-sm">
            <span>© 2025 Trendy Vibes. All rights reserved.</span>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
