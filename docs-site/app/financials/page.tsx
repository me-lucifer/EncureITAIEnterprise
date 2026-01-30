export default function FinancialsPage() {
    return (
        <div className="max-w-5xl mx-auto px-8 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Financial Projections & Resource Plan</h1>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                <p className="text-sm text-gray-700">
                    <strong>📖 What's Inside:</strong> Detailed ₹50L budget breakdown, 3 revenue scenarios, hiring plan, and 3-year financial outlook.
                </p>
            </div>

            <section id="investment" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Investment Summary (₹50 Lakhs Budget)</h2>

                <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <thead>
                                <tr className="border-b-2 border-gray-300">
                                    <th className="text-left py-3">Category</th>
                                    <th className="text-right py-3">Q1</th>
                                    <th className="text-right py-3">Q2</th>
                                    <th className="text-right py-3">Q3</th>
                                    <th className="text-right py-3">Q4</th>
                                    <th className="text-right py-3 font-bold">Total</th>
                                    <th className="text-right py-3">% of Budget</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr className="border-b border-gray-200">
                                    <td className="py-3">Personnel (New Hires)</td>
                                    <td className="text-right">₹3L</td>
                                    <td className="text-right">₹3L</td>
                                    <td className="text-right">₹3L</td>
                                    <td className="text-right">₹3L</td>
                                    <td className="text-right font-bold">₹12L</td>
                                    <td className="text-right">24%</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3">Certifications & Training</td>
                                    <td className="text-right">₹3L</td>
                                    <td className="text-right">₹3L</td>
                                    <td className="text-right">₹3L</td>
                                    <td className="text-right">₹2L</td>
                                    <td className="text-right font-bold">₹11L</td>
                                    <td className="text-right">22%</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3">Infrastructure & Tools</td>
                                    <td className="text-right">₹2L</td>
                                    <td className="text-right">₹2L</td>
                                    <td className="text-right">₹3L</td>
                                    <td className="text-right">₹3L</td>
                                    <td className="text-right font-bold">₹10L</td>
                                    <td className="text-right">20%</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3">Partnership Investments</td>
                                    <td className="text-right">₹0.5L</td>
                                    <td className="text-right">₹1.5L</td>
                                    <td className="text-right">₹2L</td>
                                    <td className="text-right">₹2L</td>
                                    <td className="text-right font-bold">₹6L</td>
                                    <td className="text-right">12%</td>
                                </tr>
                                <tr className="border-b-2 border-gray-300">
                                    <td className="py-3">Marketing & Sales</td>
                                    <td className="text-right">₹1L</td>
                                    <td className="text-right">₹3L</td>
                                    <td className="text-right">₹3L</td>
                                    <td className="text-right">₹4L</td>
                                    <td className="text-right font-bold">₹11L</td>
                                    <td className="text-right">22%</td>
                                </tr>
                                <tr className="font-bold bg-blue-50">
                                    <td className="py-3">TOTAL</td>
                                    <td className="text-right">₹9.5L</td>
                                    <td className="text-right">₹12.5L</td>
                                    <td className="text-right">₹14L</td>
                                    <td className="text-right">₹14L</td>
                                    <td className="text-right text-blue-600">₹50L</td>
                                    <td className="text-right">100%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section id="revenue" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Revenue Scenarios</h2>

                <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-300">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Conservative</h3>
                        <p className="text-3xl font-bold text-gray-700 mb-4">₹85.6L</p>
                        <div className="space-y-2 text-sm text-gray-700">
                            <p><strong>Exit MRR:</strong> ₹5L/month</p>
                            <p><strong>Clients:</strong> 10-12</p>
                            <p><strong>ROI:</strong> 71%</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border-2 border-blue-500 shadow-lg">
                        <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                            TARGET
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Target</h3>
                        <p className="text-3xl font-bold text-blue-600 mb-4">₹120L</p>
                        <div className="space-y-2 text-sm text-gray-700">
                            <p><strong>Exit MRR:</strong> ₹8L/month</p>
                            <p><strong>Clients:</strong> 15+</p>
                            <p><strong>ROI:</strong> 207%</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-300">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimistic</h3>
                        <p className="text-3xl font-bold text-green-600 mb-4">₹180L</p>
                        <div className="space-y-2 text-sm text-gray-700">
                            <p><strong>Exit MRR:</strong> ₹10L/month</p>
                            <p><strong>Clients:</strong> 20+</p>
                            <p><strong>ROI:</strong> 358%</p>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Revenue Mix (Target Scenario)</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-gray-600 mb-1">One-time Projects</p>
                            <p className="text-2xl font-bold text-gray-900">₹48L <span className="text-sm font-normal text-gray-600">(40%)</span></p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Recurring Subscriptions</p>
                            <p className="text-2xl font-bold text-blue-600">₹72L <span className="text-sm font-normal text-gray-600">(60%)</span></p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="profitability" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Profitability Analysis</h2>

                <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h3 className="font-semibold text-gray-900 mb-4">Target Scenario Breakdown</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center pb-2 border-b">
                                <span className="text-gray-700">Revenue</span>
                                <span className="font-semibold text-gray-900">₹153.5L</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b">
                                <span className="text-gray-700">Fixed Costs</span>
                                <span className="font-semibold text-red-600">-₹39L</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b">
                                <span className="text-gray-700">Variable Costs (40%)</span>
                                <span className="font-semibold text-red-600">-₹61L</span>
                            </div>
                            <div className="flex justify-between items-center pt-2 bg-green-50 p-3 rounded">
                                <span className="font-bold text-gray-900">Net Profit</span>
                                <span className="font-bold text-green-600 text-xl">₹53.5L</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700">Profit Margin</span>
                                <span className="font-semibold text-green-600">35%</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h3 className="font-semibold text-gray-900 mb-4">3-Year Projection</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm">
                                <thead>
                                    <tr className="border-b-2 border-gray-300">
                                        <th className="text-left py-2">Year</th>
                                        <th className="text-right py-2">Revenue</th>
                                        <th className="text-right py-2">Investment</th>
                                        <th className="text-right py-2">Profit</th>
                                        <th className="text-right py-2">Cumulative Profit</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2">Year 1</td>
                                        <td className="text-right">₹120L</td>
                                        <td className="text-right">₹50L</td>
                                        <td className="text-right font-semibold text-green-600">₹40L</td>
                                        <td className="text-right">₹40L</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2">Year 2</td>
                                        <td className="text-right">₹300L</td>
                                        <td className="text-right">₹30L</td>
                                        <td className="text-right font-semibold text-green-600">₹120L</td>
                                        <td className="text-right">₹160L</td>
                                    </tr>
                                    <tr className="border-b-2 border-gray-300">
                                        <td className="py-2">Year 3</td>
                                        <td className="text-right">₹600L</td>
                                        <td className="text-right">₹40L</td>
                                        <td className="text-right font-semibold text-green-600">₹280L</td>
                                        <td className="text-right font-bold text-green-600">₹440L</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-gray-600 mt-4">
                            <strong>3-Year ROI:</strong> 367% | <strong>Total Investment:</strong> ₹120L | <strong>Total Profit:</strong> ₹440L
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hiring Plan</h2>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-4">Year 1 Team Structure</h3>

                    <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h4 className="font-semibold text-gray-900">AI Security Lead</h4>
                                    <p className="text-sm text-gray-600">New hire, Month 7 (Q3)</p>
                                </div>
                                <p className="font-bold text-blue-600">₹35-50L/year</p>
                            </div>
                            <p className="text-sm text-gray-700">Practice leader, client-facing expert, technical oversight</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h4 className="font-semibold text-gray-900">6 AI Security Engineers</h4>
                                    <p className="text-sm text-gray-600">Existing staff, reallocated</p>
                                </div>
                                <p className="font-bold text-gray-600">Existing budget</p>
                            </div>
                            <p className="text-sm text-gray-700">Tool specialists, delivery team</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h4 className="font-semibold text-gray-900">Support Roles</h4>
                                    <p className="text-sm text-gray-600">Product Manager, Partnership Manager (existing staff, 50-100% allocation)</p>
                                </div>
                                <p className="font-bold text-gray-600">Existing budget</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-700">
                            <strong>Total Team by End of Year 1:</strong> 10-12 people (1 new hire + 9-11 existing reallocated)
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">✅ Recommendation: PROCEED</h3>
                <div className="space-y-2 text-gray-700">
                    <p><strong>Investment:</strong> ₹50 Lakhs</p>
                    <p><strong>Expected Return:</strong> ₹100-150L revenue, ₹40-60L profit in Year 1</p>
                    <p><strong>ROI:</strong> 200%+ in Year 1</p>
                    <p><strong>Payback Period:</strong> 6-8 months</p>
                    <p><strong>Risk Level:</strong> Medium (new practice, but proven market demand)</p>
                    <p><strong>Strategic Fit:</strong> Excellent (aligns with AI leadership positioning)</p>
                </div>
            </section>
        </div>
    );
}
