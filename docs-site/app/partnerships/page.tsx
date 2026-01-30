export default function PartnershipsPage() {
    return (
        <div className="max-w-5xl mx-auto px-8 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Partnership Expansion Plan</h1>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                <p className="text-sm text-gray-700">
                    <strong>📖 What's Inside:</strong> Analysis of 7 strategic partners with investment requirements (₹6L total), revenue potential, and partnership tier roadmap.
                </p>
            </div>

            <section id="tier1" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tier 1 Partners (Start Immediately)</h2>

                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg border-2 border-blue-500">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Microsoft (Purview + Azure AI)</h3>
                                <p className="text-sm text-blue-600 font-semibold">PRIMARY PARTNER</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-600">Year 1 Investment</p>
                                <p className="text-2xl font-bold text-gray-900">₹8-12L</p>
                            </div>
                        </div>

                        <p className="text-gray-700 mb-4">
                            <strong>Why Microsoft First:</strong> Largest addressable market (345M Microsoft 365 seats), Copilot explosion, lowest barrier to entry.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-sm font-semibold text-gray-900 mb-2">Products We'll Sell:</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Microsoft Purview (Data Governance)</li>
                                    <li>• Azure AI Content Safety</li>
                                    <li>• Purview DSPM for AI</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900 mb-2">Revenue Opportunities:</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• License margins: 15-44%</li>
                                    <li>• Implementation: ₹20-60L</li>
                                    <li>• Managed services: ₹4-8L/month</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded">
                            <p className="text-sm font-semibold text-gray-900 mb-2">Partnership Timeline:</p>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li><strong>Month 1:</strong> Register for AI Cloud Partner Program</li>
                                <li><strong>Month 2-3:</strong> 3 staff complete Azure AI Engineer certifications</li>
                                <li><strong>Month 6:</strong> Apply for Solutions Partner designation</li>
                                <li><strong>Month 9:</strong> Achieve Solutions Partner status (target)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border-2 border-indigo-500">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">IBM (watsonx.governance)</h3>
                                <p className="text-sm text-indigo-600 font-semibold">SECONDARY PARTNER</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-600">Year 1 Investment</p>
                                <p className="text-2xl font-bold text-gray-900">₹6-10L</p>
                            </div>
                        </div>

                        <p className="text-gray-700 mb-4">
                            <strong>Why IBM:</strong> Dominates regulated industries (banking, insurance, healthcare), multi-cloud strength, high deal values ($500K-$5M average).
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-sm font-semibold text-gray-900 mb-2">Products We'll Sell:</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• IBM watsonx.governance</li>
                                    <li>• AI model lifecycle management</li>
                                    <li>• Automated documentation</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900 mb-2">Revenue Opportunities:</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• License influence: 8-15%</li>
                                    <li>• Implementation: ₹30-100L</li>
                                    <li>• Managed services: ₹6-12L/month</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="tier2" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tier 2 Partners (Start Month 3-6)</h2>

                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">AWS (Bedrock + Security)</h3>
                        <p className="text-sm text-gray-600 mb-4">31% cloud market share, new governance initiative</p>
                        <p className="text-sm text-gray-700 mb-3">
                            <strong>Investment:</strong> ₹4-6L<br />
                            <strong>Revenue Potential:</strong> ₹15-50L
                        </p>
                        <p className="text-xs text-gray-600">Start Month 3</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Google Cloud (Vertex AI)</h3>
                        <p className="text-sm text-gray-600 mb-4">AI innovation leader, new partner program Q1 2026</p>
                        <p className="text-sm text-gray-700 mb-3">
                            <strong>Investment:</strong> ₹3-5L<br />
                            <strong>Revenue Potential:</strong> ₹10-40L
                        </p>
                        <p className="text-xs text-gray-600">Start Month 6</p>
                    </div>
                </div>
            </section>

            <section id="tier3" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tier 3 Partners (Year 2 Focus)</h2>

                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">Collibra</h4>
                        <p className="text-xs text-gray-600 mb-2">$5.25B valuation</p>
                        <p className="text-sm text-gray-700">Premium data governance for Fortune 500</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">OneTrust</h4>
                        <p className="text-xs text-gray-600 mb-2">$4.5B valuation</p>
                        <p className="text-sm text-gray-700">Privacy & compliance focus, legal/GRC buyer</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">Immuta</h4>
                        <p className="text-xs text-gray-600 mb-2">$1B valuation</p>
                        <p className="text-sm text-gray-700">RAG security specialist, data access control</p>
                    </div>
                </div>
            </section>

            <section className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Partnership Investment Summary</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="border-b border-blue-200">
                                <th className="text-left py-2">Partner</th>
                                <th className="text-right py-2">Year 1 Investment</th>
                                <th className="text-right py-2">Expected Revenue</th>
                                <th className="text-right py-2">ROI Timeline</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            <tr className="border-b border-blue-100">
                                <td className="py-2">Microsoft</td>
                                <td className="text-right">₹8-12L</td>
                                <td className="text-right">₹30-60L</td>
                                <td className="text-right">6-9 months</td>
                            </tr>
                            <tr className="border-b border-blue-100">
                                <td className="py-2">IBM</td>
                                <td className="text-right">₹6-10L</td>
                                <td className="text-right">₹20-50L</td>
                                <td className="text-right">6-12 months</td>
                            </tr>
                            <tr className="border-b border-blue-100">
                                <td className="py-2">AWS</td>
                                <td className="text-right">₹4-6L</td>
                                <td className="text-right">₹15-30L</td>
                                <td className="text-right">9-12 months</td>
                            </tr>
                            <tr className="border-b border-blue-100">
                                <td className="py-2">Google Cloud</td>
                                <td className="text-right">₹3-5L</td>
                                <td className="text-right">₹10-20L</td>
                                <td className="text-right">12+ months</td>
                            </tr>
                            <tr className="font-semibold">
                                <td className="py-2">Total Year 1</td>
                                <td className="text-right">₹21-33L</td>
                                <td className="text-right">₹75-160L</td>
                                <td className="text-right">Avg 8 months</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
