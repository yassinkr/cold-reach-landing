"use client";
import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Zap, Tag, History, BarChart3, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Phone,
    title: 'Instant Dialing',
    description: 'Tap to call any number without adding to your contact list. Keep your personal contacts clean.',
    benefit: 'Save 2-3 minutes per call',
  },
  {
    icon: Zap,
    title: 'Smart Autocomplete',
    description: 'Previously called numbers appear as you type, with full context from your last conversation.',
    benefit: 'Never forget a prospect',
  },
  {
    icon: Tag,
    title: 'Quick Call Logging',
    description: 'Log call outcomes (Interested, Follow Up, Rejected, Not Answered) in under 5 seconds.',
    benefit: 'Stay organized effortlessly',
  },
  {
    icon: History,
    title: 'Complete Call History',
    description: 'Color-coded timeline of every call with searchable labels and automatic timestamps.',
    benefit: 'Find any call instantly',
  },
  {
    icon: BarChart3,
    title: 'Performance Insights',
    description: 'Track your calling metrics, conversion rates, and follow-up success over time.',
    benefit: 'Optimize your approach',
  },
  {
    icon: Shield,
    title: 'Local Storage Only',
    description: 'All data stays on your device. No cloud sync, no data sharing, complete privacy guaranteed.',
    benefit: '100% secure & private',
  },
];

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      gsap.from(cards, {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }
  }, []);
  return (
    <section ref={sectionRef} className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-gray-900">Everything you need to excel at cold calling</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Purpose-built features that save time and increase your success rate
          </p>
        </motion.div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-purple-200 hover:shadow-lg "
            >
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
              
              <div className="pt-4 border-t border-gray-200">
                <span className="text-sm text-purple-600">→ {feature.benefit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
