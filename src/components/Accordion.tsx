'use client';

import { useState } from 'react';

interface AccordionItem {
  title: string;
  content: string;
  icon?: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  sectionTitle?: string;
}

export default function Accordion({ items, sectionTitle }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {sectionTitle && (
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#FCF8ED' }}>
          {sectionTitle}
        </h2>
      )}
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden transition-all duration-300"
            style={{
              backgroundColor: '#1a2332',
              border: '1px solid #1e2a3a',
            }}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-5 flex items-center gap-4 text-left transition-all duration-300 hover:bg-opacity-80"
              style={{ backgroundColor: openIndex === index ? '#1e2a3a' : 'transparent' }}
            >
              {item.icon && (
                <div className="w-12 h-12 flex-shrink-0 border-2 rounded-lg flex items-center justify-center" style={{ borderColor: '#C95100' }}>
                  <div style={{ color: '#C95100' }}>
                    {item.icon}
                  </div>
                </div>
              )}
              <span className="text-lg font-semibold flex-1" style={{ color: '#FCF8ED' }}>
                {item.title}
              </span>
              <svg
                className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                style={{ color: '#C95100' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-5" style={{ color: '#F4E8D4' }}>
                <p className="leading-relaxed text-sm">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

