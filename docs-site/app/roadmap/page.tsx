export default function RoadmapPage() {
    return (
        <div className="max-w-5xl mx-auto px-8 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">12-Month Roadmap</h1>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                <p className="text-sm text-gray-700">
                    <strong>📖 What's Inside:</strong> Month-by-month action plan with quarterly reviews, success metrics, and Go/No-Go decision points.
                </p>
            </div>

            {[
                {
                    id: 'q1',
                    title: 'Q1 (Months 1-3): Foundation & Capability Building',
                    investment: '₹9.5L',
                    revenue: '₹0',
                    clients: '0 (pilots)',
                    objectives: [
                        'Build the technical foundation',
                        'Establish partnerships',
                        'Create initial offerings',
                        'Validate with pilots'
                    ],
                    activities: [
                        'Register with Microsoft, IBM, AWS partner programs',
                        'Install tools (Garak, Ragas, PyRIT) in lab',
                        'Train 6 engineers on tools and frameworks',
                        'Achieve 6+ vendor certifications',
                        'Run 2-3 free pilot engagements',
                        'Create case studies'
                    ],
                    metrics: [
                        { name: 'Partnerships registered', target: '3 (MS, IBM, AWS)' },
                        { name: 'Certifications achieved', target: '6+' },
                        { name: 'Tools operational', target: '6 tools' },
                        { name: 'Pilot engagements', target: '2-3' },
                        { name: 'Case studies', target: '2' }
                    ]
                },
                {
                    id: 'q2',
                    title: 'Q2 (Months 4-6): Market Entry & First Revenue',
                    investment: '₹12.5L',
                    revenue: '₹12-20L',
                    clients: '3-5',
                    objectives: [
                        'Launch commercial offerings',
                        'Acquire first paying clients',
                        'Advance partnership tiers',
                        'Build marketing presence'
                    ],
                    activities: [
                        'Launch commercial offerings publicly',
                        'Acquire 3-5 paying clients',
                        'Convert 1-2 to managed service subscriptions',
                        'Achieve Solutions Partner (Microsoft), Silver (IBM)',
                        'Publish whitepaper and thought leadership',
                        'Achieve 12+ total certifications'
                    ],
                    metrics: [
                        { name: 'Paying clients', target: '3-5' },
                        { name: 'Managed service clients', target: '1-2' },
                        { name: 'Revenue (cumulative)', target: '₹12-20L' },
                        { name: 'Certifications (total)', target: '12+' },
                        { name: 'Partnership tiers', target: 'Solutions Partner, Silver' }
                    ]
                },
                {
                    id: 'q3',
                    title: 'Q3 (Months 7-9): Scale & Specialization',
                    investment: '₹14L',
                    revenue: '₹40-60L (cumulative)',
                    clients: '8-10',
                    objectives: [
                        'Scale to 8-10 clients',
                        'Launch specialized services',
                        'Advance partnerships',
                        'Build proprietary IP'
                    ],
                    activities: [
                        'Hire AI Security Lead (₹35-50L/year)',
                        'Launch RAG Pipeline Validation service',
                        'Pursue 1-2 enterprise implementation deals',
                        'Build proprietary dashboard platform',
                        'Grow to 8-10 total clients',
                        'Start co-selling with Microsoft/IBM'
                    ],
                    metrics: [
                        { name: 'Total clients', target: '8-10' },
                        { name: 'Managed service clients', target: '4-6' },
                        { name: 'Revenue (cumulative)', target: '₹40-60L' },
                        { name: 'Monthly recurring revenue', target: '₹4-6L/month' },
                        { name: 'Enterprise deals', target: '1-2 in pipeline' }
                    ]
                },
                {
                    id: 'q4',
                    title: 'Q4 (Months 10-12): Optimization & Year 2 Planning',
                    investment: '₹14L',
                    revenue: '₹100-150L (total)',
                    clients: '15+',
                    objectives: [
                        'Achieve profitability',
                        'Scale to 15+ clients',
                        'Launch proprietary platform',
                        'Plan Year 2 expansion'
                    ],
                    activities: [
                        'Automate service delivery',
                        'Launch proprietary "AI Trust Portal"',
                        'Grow to 15+ clients',
                        'Close 1-2 enterprise deals (₹20-60L each)',
                        'Achieve Advanced partnership tiers',
                        'Plan Year 2 expansion'
                    ],
                    metrics: [
                        { name: 'Total clients', target: '15+' },
                        { name: 'Managed service clients', target: '8-10' },
                        { name: 'Revenue (Year 1 total)', target: '₹80-120L' },
                        { name: 'Monthly recurring revenue', target: '₹8-10L/month' },
                        { name: 'Profitability', target: 'Break-even or profitable' }
                    ]
                }
            ].map((quarter) => (
                <section key={quarter.id} id={quarter.id} className="mb-12">
                    <div className="bg-white p-6 rounded-lg border-2 border-blue-500 mb-6">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">{quarter.title}</h2>

                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="bg-gray-50 p-4 rounded">
                                <p className="text-sm text-gray-600 mb-1">Investment</p>
                                <p className="text-2xl font-bold text-gray-900">{quarter.investment}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded">
                                <p className="text-sm text-gray-600 mb-1">Revenue</p>
                                <p className="text-2xl font-bold text-green-600">{quarter.revenue}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded">
                                <p className="text-sm text-gray-600 mb-1">Clients</p>
                                <p className="text-2xl font-bold text-blue-600">{quarter.clients}</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-semibold text-gray-900 mb-3">Strategic Objectives:</h3>
                            <ul className="space-y-2">
                                {quarter.objectives.map((obj, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-blue-600 mr-2">✓</span>
                                        <span className="text-gray-700">{obj}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-semibold text-gray-900 mb-3">Key Activities:</h3>
                            <ul className="space-y-2">
                                {quarter.activities.map((activity, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-gray-400 mr-2">•</span>
                                        <span className="text-gray-700">{activity}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-4 rounded">
                            <h3 className="font-semibold text-gray-900 mb-3">Success Metrics:</h3>
                            <div className="space-y-2">
                                {quarter.metrics.map((metric, idx) => (
                                    <div key={idx} className="flex justify-between text-sm">
                                        <span className="text-gray-700">{metric.name}</span>
                                        <span className="font-semibold text-gray-900">{metric.target}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            <section className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Quarterly Review Process</h3>
                <p className="text-gray-700 mb-4">
                    At the end of each quarter, conduct a 2-hour review meeting with CEO, Practice Lead, Partnership Manager, Product Manager, and Finance.
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>1. Metrics Review (30 min):</strong> Review all success metrics vs targets</p>
                    <p><strong>2. Wins & Challenges (30 min):</strong> What went well, what didn't</p>
                    <p><strong>3. Client Feedback (15 min):</strong> Themes from client interactions</p>
                    <p><strong>4. Financial Review (15 min):</strong> Revenue, costs, profitability</p>
                    <p><strong>5. Team Health (15 min):</strong> Capacity, morale, skill gaps</p>
                    <p><strong>6. Next Quarter Planning (15 min):</strong> Adjustments to roadmap</p>
                </div>
            </section>
        </div>
    );
}
