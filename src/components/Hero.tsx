"use client";
import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      });
    }
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 pt-20 pb-12">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50" />
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Value Prop */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-purple-900">Trusted by 10,000+ sales professionals</span>
          </motion.div>

          <h1
            ref={titleRef}
            className="mb-6 text-gray-900"
            style={{ fontSize: '3.5rem', lineHeight: '1.1', letterSpacing: '-0.02em' }}
          >
            Stop cluttering your contacts.
            <span className="block text-purple-600 mt-2">Start closing more deals.</span>
          </h1>

          <p className="mb-8 text-gray-600 text-xl leading-relaxed">
            The smart dialer built for cold calling. Make calls, track conversations, and follow up with prospects—without saving a single number to your phone.
          </p>

          {/* Key benefits */}
          <div className="space-y-3 mb-10">
            {[
              'Never lose track of a follow-up again',
              'Keep personal and work contacts separate',
              'Log call outcomes in seconds',
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-4"
          >
            <Button className="px-8 py-6 bg-purple-600 hover:bg-purple-700 text-lg shadow-lg shadow-purple-600/30">
              <Phone className="w-5 h-5 mr-2" />
              Download Free
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg border-2 border-gray-300 hover:border-purple-600 hover:text-purple-600">
              See How It Works
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          <p className="mt-6 text-sm text-gray-500">
            Free forever. iOS & Android. No credit card required.
          </p>
        </div>

        {/* Right: Phone Mockup with Real UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Phone frame */}
            <div className="w-[320px] h-[650px] bg-gray-900 rounded-[3rem] shadow-2xl p-3 relative">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status bar */}
                <div className="bg-gray-50 px-6 py-3 flex justify-between items-center text-xs">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 bg-green-500 rounded-full" />
                  </div>
                </div>

                {/* App content */}
                <div className="p-6">
                  <h3 className="mb-6 text-center">Quick Call</h3>
                  
                  {/* Phone input */}
                  <div className="bg-gray-100 rounded-2xl p-4 mb-4">
                    <input
                      type="text"
                      value="+1 (555) 234-5678"
                      readOnly
                      className="w-full bg-transparent text-center text-lg outline-none"
                    />
                  </div>

                  {/* Autocomplete suggestions */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-xl"
                  >
                    <p className="text-xs text-blue-800 mb-2">Previously called:</p>
                    <p className="text-sm">ABC Corp - Follow up needed</p>
                  </motion.div>

                  {/* Call button */}
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-2xl flex items-center justify-center gap-2 mb-6 shadow-lg">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </button>

                  {/* Recent calls */}
                  <div>
                    <p className="text-sm text-gray-600 mb-3">Recent Calls</p>
                    <div className="space-y-2">
                      {[
                        { name: 'Tech Solutions Inc', status: 'Interested', color: 'bg-green-500' },
                        { name: 'Global Enterprises', status: 'Follow Up', color: 'bg-orange-500' },
                        { name: 'Smith & Co', status: 'Not Answered', color: 'bg-gray-400' },
                      ].map((call, i) => (
                        <motion.div
                          key={call.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.8 + i * 0.1 }}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                        >
                          <div className={`w-2 h-2 ${call.color} rounded-full`} />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm truncate">{call.name}</p>
                            <p className="text-xs text-gray-500">{call.status}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, type: 'spring' }}
              className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
            >
              <p className="text-2xl mb-1">127</p>
              <p className="text-xs text-gray-600">Calls Today</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2, type: 'spring' }}
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
            >
              <p className="text-2xl mb-1">23</p>
              <p className="text-xs text-gray-600">Follow Ups</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
