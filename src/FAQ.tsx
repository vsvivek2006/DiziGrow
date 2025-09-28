// src/pages/FAQ.tsx
import React from "react";

type QA = { q: string; a: string };

const FAQ: React.FC = () => {
  const faqs: QA[] = [
    { q: "How do I get started?", a: "Contact us and we’ll onboard you in 24–48h." },
    { q: "Where can I see pricing?", a: "See the Pricing page for current plans." },
    { q: "How do I cancel?", a: "Reach out via Contact; we’ll guide you through." },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((item, i) => (
          <details key={i} className="group border rounded-xl p-4 bg-white">
            <summary className="cursor-pointer font-semibold">{item.q}</summary>
            <p className="mt-2 text-gray-700">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
