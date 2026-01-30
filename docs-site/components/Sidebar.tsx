'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
    {
        title: 'Executive Summary',
        href: '/',
        sections: [
            { title: 'The Opportunity', id: 'opportunity' },
            { title: 'Our Strategy', id: 'strategy' },
            { title: 'What We\'ll Build', id: 'build' },
        ]
    },
    {
        title: 'Product Portfolio',
        href: '/products',
        sections: [
            { title: 'Pricing Intelligence', id: 'pricing' },
            { title: 'Pricing Tiers', id: 'tiers' },
            { title: 'One-Time Services', id: 'one-time' },
        ]
    },
    {
        title: 'Partnerships',
        href: '/partnerships',
        sections: [
            { title: 'Tier 1 (Start Now)', id: 'tier1' },
            { title: 'Tier 2 (Months 3-6)', id: 'tier2' },
            { title: 'Tier 3 (Year 2)', id: 'tier3' },
        ]
    },
    {
        title: 'Roadmap',
        href: '/roadmap',
        sections: [
            { title: 'Q1: Foundation', id: 'q1' },
            { title: 'Q2: Market Entry', id: 'q2' },
            { title: 'Q3: Scale', id: 'q3' },
            { title: 'Q4: Optimize', id: 'q4' },
        ]
    },
    {
        title: 'Financials',
        href: '/financials',
        sections: [
            { title: 'Budget (₹50L)', id: 'investment' },
            { title: 'Revenue Scenarios', id: 'revenue' },
            { title: 'Profitability', id: 'profitability' },
        ]
    },
    {
        title: 'Use Cases',
        href: '/use-cases',
        sections: [
            { title: 'Hacking & Security', id: 'hacked' },
            { title: 'Hallucinations', id: 'hallucinating' },
            { title: 'Data Leakage', id: 'leakage' },
        ]
    },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 h-screen fixed left-0 top-0 bg-[#f8fafc] border-r border-[#e2e8f0] overflow-y-auto flex flex-col z-20">
            <div className="p-6 border-b border-[#e2e8f0] bg-white">
                <div className="flex items-center space-x-2 text-blue-600 mb-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-bold text-sm tracking-tight">AI GUARDIAN</span>
                </div>
                <h1 className="text-sm font-medium text-slate-500">
                    Strategic Plan Framework
                </h1>
            </div>

            <nav className="flex-1 py-4 px-3 space-y-1">
                {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <div key={item.href} className="mb-1">
                            <Link
                                href={item.href}
                                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all ${isActive
                                    ? 'bg-[#e0f2fe] text-[#0284c7]'
                                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                    }`}
                            >
                                {isActive && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] mr-2"></span>
                                )}
                                {item.title}
                            </Link>

                            {isActive && item.sections && (
                                <div className="ml-5 mt-1 pl-3 border-l border-slate-200 space-y-0.5">
                                    {item.sections.map((section) => (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            className="block px-2 py-1 text-[13px] text-slate-500 hover:text-slate-900 hover:underline decoration-slate-300 underline-offset-2 transition-colors"
                                        >
                                            {section.title}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-[#e2e8f0] bg-white">
                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                        AE
                    </div>
                    <div className="ml-3">
                        <p className="text-xs font-medium text-slate-900">Team Aniket</p>
                        <p className="text-[10px] text-slate-500">Strategic Planning</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
