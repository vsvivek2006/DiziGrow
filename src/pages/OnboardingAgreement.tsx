import React from "react";

const OnboardingAgreement: React.FC = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Onboarding Agreement
          </h1>
          <p className="text-purple-100 text-lg md:text-xl">
            A clear process to kickstart your Digital Marketing, Branding & Web Development engagement.
          </p>
          <p className="text-sm text-purple-200 mt-4">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-6">
          <p>
            This Onboarding Agreement (“Agreement”) outlines how DiziGrow (“we”, “us”, “our”) will
            initiate and deliver services to the Client (“you”, “your”). It defines scope, access,
            approvals, timelines, deliverables, and responsibilities so your project can launch smoothly
            and achieve measurable outcomes.
          </p>

          <div className="bg-purple-50 border border-purple-100 rounded-xl p-4">
            <p className="text-sm text-purple-900">
              <strong>Note:</strong> This Agreement is an operational guide for onboarding. It is used
              together with any Proposal/Quotation/SOW and our Terms of Service. If there’s a conflict,
              the Proposal/SOW prevails for scope & pricing; Terms of Service prevail for legal terms.
            </p>
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1) Scope of Services</h2>
            <p className="mb-3">
              Your Proposal/SOW specifies exactly what’s included. Typical service categories:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Branding & Design:</strong> Logo, brand identity, social templates, ads creatives.</li>
              <li><strong>Digital Marketing:</strong> SEO, Google & Meta Ads, Social Media Management, email flows.</li>
              <li><strong>Web Development:</strong> Website/Landing pages, e-commerce, performance & analytics setup.</li>
              <li><strong>Analytics & Reporting:</strong> KPI framework, dashboards, campaign reports.</li>
            </ul>
            <p className="mt-2 text-sm text-gray-600">
              Exclusions: hosting fees, premium plugins/apps, paid stock assets, 3rd-party SaaS costs,
              editorial/legal reviews—unless explicitly included.
            </p>
          </div>

          {/* Access & Assets */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2) Access & Assets (Client To Provide)</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Brand assets: logo (vector), color palette, fonts, brand guidelines.</li>
              <li>Copy & content: product/service descriptions, policies, legal text (e.g., Privacy, Terms).</li>
              <li>Accounts/permissions (as applicable): domain/hosting, CMS, Google Analytics/Tag Manager/Search Console, Google Ads, Meta Business Manager, email marketing, payment gateways, CRM, marketplace accounts.</li>
              <li>Point of contact for timely feedback & approvals.</li>
            </ul>
          </div>

          {/* Deliverables & Timelines */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3) Deliverables, Milestones & Timelines</h2>
            <p className="mb-2">
              We share a kickoff timeline with milestones (design, build, content, QA, launch). Timelines
              are estimates and depend on asset delivery, approvals, and third-party policies.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Design/Copy rounds:</strong> Unless stated, up to <strong>2 revision rounds</strong> per major item.</li>
              <li><strong>Approvals:</strong> Please review and respond within 2–3 business days to maintain schedule.</li>
              <li><strong>Delays:</strong> Missing inputs or late approvals may shift target dates.</li>
            </ul>
          </div>

          {/* Change Requests */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4) Change Requests</h2>
            <p>
              Any request outside the approved scope will be quoted separately. We’ll confirm effort,
              cost, and new timelines before proceeding.
            </p>
          </div>

          {/* Payments */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5) Payments & Ad Spend</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Projects:</strong> Typically 50% advance to start, balance before handover/deployment.</li>
              <li><strong>Retainers:</strong> Pre-paid monthly and auto-renew unless cancelled (7-day prior notice).</li>
              <li><strong>Ad Spend:</strong> Paid directly by client platform-side; our management fee is separate.</li>
            </ul>
          </div>

          {/* KPI & Reporting */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6) KPIs, Tracking & Reporting</h2>
            <p className="mb-2">
              We align KPIs during kickoff (e.g., leads, ROAS, CTR, conversions). We’ll set up tracking
              (GA4/GTM, pixels, events) where access permits and provide periodic performance reports.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Attribution depends on platform policies, user consent, and technical constraints.</li>
              <li>Data integrity relies on correct implementation and third-party systems.</li>
            </ul>
          </div>

          {/* Communication & SLA */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7) Communication & SLA</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Primary channel: email and an agreed project board/chat group.</li>
              <li>Response times: within 1–2 business days (Mon–Fri IST), unless marked urgent.</li>
              <li>Weekly/bi-weekly syncs for active retainers or complex builds.</li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">8) Compliance & Platform Policies</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>All campaigns and content must comply with Google, Meta, and other platform policies.</li>
              <li>Client is responsible for legal and regulatory compliance of business claims and content.</li>
              <li>We do not control platform decisions such as disapprovals, bans, or outages.</li>
            </ul>
          </div>

          {/* IP & Content */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">9) Intellectual Property & Licensing</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Upon full payment, final deliverables (designs/code excluding paid components) are licensed or assigned to you as per Proposal/SOW.</li>
              <li>Our pre-existing frameworks, libraries, and templates remain our IP; you receive a license to use them within the deliverables.</li>
              <li>Paid fonts, stock media, and plugins follow their vendor licenses.</li>
            </ul>
          </div>

          {/* Data Protection */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">10) Confidentiality & Data Protection</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>We treat your business data as confidential and use it only for agreed services.</li>
              <li>We follow reasonable security practices. Personal data handling will align with applicable laws (e.g., India DPDP / GDPR where relevant).</li>
              <li>Use a password manager or secure method for sharing credentials.</li>
            </ul>
          </div>

          {/* Acceptance & Handover */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">11) Acceptance, Launch & Handover</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>We share a preview/staging link for review. After approval & final payment, we proceed to launch/handover.</li>
              <li>Handover items may include: source files/repo access, CMS/admin credentials, tracking docs, brand files, and a short care guide.</li>
              <li>Post-launch warranty (minor bug fixes) up to 14 calendar days unless otherwise stated.</li>
            </ul>
          </div>

          {/* Termination */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">12) Pause, Cancellation & Termination</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Retainers can be cancelled for the next cycle with 7-day prior notice.</li>
              <li>Projects can be cancelled with written notice; completed milestones/work to-date remain billable.</li>
              <li>Non-payment or policy breach may lead to suspension/termination.</li>
            </ul>
          </div>

          {/* Force Majeure & Disputes */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">13) Force Majeure & Dispute Resolution</h2>
            <p className="mb-2">
              We are not liable for delays caused by events beyond reasonable control (e.g., outages,
              regulatory actions, disasters).
            </p>
            <p>
              Disputes will be addressed in good faith discussions first. Failing settlement, competent
              courts at <em>Jaipur, Rajasthan</em> will have exclusive jurisdiction (unless your SOW
              states otherwise).
            </p>
          </div>

          {/* Kickoff Checklist */}
          <div className="border-t pt-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Kickoff Checklist</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Approved Proposal/SOW & initial invoice paid.</li>
              <li>Primary contact details & communication channel confirmed.</li>
              <li>Brand assets + copy provided.</li>
              <li>Access shared: Analytics, Ads, CMS/Hosting, Domain/DNS, CRM, Email tools.</li>
              <li>KPIs & reporting cadence agreed.</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="border rounded-xl p-5 bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Questions?</h3>
            <p className="text-gray-700">
              Email <a className="text-purple-700 underline" href="mailto:info@dizigrow.com">info@dizigrow.com</a> or call{" "}
              <a className="text-purple-700 underline" href="tel:+919521281509">+91 9521281509</a>. We’re happy to clarify any part of this Agreement.
            </p>
          </div>

          <p className="text-xs text-gray-500">
            Disclaimer: This template is for general guidance and not legal advice. Please review with your legal counsel if needed.
          </p>
        </div>
      </section>
    </div>
  );
};

export default OnboardingAgreement;
