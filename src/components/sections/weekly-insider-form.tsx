"use client";

import React from "react";
import { motion } from "framer-motion";

export const WeeklyInsiderForm = () => {
  return (
    <section className="py-24 bg-white dark:bg-dark-card border-t border-gray-100 dark:border-dark-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-transparent dark:from-brand-900/10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-brand-600 dark:text-brand-400 font-semibold tracking-wider uppercase text-sm mb-2 block">
              Join the Community
            </span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get the Weekly Insider
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Join thousands of medical professionals growing their practice with AI. Get exclusive tips, strategies, and updates delivered to your inbox.
            </p>
          </motion.div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-50 dark:bg-dark-bg p-8 rounded-3xl border border-gray-100 dark:border-dark-border shadow-sm"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-400"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="business" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Business Name
              </label>
              <input
                type="text"
                id="business"
                placeholder="Acme Clinic"
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500 transition-colors" />
              <span className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                By checking this box, I consent to receive transactional messages related to my account, orders, or services I have requested. These messages may include appointment reminders, order confirmations, and account notifications among others. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
              </span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500 transition-colors" />
              <span className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                By checking this box, I consent to receive marketing and promotional messages, including special offers, discounts, new product updates among others. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
              </span>
            </label>
          </div>

          <div className="flex flex-col items-center gap-6">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Subscribe to Insider
            </button>
            
            <div className="flex gap-6 text-xs text-gray-400 dark:text-gray-500">
              <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
};
