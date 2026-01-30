export default function ProductsPage() {
    return (
        <div className="max-w-5xl mx-auto px-8 py-12">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Product Portfolio & Pricing Strategy
                </h1>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                    <p className="text-sm text-gray-700">
                        <strong>📖 What's Inside:</strong> 5 distinct product offerings with tiered pricing (₹1.6L-₹8L/month), use cases for each service, and how we'll build proprietary products around open-source tools.
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                        <strong>⏱️ Read Time:</strong> 20 minutes
                    </p>
                </div>
            </div>

            <section id="pricing" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Market Pricing Intelligence</h2>

                <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Existing Market Pricing Benchmarks</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li><strong>VerifyWise (AI Governance SaaS):</strong> $799/month for "Growth" plan</li>
                        <li><strong>Arize AI (LLM Monitoring):</strong> $50/month basic, scales to enterprise pricing</li>
                        <li><strong>Holistic AI (Compliance Audits):</strong> Tens of thousands for one-off audits</li>
                        <li><strong>vCISO Services:</strong> $2,600-$5,000/month for fractional CISO</li>
                        <li><strong>Big 4 Consulting:</strong> $15,000-$50,000/month for enterprise engagements</li>
                    </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Key Insight</h3>
                    <p className="text-gray-700">
                        There's a <strong>massive gap</strong> between low-end SaaS tools ($50-$800/month) and high-end consulting ($15,000+/month).
                        Our opportunity: The "Middle Market" (companies with 50-500 employees) who need expert guidance but can't afford Big 4 pricing.
                    </p>
                </div>
            </section>

            <section id="tiers" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">AI Guardian Managed Service - Pricing Tiers</h2>

                <div className="grid grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg border-2 border-gray-300">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
                        <p className="text-3xl font-bold text-blue-600 mb-4">₹1.6L<span className="text-sm text-gray-600">/month</span></p>
                        <ul className="space-y-2 text-sm text-gray-700 mb-6">
                            <li>✓ Up to 3 AI endpoints</li>
                            <li>✓ Monthly security scans</li>
                            <li>✓ 2 hours advisory/month</li>
                            <li>✓ Email support (48hr)</li>
                            <li>✓ Basic dashboard</li>
                        </ul>
                        <p className="text-xs text-gray-600"><strong>Target:</strong> 50-200 employees</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border-2 border-blue-500 shadow-lg transform scale-105">
                        <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                            MOST POPULAR
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Professional</h3>
                        <p className="text-3xl font-bold text-blue-600 mb-4">₹4L<span className="text-sm text-gray-600">/month</span></p>
                        <ul className="space-y-2 text-sm text-gray-700 mb-6">
                            <li>✓ Up to 10 AI endpoints</li>
                            <li>✓ Weekly security scans</li>
                            <li>✓ 6 hours advisory/month</li>
                            <li>✓ Email/Phone support (24hr)</li>
                            <li>✓ Advanced dashboard</li>
                            <li>✓ Quarterly compliance reviews</li>
                        </ul>
                        <p className="text-xs text-gray-600"><strong>Target:</strong> 200-1000 employees</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border-2 border-gray-300">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
                        <p className="text-3xl font-bold text-blue-600 mb-4">₹8L+<span className="text-sm text-gray-600">/month</span></p>
                        <ul className="space-y-2 text-sm text-gray-700 mb-6">
                            <li>✓ Unlimited AI endpoints</li>
                            <li>✓ Daily security scans</li>
                            <li>✓ 12 hours advisory/month</li>
                            <li>✓ 24/7 on-call support</li>
                            <li>✓ Custom dashboard</li>
                            <li>✓ Dedicated support</li>
                        </ul>
                        <p className="text-xs text-gray-600"><strong>Target:</strong> 1000+ employees</p>
                    </div>
                </div>
            </section>

            <section id="one-time" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">One-Time Services</h2>

                <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">AI Security Health Check</h3>
                                <p className="text-gray-600 mt-2">Comprehensive assessment of your AI security posture</p>
                                <ul className="mt-3 space-y-1 text-sm text-gray-700">
                                    <li>• Shadow AI discovery</li>
                                    <li>• Prompt injection testing</li>
                                    <li>• Data leakage assessment</li>
                                    <li>• Policy gap analysis</li>
                                    <li>• Executive report with remediation roadmap</li>
                                </ul>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-blue-600">₹4-8L</p>
                                <p className="text-sm text-gray-600">2-3 weeks</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">RAG Pipeline Validation</h3>
                                <p className="text-gray-600 mt-2">Deep technical audit of RAG systems to ensure accuracy</p>
                                <ul className="mt-3 space-y-1 text-sm text-gray-700">
                                    <li>• Accuracy benchmarking (100+ queries)</li>
                                    <li>• Context relevance testing</li>
                                    <li>• Faithfulness analysis</li>
                                    <li>• Performance optimization recommendations</li>
                                    <li>• Continuous monitoring setup</li>
                                </ul>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-green-600">₹6-12L</p>
                                <p className="text-sm text-gray-600">3-4 weeks</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Enterprise Platform Implementation</h3>
                                <p className="text-gray-600 mt-2">Full deployment of governance platforms (Purview, watsonx)</p>
                                <ul className="mt-3 space-y-1 text-sm text-gray-700">
                                    <li>• Platform selection and configuration</li>
                                    <li>• Integration with existing systems</li>
                                    <li>• Policy setup and workflows</li>
                                    <li>• Team training</li>
                                    <li>• 6-12 months post-implementation support</li>
                                </ul>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-purple-600">₹20-80L</p>
                                <p className="text-sm text-gray-600">3-6 months</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Competitive Positioning</h3>
                <ul className="space-y-2 text-gray-700">
                    <li><strong>vs. Big 4 Consulting:</strong> 60-70% lower pricing, faster delivery, specialized expertise</li>
                    <li><strong>vs. SaaS Tools:</strong> Human expertise included, not just software</li>
                    <li><strong>vs. Traditional Security Firms:</strong> AI-native understanding, not retrofitted cybersecurity</li>
                </ul>
            </section>
        </div>
    );
}
