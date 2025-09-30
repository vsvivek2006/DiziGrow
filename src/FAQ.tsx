// src/pages/FAQ.tsx
import React from "react";
import { Helmet } from "react-helmet";

type QA = { q: string; a: string };

const FAQ: React.FC = () => {
  const faqs: QA[] = [
    {
      q: "What is digital marketing and why is it important for my business?",
      a: "Digital marketing involves using online channels like SEO, content marketing, social media, and email to promote your business. It helps increase visibility, drive traffic, and generate leads, ultimately boosting sales and revenue.",
    },
    {
      q: "How do I get started with SEO for my website?",
      a: "To start with SEO, first, optimize your website’s content with targeted keywords. Focus on improving your site’s technical SEO, like page speed and mobile responsiveness. Finally, build backlinks and monitor results using Google Analytics and Google Search Console.",
    },
    {
      q: "What is the difference between SEO and PPC?",
      a: "SEO (Search Engine Optimization) is about optimizing your website to rank higher in organic search results. PPC (Pay-Per-Click) advertising involves paying for ad placements on search engines like Google. While SEO builds long-term organic traffic, PPC provides immediate visibility.",
    },
    {
      q: "What are the benefits of social media marketing?",
      a: "Social media marketing helps increase brand awareness, engage with customers, and drive targeted traffic to your website. Platforms like Facebook, Instagram, and LinkedIn allow you to reach a vast audience and run targeted ads to drive conversions.",
    },
    {
      q: "How can a website redesign improve my business?",
      a: "A website redesign can improve user experience, increase mobile-friendliness, and enhance SEO performance. A modern, responsive website can convert more visitors into leads, improve brand credibility, and help your business stand out in the competitive digital space.",
    },
    {
      q: "What is content marketing and how does it help SEO?",
      a: "Content marketing involves creating valuable content, such as blogs, videos, and infographics, to attract and engage an audience. It helps improve SEO by increasing keyword relevancy, creating more pages for search engines to index, and driving inbound links from other websites.",
    },
    {
      q: "How do I measure the success of my digital marketing campaigns?",
      a: "You can measure success by tracking key performance indicators (KPIs) such as website traffic, conversion rates, bounce rates, and return on investment (ROI). Tools like Google Analytics, social media insights, and email marketing platforms provide detailed reports to evaluate campaign effectiveness.",
    },
    {
      q: "How can email marketing help my business?",
      a: "Email marketing is an effective way to nurture leads and maintain customer relationships. By sending personalized emails, promotions, and newsletters, you can keep your audience engaged and drive repeat business. It's a cost-effective way to convert leads into loyal customers.",
    },
    {
      q: "What is Google Analytics and how do I use it?",
      a: "Google Analytics is a free tool that tracks and reports website traffic. It helps you understand user behavior, track conversions, monitor site performance, and identify areas for improvement. Using it correctly will help you optimize your website’s user experience and SEO efforts.",
    },
    {
      q: "Why should I invest in mobile optimization for my website?",
      a: "With more users accessing websites via smartphones, mobile optimization is essential. A mobile-friendly website improves user experience, reduces bounce rates, and is favored by search engines for better rankings. Mobile optimization also improves loading speeds, which boosts SEO.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        {/* Basic Meta */}
        <title>FAQ | DiziGrow - Digital Marketing & Web Development in Jaipur, India</title>
        <meta
          name="description"
          content="Frequently asked questions about digital marketing, web development, branding, SEO, logo design, and website design. Get answers from DiziGrow, Jaipur, India."
        />
        <meta
          name="keywords"
          content="digital marketing, web development, branding, SEO, logo design, website design, Jaipur, India"
        />
        <link rel="canonical" href="https://dizigrow.com/faq" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Author & Publisher */}
        <meta name="author" content="DiziGrow" />
        <meta name="publisher" content="DiziGrow" />

        {/* Language */}
        <html lang="en" />

        {/* Structured Data - FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Answers to common questions about digital marketing, web development, branding, SEO, and more.
        </p>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <details
              key={i}
              className="group border rounded-xl bg-white shadow hover:shadow-lg transition-all duration-200 p-5"
            >
              <summary className="cursor-pointer font-semibold text-gray-900 text-lg md:text-xl flex items-center justify-between">
                {item.q}
                <span className="transition-transform group-open:rotate-45 text-purple-600 font-bold">+</span>
              </summary>
              <p className="mt-3 text-gray-700 text-base md:text-lg">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-purple-800 text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
        <p className="text-lg md:text-xl mb-6">
          Contact us directly and our team will help you get the answers you need.
        </p>
        <a
          href="https://wa.me/919521281509?text=Hello%20DiziGrow,%20I%20have%20a%20question"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 inline-block"
        >
          💬 Contact Us on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default FAQ;
