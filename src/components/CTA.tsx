"use client";
import { motion } from 'motion/react';
import { Phone, Apple, Smartphone, Check } from 'lucide-react';
import { Button } from './ui/button';

export function CTA() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-purple-600 to-blue-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-white">Join 10,000+ sales professionals</span>
          </div>

          <h2 className="mb-6 text-white" style={{ fontSize: '3.5rem', lineHeight: '1.1' }}>
            Ready to transform your cold calling?
          </h2>

          <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Download now and start making more effective calls today. No credit card required.
          </p>

          {/* Key benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              'Free forever',
              'No data sharing',
              'Setup in 30 seconds',
            ].map((benefit) => (
              <div key={benefit} className="flex items-center justify-center gap-2 text-white">
                <Check className="w-5 h-5 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* Download buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="px-10 py-7 bg-white text-purple-600 hover:bg-gray-100 text-lg shadow-xl">
                <Apple className="w-6 h-6 mr-2" />
                Download for iOS
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="px-10 py-7 bg-white text-purple-600 hover:bg-gray-100 text-lg shadow-xl">
                <Smartphone className="w-6 h-6 mr-2" />
                Download for Android
              </Button>
            </motion.div>
          </div>

          <p className="text-white/70 text-sm">
            Available on iOS 13+ and Android 8+
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-2xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white/20 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
    </section>
  );
}
