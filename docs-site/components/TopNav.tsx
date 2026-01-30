'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const PREV_NEXT_MAP: Record<string, { prev?: { href: string; label: string }; next?: { href: string; label: string } }> = {
    '/': { next: { href: '/products', label: 'Product Portfolio' } },
    '/products': { prev: { href: '/', label: 'Executive Summary' }, next: { href: '/partnerships', label: 'Partnerships' } },
    '/partnerships': { prev: { href: '/products', label: 'Products' }, next: { href: '/roadmap', label: 'Roadmap' } },
    '/roadmap': { prev: { href: '/partnerships', label: 'Partnerships' }, next: { href: '/financials', label: 'Financials' } },
    '/financials': { prev: { href: '/roadmap', label: 'Roadmap' }, next: { href: '/use-cases', label: 'Use Cases' } },
    '/use-cases': { prev: { href: '/financials', label: 'Financials' } },
};

export default function TopNav() {
    const pathname = usePathname();
    const nav = PREV_NEXT_MAP[pathname];

    if (!nav) return null;

    return (
        <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200 px-8 py-4 mb-8">
            <div className="flex justify-between items-center max-w-4xl mx-auto">
                <div>
                    {nav.prev ? (
                        <Link
                            href={nav.prev.href}
                            className="group flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
                        >
                            <svg className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            {nav.prev.label}
                        </Link>
                    ) : <div />}
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Strategic Plan
                </div>

                <div>
                    {nav.next ? (
                        <Link
                            href={nav.next.href}
                            className="group flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
                        >
                            {nav.next.label}
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    ) : <div />}
                </div>
            </div>
        </div>
    );
}
