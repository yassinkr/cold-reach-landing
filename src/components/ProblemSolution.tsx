"use client";
import { motion } from 'motion/react';
import { X, Check, Contact, History, Tag, Smartphone } from 'lucide-react';
/* eslint-disable react/no-unescaped-entities */

const problems = [
  {
    icon: Contact,
    problem: 'Contact list cluttered with one-time calls',
    solution: 'Dial any number without saving to contacts',
  },
  {
    icon: History,
    problem: 'Forgetting which prospects need follow-up',
    solution: 'Color-coded status tracking for every call',
  },
  {
    icon: Tag,
    problem: 'Lost context from previous conversations',
    solution: 'Quick notes and labels for instant recall',
  },
  {
    icon: Smartphone,
    problem: 'Mixing personal and professional contacts',
    solution: 'Complete separation with local-only storage',
  },
];

export function ProblemSolution() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-gray-900">Built for your workflow</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We understand the challenges of cold calling. Here's how we solve them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((item, index) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start gap-2 mb-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 line-through">{item.problem}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-900">{item.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-white rounded-full shadow-sm border border-gray-100">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-700">100% Private</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-700">No Data Sharing</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-700">Free Forever</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
