"use client";
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Enter the number',
    description: 'Type or paste any phone number. See smart suggestions from previous calls.',
    image: 'Type number',
  },
  {
    number: '2',
    title: 'Make the call',
    description: 'Tap to dial. Focus on the conversation, not the admin work.',
    image: 'Tap call button',
  },
  {
    number: '3',
    title: 'Log in 5 seconds',
    description: 'After the call, quickly select the outcome and add a label if needed.',
    image: 'Select status',
  },
  {
    number: '4',
    title: 'Track everything',
    description: 'View your complete call history with color-coded status for easy follow-up.',
    image: 'See history',
  },
];

export function Demo() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-gray-900">How it works</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Simple, fast, and built for high-volume calling
          </p>
        </motion.div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-xl mb-6">
                  <span className="text-xl">{step.number}</span>
                </div>
                
                <h3 className="mb-4 text-gray-900 text-3xl">{step.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{step.description}</p>
                
                <div className="flex items-center gap-2 text-purple-600">
                  <Check className="w-5 h-5" />
                  <span>Takes less than 5 seconds</span>
                </div>
              </div>

              {/* Visual representation */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12 flex items-center justify-center min-h-[300px] border border-purple-100">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl text-white">{step.number}</span>
                    </div>
                    <p className="text-gray-600 text-lg">{step.image}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-purple-50 rounded-full border border-purple-200">
            <span className="text-gray-700">Average setup time:</span>
            <span className="text-2xl text-purple-600">30 seconds</span>
            <ArrowRight className="w-5 h-5 text-purple-600" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
