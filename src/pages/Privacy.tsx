import React from "react";

const Privacy: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-purple-100 text-lg md:text-xl">
            How DiziGrow collects, uses, protects, and shares your information.
          </p>
          <p className="text-sm text-purple-200 mt-2">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-10">
          {/* Intro */}
          <div>
            <p>
              This Privacy Policy explains how <strong>DiziGrow</strong> (“we”, “us”, “our”) collects,
              uses, discloses, and safeguards personal information when you visit our website, engage
              with our digital marketing campaigns, or use our services. By using our website/services,
              you agree to this Policy. If you do not agree, please discontinue use.
            </p>
            <div className="mt-4 bg-purple-50 border border-purple-100 rounded-xl p-4 text-sm text-purple-900">
              <strong>Regulatory note:</strong> We strive to comply with applicable laws, including
              India’s Digital Personal Data Protection (DPDP) Act and, where relevant, GDPR. References
              below to “lawful basis” and “data principal rights” reflect these standards.
            </div>
          </div>

          {/* What we collect */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1) Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Identity & Contact:</strong> name, email, phone, company, role.</li>
              <li><strong>Business & Content:</strong> project brief, brand assets you share.</li>
              <li><strong>Technical:</strong> IP address, device/browser info, pages viewed, referrer URLs, session data.</li>
              <li><strong>Usage & Analytics:</strong> interactions with pages, forms, CTAs; events/pixels (GA4, Meta, etc.).</li>
              <li><strong>Marketing:</strong> preferences, consent, campaign engagement (opens, clicks, conversions).</li>
              <li><strong>Payment/Commercial:</strong> invoices, transaction metadata (processed via third-party gateways; we do not store card data).</li>
            </ul>
            <p className="text-sm text-gray-600 mt-2">
              Sensitive personal data is not intentionally collected. Please avoid sharing it.
            </p>
          </div>

          {/* Sources */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2) Sources of Data</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Direct:</strong> forms, emails, WhatsApp, calls, meetings.</li>
              <li><strong>Automated:</strong> cookies, tags, analytics, pixels.</li>
              <li><strong>Third-Party:</strong> ad platforms, CRM or lead gen tools you connect/provide.</li>
            </ul>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3) Cookies & Similar Technologies</h2>
            <p className="mb-2">
              We use cookies, pixels, and tags to enable site functionality, remember preferences,
              analyze performance, and measure/optimize campaigns.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Essential:</strong> required for core functionality.</li>
              <li><strong>Analytics:</strong> GA4/GTM events, traffic sources, on-site behavior.</li>
              <li><strong>Marketing:</strong> remarketing/conversion pixels (e.g., Google Ads, Meta).</li>
            </ul>
            <p className="text-sm text-gray-600 mt-2">
              You can manage cookies via your browser settings. Some features may not work without certain cookies.
            </p>
          </div>

          {/* How we use */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4) How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide, operate, and improve our website and services.</li>
              <li>Respond to inquiries, proposals, and support requests.</li>
              <li>Plan, execute, and optimize campaigns; measure performance/ROI.</li>
              <li>Personalize experiences and recommend relevant services.</li>
              <li>Security, fraud prevention, troubleshooting, and diagnostics.</li>
              <li>Legal compliance and enforcement of our Terms/Agreement.</li>
            </ul>
          </div>

          {/* Lawful basis */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5) Legal Bases / Consent</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Consent:</strong> marketing communications, non-essential cookies.</li>
              <li><strong>Contract:</strong> to deliver services requested/paid for.</li>
              <li><strong>Legitimate Interest:</strong> analytics, security, product improvement.</li>
              <li><strong>Legal Obligation:</strong> taxation, accounting, compliance.</li>
            </ul>
            <p className="text-sm text-gray-600 mt-2">
              You may withdraw consent at any time (see “Your Rights” below).
            </p>
          </div>

          {/* Sharing */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6) How We Share Information</h2>
            <p className="mb-2">
              We do not sell personal data. We may share limited information with:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Processors/Vendors:</strong> hosting, CDN, analytics (GA4/GTM), ad platforms (Google, Meta), CRM/email tools, payment gateways, project tools.</li>
              <li><strong>Partners/Sub-contractors:</strong> only as needed for agreed work, under confidentiality and DP terms.</li>
              <li><strong>Legal/Compliance:</strong> when required by law or to protect rights/safety.</li>
            </ul>
          </div>

          {/* International transfer */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7) International Transfers</h2>
            <p>
              Vendors may process data in other countries. We take reasonable steps to ensure appropriate
              safeguards (e.g., contractual protections) consistent with applicable law.
            </p>
          </div>

          {/* Retention */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">8) Data Retention</h2>
            <p>
              We retain data only for as long as necessary for the purposes above or as required by law.
              Typical retention: marketing contacts up to 24 months of last interaction; project records
              aligned with statutory/accounting obligations.
            </p>
          </div>

          {/* Security */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">9) Security</h2>
            <p>
              We use reasonable technical and organizational measures to protect data (access controls,
              encryption in transit, least-privilege practices). No system is 100% secure; please share
              credentials via secure methods (password managers).
            </p>
          </div>

          {/* Children */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">10) Children’s Privacy</h2>
            <p>
              Our services are intended for business users. We do not knowingly collect data from
              children under applicable age thresholds.
            </p>
          </div>

          {/* Your rights */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">11) Your Rights</h2>
            <p className="mb-2">
              Subject to law, you may have the right to: access, correct, update, delete, restrict or
              object to processing, withdraw consent, and request data portability.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Access/Correction:</strong> get a copy of your data or ask us to fix inaccuracies.</li>
              <li><strong>Deletion (“Right to be Forgotten”):</strong> request erasure where legally permitted.</li>
              <li><strong>Consent Management:</strong> opt-out of marketing or withdraw cookie consent.</li>
              <li><strong>Objection/Restriction:</strong> where we rely on legitimate interests.</li>
              <li><strong>Portability:</strong> receive data in a commonly used format where feasible.</li>
            </ul>
            <p className="text-sm text-gray-600 mt-2">
              We may verify your identity before actioning requests and may retain limited data as required by law.
            </p>
          </div>

          {/* How to exercise */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">12) How to Contact / Exercise Rights</h2>
            <p>
              Email <a className="text-purple-700 underline" href="mailto:info@dizigrow.com">info@dizigrow.com</a> or call{" "}
              <a className="text-purple-700 underline" href="tel:+919521281509">+91 9521281509</a>. We aim to respond within 7 business days.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Address: DiziGrow, Jaipur, Rajasthan, India
            </p>
          </div>

          {/* Marketing choices */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">13) Marketing Preferences</h2>
            <p>
              You can unsubscribe from emails using the footer link or by contacting us. For ads
              preferences, adjust settings in Google/Meta or your device’s ad settings.
            </p>
          </div>

          {/* Third-party links */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">14) Third-Party Websites</h2>
            <p>
              Our site may link to external sites we do not control. Their privacy practices apply to
              their content and services.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">15) Changes to This Policy</h2>
            <p>
              We may update this Policy from time to time. Material changes will be posted here with an
              updated “Last updated” date. Continued use signifies acceptance.
            </p>
          </div>

          {/* Summary card */}
          <div className="border rounded-xl p-5 bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Summary</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>We collect contact, usage/analytics, and project data to deliver & improve services.</li>
              <li>We use cookies/pixels (GA4, Google/Meta) with consent and provide opt-outs.</li>
              <li>We don’t sell personal data; we share with vetted processors/vendors as needed.</li>
              <li>You have rights to access, correct, delete, object/restrict, and withdraw consent.</li>
            </ul>
          </div>

          <p className="text-xs text-gray-500">
            Disclaimer: This template is for general guidance and not legal advice. Please review with legal counsel.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
