import React from "react";

const Terms: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Terms of Service</h1>
          <p className="text-purple-100 text-lg md:text-xl">
            Digital Marketing, Branding & Web Development Services — simple, transparent terms.
          </p>
          <p className="text-sm text-purple-200 mt-4">Last updated: 28 Sep 2025</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1) Acceptance of Terms</h2>
            <p>
              DiziGrow (“we”, “us”, “our”) ki services use karke aap (“Client”, “you”) in Terms se
              sahmat hote hain. Agar aap in terms se sahmat nahi, kripya services use na karein.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2) Scope of Services</h2>
            <p className="mb-3">
              Hum branding & design, digital marketing (SEO, Social, Google/Meta Ads), web
              development/e-commerce, analytics, aur related consulting provide karte hain.
              Exact scope proposal/SOW, estimate, ya invoice me define hota hai.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Deliverables: designs, creatives, ad assets, landing pages, websites, reports.</li>
              <li>Exclusions: hosting/server fees, premium plugins/apps, paid stock/media, 3rd-party tool costs (unless explicitly included).</li>
              <li>Change Requests: scope se bahar ka kaam separate estimate/approval par hoga.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3) Timelines & Client Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Timelines estimated hain; dependencies par vary kar sakte hain.</li>
              <li>Client content/assets (logo, brand copy, images, legal text) time par dene honge.</li>
              <li>Approvals/feedback 2–3 business days me dene ka commit; delays se schedule slip ho sakta hai.</li>
              <li>Access: required accounts (domain, hosting, analytics, ad managers, CMS, etc.) ke credentials/permissions client provide karega.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4) Revisions Policy</h2>
            <p className="mb-2">
              Jab tak otherwise mention na ho, har major deliverable ke saath{" "}
              <strong>2 rounds</strong> revisions included hote hain.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Consolidated feedback de; split/parallel feedback extra rounds count ho sakta hai.</li>
              <li>Scope change ya new features = separate estimate.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5) Fees, Payments & Refunds</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Project billing: typically 50% advance, 50% before final handover/deployment.</li>
              <li>Retainers/ads management: pre-paid monthly; auto-renew unless cancelled (7 days prior).</li>
              <li>Ads spend: platform ko directly client ke card se charge hoga (humari fee alag).</li>
              <li>Invoices due net-7 (ya invoice par specified). Late payments par service pause ho sakti hai.</li>
              <li>Unless stated, fees <strong>non-refundable</strong> hain; advance planning, resource allocation, aur time booking hoti hai.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6) Content & Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Client warrants ki diya gaya content third-party rights infringe nahi karta.</li>
              <li>Final paid deliverables (designs/website code excluding paid components) ka ownership client ko assign kiya jayega.</li>
              <li>Pre-existing IP, frameworks, libraries, templates, design systems humare rehेंगे; client ko non-exclusive license milta hai deliverable me use ke liye.</li>
              <li>Paid fonts, plugins, stock assets ki licensing terms respective vendors ke hisaab se chalengi.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7) Third-Party Platforms & Integrations</h2>
            <p className="mb-2">
              Hum Google, Meta, Shopify, WordPress, payment gateways, analytics tools, etc. integrate kar sakte hain.
              In platforms ke policies/uptime/fees par hum control nahi rakhte.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Policy compliance (ads/content) client ki zimmedari hai; guidance hum denge.</li>
              <li>Platform outages, bans, policy changes, ya tracking discrepancies ke liye hum liable nahi.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">8) Performance & Disclaimers</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Marketing inherently probabilistic hai—exact results (rank #1, ROAS X, leads N) guarantee nahi hai.</li>
              <li>Hum best-practice strategy, experimentation aur optimization follow karte hain.</li>
              <li>Estimates/forecasts informational hote hain; final outcomes multiple external factors par depend karte hain.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">9) Confidentiality & Data Protection</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Hum client business, data, and strategy ko confidential treat karte hain.</li>
              <li>Personal data handling applicable laws (e.g., IT rules/DPDP, GDPR where relevant) ke hisaab se hoga.</li>
              <li>Secure credentials sharing (password managers/env vars) recommended.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">10) Portfolio & Credits</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Hum apne portfolio, socials, aur case studies me anonymized ya credited work showcase kar sakte hain.</li>
              <li>Website footer me “Designed by DiziGrow” credit add ho sakta hai (client request par remove/modify possible).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">11) Warranties & Limitation of Liability</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Services “as-is” provide ki jati hain; implied warranties disclaimed.</li>
              <li>
                Humari total liability (for any claim) aggregate fees paid in last 3 months se exceed nahi karegi.
              </li>
              <li>Indirect, incidental, special, consequential damages ke liye hum liable nahi.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">12) Indemnity</h2>
            <p>
              Client agree karta hai ki client-provided content, policy violations, ya illegal use se arising claims ke
              against humko indemnify/hold harmless karega.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">13) Termination</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Project: written notice par terminate ho sakta hai; completed/milestone work billable rahega.</li>
              <li>Retainers: next billing cycle se stop karne ke liye 7-day prior notice.</li>
              <li>Non-payment/Policy breach par services suspend/terminate ki ja sakti hain.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">14) Force Majeure</h2>
            <p>
              Natural disasters, outages, regulatory actions, strikes, ya other events beyond reasonable control ki wajah se
              performance delay/fail hone par liability nahi hogi.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">15) Governing Law & Dispute Resolution</h2>
            <p>
              Ye Terms India ke applicable laws ke under governed hain. Disputes pehle amicable resolution se settle karne
              ki koshish hogi; failing which competent courts at <em>Jaipur, Rajasthan</em> ka exclusive jurisdiction hoga
              (agar aapko dusra city chahiye ho to yahan apna city mention kar dein).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">16) Changes to Terms</h2>
            <p>
              Hum kabhi bhi Terms update kar sakte hain. Updated version website par post hote hi effective hoga.
              Continued use = acceptance.
            </p>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact</h2>
            <p>
              Queries? Write to <a className="text-purple-700 underline" href="mailto:info@dizigrow.com">info@dizigrow.com</a>{" "}
              or call <a className="text-purple-700 underline" href="tel:+919521281509">+91 9521281509</a>.
            </p>
          </div>

          <p className="text-xs text-gray-500">
            Disclaimer: Ye template informational purpose ke liye hai; legal advice nahi.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Terms;
