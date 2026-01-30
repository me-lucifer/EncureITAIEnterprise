export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Executive Summary
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          AI Data Governance & Security Practice - Strategic Plan
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p className="text-sm text-gray-700">
            <strong>📖 What's Inside:</strong> High-level overview of the complete strategic plan including investment requirements (₹50L), expected returns (₹100-150L revenue, 207% ROI), dual-track strategy, and immediate next steps. Perfect for CEO review and leadership approval.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <strong>⏱️ Read Time:</strong> 10 minutes
          </p>
        </div>
      </div>

      <section id="opportunity" className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Opportunity</h2>
        <p className="text-gray-700 mb-4">
          Your CEO is absolutely right: <strong>AI is in its "baby phase" now, but the "maturity phase" is coming fast</strong> (2026-2027). When large enterprises move from experimenting with AI to deploying it at scale, they will demand <strong>governance and security expertise</strong>. Companies that build this capability now will dominate the market.
        </p>

        <div className="grid grid-cols-3 gap-4 my-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Market Size</p>
            <p className="text-2xl font-bold text-gray-900">$15.8B</p>
            <p className="text-xs text-gray-500">by 2030 (30% CAGR)</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Timing</p>
            <p className="text-2xl font-bold text-blue-600">Perfect</p>
            <p className="text-xs text-gray-500">EU AI Act Aug 2026</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Competition</p>
            <p className="text-2xl font-bold text-green-600">Low</p>
            <p className="text-xs text-gray-500">Mid-market open</p>
          </div>
        </div>
      </section>

      <section id="strategy" className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Strategy: Dual-Track Approach</h2>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Track A: Enterprise Partnerships</h3>
            <p className="text-gray-700 mb-4">
              Partner with the "Kingmakers" of AI governance to access their enterprise clients and earn commissions:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Microsoft Purview</strong> - Broadest market (every Office 365 customer needs this)</li>
              <li><strong>IBM watsonx.governance</strong> - Regulated industries (banking, healthcare)</li>
              <li><strong>AWS Bedrock</strong> - Cloud market leader</li>
              <li><strong>Google Cloud</strong> - Innovation edge</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Revenue Model:</strong> License commissions (15-44%) + implementation fees (₹20-80L per project)
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Track B: Independent Services</h3>
            <p className="text-gray-700 mb-4">
              Build proprietary AI security services using open-source tools:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>AI Security Health Check</strong> (₹4-8L one-time) - Vulnerability assessment</li>
              <li><strong>RAG Pipeline Validation</strong> (₹6-12L one-time) - Accuracy testing for AI chatbots</li>
              <li><strong>AI Guardian Managed Service</strong> (₹1.6-8L/month) - Continuous monitoring subscription</li>
              <li><strong>Enterprise Implementations</strong> (₹20-80L) - Deploy governance platforms</li>
              <li><strong>Custom Tools Development</strong> (₹40-120L) - Industry-specific solutions</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Revenue Model:</strong> Mix of one-time projects (40%) and recurring subscriptions (60%)
            </p>
          </div>
        </div>
      </section>

      <section id="build" className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We'll Build</h2>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-gray-900 mb-2">Tool: Garak (Prompt Injection Scanner)</h4>
            <p className="text-gray-700 mb-2">→ <strong>Our Product:</strong> "AI Penetration Testing Platform"</p>
            <ul className="list-disc list-inside text-sm text-gray-600 ml-4 space-y-1">
              <li>Web dashboard for clients to test their AI systems</li>
              <li>Automated weekly scans</li>
              <li>Executive-friendly reports</li>
            </ul>
            <p className="text-sm font-semibold text-blue-700 mt-3">Pricing: ₹40,000-₹1.6L/month per organization</p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-lg border border-green-200">
            <h4 className="font-semibold text-gray-900 mb-2">Tool: Ragas (RAG Accuracy Evaluator)</h4>
            <p className="text-gray-700 mb-2">→ <strong>Our Product:</strong> "RAG Quality Assurance Platform"</p>
            <ul className="list-disc list-inside text-sm text-gray-600 ml-4 space-y-1">
              <li>Continuous hallucination monitoring</li>
              <li>Accuracy scoring (like a credit score for AI)</li>
              <li>Automated alerts when quality drops</li>
            </ul>
            <p className="text-sm font-semibold text-green-700 mt-3">Pricing: ₹80,000-₹2.4L/month per RAG system</p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-gray-900 mb-2">Tool: OpenMetadata (Data Governance)</h4>
            <p className="text-gray-700 mb-2">→ <strong>Our Product:</strong> "AI Data Lineage Portal"</p>
            <ul className="list-disc list-inside text-sm text-gray-600 ml-4 space-y-1">
              <li>Track which data trained which AI models</li>
              <li>EU AI Act compliance documentation</li>
              <li>Managed hosting service</li>
            </ul>
            <p className="text-sm font-semibold text-purple-700 mt-3">Pricing: ₹1.2-3.2L/month managed service</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Investment & Returns</h2>

        <div className="bg-white p-6 rounded-lg border-2 border-blue-500">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Investment Required</p>
              <p className="text-3xl font-bold text-gray-900">₹50 Lakhs</p>
              <p className="text-xs text-gray-500">over 12 months</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Expected Revenue (Year 1)</p>
              <p className="text-3xl font-bold text-green-600">₹100-150L</p>
              <p className="text-xs text-gray-500">Target scenario</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">ROI</p>
              <p className="text-3xl font-bold text-blue-600">207%</p>
              <p className="text-xs text-gray-500">in Year 1</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Payback Period</p>
              <p className="text-3xl font-bold text-purple-600">6-8 months</p>
              <p className="text-xs text-gray-500">breakeven Month 8</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Immediate Next Steps</h2>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
          <h3 className="font-semibold text-gray-900 mb-3">Week 1 Actions:</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Review this strategic plan with CEO</li>
            <li>Approve ₹50L budget for Year 1</li>
            <li>Assign interim Practice Lead (until AI Security Lead hired)</li>
            <li>Identify 6 engineers to reallocate to this practice</li>
            <li>Register partnerships (Microsoft, IBM, AWS)</li>
          </ol>
        </div>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Questions for Leadership</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li><strong>Budget:</strong> Is ₹50L investment approved for Year 1?</li>
          <li><strong>Team:</strong> Can we reallocate 6-8 existing staff to this practice?</li>
          <li><strong>Hiring:</strong> Approved to hire AI Security Lead in Q3 (₹35-50L/year)?</li>
          <li><strong>Focus:</strong> Any specific industries or clients to prioritize?</li>
          <li><strong>Year 2:</strong> If Year 1 succeeds, is there appetite for expansion?</li>
        </ol>
      </section>
    </div>
  );
}
