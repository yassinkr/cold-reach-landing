"use client";
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Sales Director, TechCorp',
    content: 'Cut my call logging time by 80%. Now I can focus on actual conversations instead of data entry.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Recruitment Manager',
    content: 'Finally, a way to keep my work calls separate without buying a second phone. Game changer for recruiters.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'SDR Team Lead',
    content: "My team's follow-up rate increased 40% since we started using this. The status tracking is incredibly simple.",
    rating: 5,
  },
];

export function SocialProof() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 pb-16 border-b border-gray-200"
        >
          {[
            { number: '10K+', label: 'Active Users' },
            { number: '500K+', label: 'Calls Logged' },
            { number: '98%', label: 'Satisfaction' },
            { number: '4.9/5', label: 'App Store Rating' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-2 text-purple-600">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-gray-900">Trusted by sales professionals worldwide</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands who've transformed their cold calling workflow
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-gray-50 rounded-2xl p-8 relative border border-gray-100"
            >
              <Quote className="w-8 h-8 text-purple-300 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div>
                <p className="text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
