import React from "react";
import { Helmet } from "react-helmet";

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Terms of Service | DiziGrow - Digital Marketing & Web Development</title>
        <meta
          name="description"
          content="Read DiziGrow's Terms of Service for digital marketing, branding, and web development services. Understand our policies, payments, and client agreements."
        />
        <meta
          name="keywords"
          content="terms of service, digital marketing terms, web development agreement, branding contract, SEO services terms"
        />
        <link rel="canonical" href="https://dizigrow.com/terms" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-2">
            Digital Marketing, Branding & Web Development Services
          </p>
          <p className="text-lg text-purple-200">Simple, transparent, and professional terms</p>
          <div className="mt-6 text-sm text-purple-300">
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-ul:text-gray-700 prose-li:text-gray-700">
            
            <div className="mb-12 p-6 bg-purple-50 rounded-xl border border-purple-200">
              <p className="text-lg text-gray-700 mb-0">
                <strong>Important:</strong> Please read these Terms of Service carefully before using our services. 
                By engaging with DiziGrow, you agree to be bound by these terms.
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
                  Acceptance of Terms
                </h2>
                <p>
                  By accessing or using the services provided by DiziGrow ("we", "us", "our"), 
                  you ("Client", "you") acknowledge that you have read, understood, and agree to 
                  be bound by these Terms of Service. If you do not agree with any part of these terms, 
                  please refrain from using our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                  Scope of Services
                </h2>
                <p className="mb-4">
                  We provide comprehensive digital services including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Branding & Design (Logo design, brand identity, visual assets)</li>
                  <li>Digital Marketing (SEO, Social Media Marketing, Google/Meta Ads)</li>
                  <li>Web Development & E-commerce Solutions</li>
                  <li>Analytics & Performance Tracking</li>
                  <li>Digital Strategy Consulting</li>
                </ul>
                <p className="mb-2"><strong>Key Points:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Exact project scope is defined in the proposal, Statement of Work (SOW), or estimate</li>
                  <li>Deliverables include designs, creatives, ad assets, landing pages, websites, and reports</li>
                  <li>Exclusions: Third-party costs, premium plugins, paid stock media, and hosting fees unless explicitly included</li>
                  <li>Change requests outside initial scope require separate estimates and approval</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">3</span>
                  Timelines & Client Responsibilities
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Project timelines are estimates and may vary based on dependencies</li>
                  <li>Client must provide required content, assets, and information in a timely manner</li>
                  <li>Approvals and feedback should be provided within 2-3 business days</li>
                  <li>Delays in client responses may impact project schedules</li>
                  <li>Client must provide necessary access to accounts and platforms as required</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">4</span>
                  Revisions Policy
                </h2>
                <p className="mb-2">
                  Unless otherwise specified in the project agreement, each major deliverable includes 
                  <strong> 2 rounds of revisions</strong> at no additional cost.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Feedback should be consolidated and provided in a single communication</li>
                  <li>Additional revisions or scope changes may incur extra charges</li>
                  <li>Major changes in direction or new features require separate estimates</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">5</span>
                  Fees, Payments & Refunds
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Project-based work typically requires 50% advance payment with balance due before final delivery</li>
                  <li>Retainer services are pre-paid monthly and auto-renew unless cancelled with 7 days notice</li>
                  <li>Advertising spend is billed directly by platforms to client's payment method</li>
                  <li>Invoices are due within 7 days of issuance unless otherwise specified</li>
                  <li>Late payments may result in service suspension</li>
                  <li>Fees are generally non-refundable once work has commenced</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">6</span>
                  Content & Intellectual Property
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Client warrants that all provided content does not infringe third-party rights</li>
                  <li>Upon full payment, ownership of final deliverables is transferred to the client</li>
                  <li>We retain rights to pre-existing IP, frameworks, libraries, and design systems</li>
                  <li>Third-party assets (fonts, plugins, stock media) are subject to their respective licenses</li>
                  <li>We may use completed work in our portfolio unless otherwise agreed</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">7</span>
                  Third-Party Platforms & Integrations
                </h2>
                <p className="mb-2">
                  We integrate with various platforms including Google, Meta, Shopify, WordPress, 
                  and payment gateways. Please note:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We are not responsible for third-party platform policies, uptime, or fees</li>
                  <li>Client is responsible for compliance with platform policies and guidelines</li>
                  <li>Platform outages, policy changes, or account restrictions are beyond our control</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">8</span>
                  Performance & Disclaimers
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Digital marketing results are probabilistic and cannot be guaranteed</li>
                  <li>We employ industry best practices and continuous optimization</li>
                  <li>Forecasts and estimates are informational and subject to market conditions</li>
                  <li>Final outcomes depend on multiple external factors beyond our control</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">9</span>
                  Confidentiality & Data Protection
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We treat all client information as confidential</li>
                  <li>Personal data handling complies with applicable privacy laws</li>
                  <li>Secure methods for credential sharing are recommended</li>
                  <li>We implement reasonable security measures to protect client data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">10</span>
                  Portfolio & Credits
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We may showcase completed work in our portfolio and marketing materials</li>
                  <li>Client attribution may be used unless requested otherwise</li>
                  <li>Website credit in footer can be modified or removed upon client request</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">11</span>
                  Warranties & Limitation of Liability
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Services are provided "as-is" without implied warranties</li>
                  <li>Our total liability is limited to fees paid in the preceding 3 months</li>
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>Client agrees to use services at their own risk</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">12</span>
                  Indemnification
                </h2>
                <p>
                  Client agrees to indemnify and hold harmless DiziGrow from any claims, damages, 
                  or losses arising from client-provided content, policy violations, or illegal use 
                  of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">13</span>
                  Termination
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Projects may be terminated with written notice; completed work remains billable</li>
                  <li>Retainer services require 7-day notice for cancellation</li>
                  <li>We reserve the right to suspend services for non-payment or policy violations</li>
                  <li>Upon termination, client must settle all outstanding payments</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">14</span>
                  Force Majeure
                </h2>
                <p>
                  We are not liable for delays or failures in performance resulting from circumstances 
                  beyond our reasonable control, including natural disasters, internet outages, 
                  regulatory actions, or other force majeure events.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">15</span>
                  Governing Law & Dispute Resolution
                </h2>
                <p>
                  These Terms are governed by the laws of India. Any disputes shall first be attempted 
                  to be resolved amicably. If resolution fails, the competent courts in 
                  <strong> Jaipur, Rajasthan</strong> shall have exclusive jurisdiction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">16</span>
                  Changes to Terms
                </h2>
                <p>
                  We reserve the right to modify these Terms at any time. Updated terms become 
                  effective upon posting on our website. Continued use of our services constitutes 
                  acceptance of the modified terms.
                </p>
              </section>

              <section className="border-t pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="mb-2">
                  For any questions regarding these Terms of Service, please contact us:
                </p>
                <div className="space-y-2">
                  <p>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:info@dizigrow.com" className="text-purple-600 hover:text-purple-700 underline">
                      info@dizigrow.com
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong>{' '}
                    <a href="tel:+919521281509" className="text-purple-600 hover:text-purple-700 underline">
                      +91 9521281509
                    </a>
                  </p>
                  <p>
                    <strong>Address:</strong> Jaipur, Rajasthan, India
                  </p>
                </div>
              </section>

              <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Disclaimer:</strong> This document is provided for informational purposes only 
                  and does not constitute legal advice. We recommend consulting with legal 
                  professionals for specific contractual agreements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;