export default function UseCasesPage() {
    return (
        <div className="max-w-5xl mx-auto px-8 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Use Case Solutions & Service Offerings</h1>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                <p className="text-sm text-gray-700">
                    <strong>📖 What's Inside:</strong> Customer-facing problem statements mapped to our solutions with pricing and real-world examples.
                </p>
            </div>

            {[
                {
                    id: 'hacked',
                    question: 'Can My AI Be Hacked?',
                    problem: 'CTOs deploying customer-facing chatbots, security teams worried about prompt injection, jailbreaking, and data extraction attacks.',
                    solution: 'AI Penetration Testing Service',
                    price: '₹6-10L one-time',
                    deliverables: [
                        'Automated vulnerability scanning (1,000+ attack patterns)',
                        'Manual penetration testing by experts',
                        'Jailbreak and data leakage testing',
                        'Detailed security report with risk scoring',
                        'Remediation roadmap'
                    ],
                    tools: 'Garak, PyRIT, Promptfoo, LLM Guard',
                    continuous: '₹80,000-₹2.4L/month for continuous monitoring'
                },
                {
                    id: 'hallucinating',
                    question: 'Is My AI Hallucinating?',
                    problem: 'Product managers deploying RAG chatbots, customer support teams, legal/compliance worried about AI giving wrong answers.',
                    solution: 'RAG Accuracy Validation Service',
                    price: '₹8-15L one-time',
                    deliverables: [
                        'Baseline accuracy testing (100-500 queries)',
                        'Hallucination rate measurement',
                        'Context relevance and faithfulness scoring',
                        'Optimization recommendations',
                        'Benchmark comparison vs industry standards'
                    ],
                    tools: 'Ragas, DeepEval, TruLens, Arize Phoenix',
                    continuous: '₹1-3L/month for continuous accuracy monitoring'
                },
                {
                    id: 'leakage',
                    question: 'How Do I Prevent Data Leakage Through AI?',
                    problem: 'CISOs worried about employees pasting sensitive data into ChatGPT, compliance teams preparing for GDPR/HIPAA audits.',
                    solution: 'AI Data Loss Prevention (DLP) Service',
                    price: '₹8-16L implementation',
                    deliverables: [
                        'Shadow AI discovery (find unauthorized AI usage)',
                        'PII detection system (scan prompts for sensitive data)',
                        'Policy enforcement (block/redact sensitive data)',
                        'Approved AI gateway setup',
                        'User training and incident response plan'
                    ],
                    tools: 'Microsoft Presidio, LLM Guard, OpenMetadata',
                    continuous: '₹1.5-4L/month for continuous monitoring'
                }
            ].map((useCase) => (
                <section key={useCase.id} id={useCase.id} className="mb-12">
                    <div className="bg-white p-6 rounded-lg border-2 border-blue-500">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">{useCase.question}</h2>

                        <div className="bg-yellow-50 p-4 rounded mb-4">
                            <p className="text-sm font-semibold text-gray-900 mb-2">The Customer Problem:</p>
                            <p className="text-gray-700">{useCase.problem}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mb-4">
                            <div>
                                <p className="text-sm font-semibold text-gray-900 mb-2">Our Solution:</p>
                                <p className="text-lg text-blue-600 font-semibold">{useCase.solution}</p>
                                <p className="text-2xl font-bold text-gray-900 mt-2">{useCase.price}</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900 mb-2">Tools We Use:</p>
                                <p className="text-gray-700">{useCase.tools}</p>
                                {useCase.continuous && (
                                    <div className="mt-3">
                                        <p className="text-sm font-semibold text-gray-900 mb-1">Continuous Monitoring:</p>
                                        <p className="text-blue-600 font-semibold">{useCase.continuous}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-gray-900 mb-2">What We Deliver:</p>
                            <ul className="space-y-1">
                                {useCase.deliverables.map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-blue-600 mr-2">✓</span>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            ))}

            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Additional Use Cases We Solve</h2>

                <div className="grid grid-cols-2 gap-4">
                    {[
                        { title: 'Can I Trust My AI in Production?', service: 'AI Quality Assurance & Testing', price: '₹6-10L' },
                        { title: 'How Do I Comply with AI Regulations?', service: 'AI Compliance & Governance', price: '₹15-40L' },
                        { title: 'How Do I Build AI Safely?', service: 'AI Security by Design Consulting', price: '₹8-20L' },
                        { title: 'How Do I Train My Team on AI Security?', service: 'AI Security Training & Awareness', price: '₹2-6L' }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{item.service}</p>
                            <p className="text-blue-600 font-semibold">{item.price}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Why Our Approach Works</h3>
                <div className="space-y-2 text-gray-700">
                    <p><strong>✓ Customer-Centric:</strong> We start with your problem, not our tools</p>
                    <p><strong>✓ Technology-Agnostic:</strong> Works with any AI platform (OpenAI, Anthropic, Google, Azure, etc.)</p>
                    <p><strong>✓ Practical & Actionable:</strong> Not just reports - we help implement fixes</p>
                    <p><strong>✓ Measurable Results:</strong> Track improvements (% reduction in vulnerabilities, hallucinations, etc.)</p>
                </div>
            </section>
        </div>
    );
}
