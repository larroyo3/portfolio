import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Calendar, MapPin, Send, ChevronDown, CheckCircle2, AlertCircle, Download } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

export const Contact: React.FC = () => {
    const { t } = useTranslation();
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsSubmitting(true);
        setStatus('idle');

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
            formRef.current.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-bg-subtle">
            <div className="container-custom">
                <div className="text-left mb-12">
                    <h2 className="section-title mb-4">
                        {t('contact.title')}<span className="text-solid">.</span>
                    </h2>
                    <p className="text-text-high/60 max-w-2xl">{t('contact.subtitle')}</p>
                </div>

                <div className="bg-bg-app rounded-3xl border border-border-subtle overflow-hidden shadow-2xl flex flex-col md:flex-row">
                    {/* Form on the top/left */}
                    <div className="md:w-2/3 p-12 border-b md:border-b-0 md:border-r border-border-subtle">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-text-high/70 uppercase tracking-wider">{t('contact.form.name')}</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        placeholder={t('contact.form.namePlaceholder')}
                                        className="w-full bg-bg-subtle border border-border-subtle p-4 rounded-xl focus:outline-none focus:border-solid transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-text-high/70 uppercase tracking-wider">{t('contact.form.email')}</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        placeholder={t('contact.form.emailPlaceholder')}
                                        className="w-full bg-bg-subtle border border-border-subtle p-4 rounded-xl focus:outline-none focus:border-solid transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-text-high/70 uppercase tracking-wider">{t('contact.form.budget')}</label>
                                <div className="relative">
                                    <select
                                        name="budget"
                                        className="w-full bg-bg-subtle border border-border-subtle p-4 pr-12 rounded-xl focus:outline-none focus:border-solid transition-colors appearance-none cursor-pointer"
                                    >
                                        <option value="Non défini" selected>{t('contact.form.budgetPlaceholder')}</option>
                                        <option value="Moins de 5k€">{t('contact.form.budgetOption1')}</option>
                                        <option value="5k€ - 15k€">{t('contact.form.budgetOption2')}</option>
                                        <option value="Plus de 15k€">{t('contact.form.budgetOption3')}</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-text-high/40 pointer-events-none" size={20} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-text-high/70 uppercase tracking-wider">{t('contact.form.message')}</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    placeholder={t('contact.form.messagePlaceholder')}
                                    className="w-full bg-bg-subtle border border-border-subtle p-4 rounded-xl focus:outline-none focus:border-solid transition-colors resize-none"
                                ></textarea>
                            </div>

                            <div className="flex flex-col gap-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            {t('contact.form.sending')}
                                        </span>
                                    ) : (
                                        <><Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> {t('contact.form.send')}</>
                                    )}
                                </button>

                                <AnimatePresence>
                                    {status === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-xl border border-green-100 dark:bg-green-950/20 dark:text-green-400 dark:border-green-900/30"
                                        >
                                            <CheckCircle2 size={18} />
                                            <span className="text-sm font-medium">{t('contact.form.success')}</span>
                                        </motion.div>
                                    )}
                                    {status === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl border border-red-100 dark:bg-red-950/20 dark:text-red-400 dark:border-red-900/30"
                                        >
                                            <AlertCircle size={18} />
                                            <span className="text-sm font-medium">{t('contact.form.error')}</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </form>
                    </div>

                    {/* Info on the bottom/right */}
                    <div className="md:w-1/3 bg-bg-ui-hover p-12 text-text-high flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold mb-8">
                                {t('contact.info.title')}<span className="text-solid"> :</span>
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-solid/10 rounded-lg flex items-center justify-center text-solid">
                                        <Mail size={20} />
                                    </div>
                                    <span className="font-medium text-sm sm:text-base">acyll.studios@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-solid/10 rounded-lg flex items-center justify-center text-solid shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <span className="font-medium text-sm sm:text-base">{t('contact.info.location')}</span>
                                </div>
                            </div>

                            <div className="mt-10 space-y-4">
                                <a
                                    href="https://calendly.com/lucas-arroyo/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 bg-text-high text-bg-app py-4 rounded-xl font-bold hover:bg-text-high/90 transition-all active:scale-[0.98] group"
                                >
                                    <Calendar size={18} className="group-hover:rotate-12 transition-transform" />
                                    {t('contact.info.calendly')}
                                </a>

                                <a
                                    href="/src/assets/cv_lucas_arroyo.pdf"
                                    download="CV_Lucas_Arroyo.pdf"
                                    className="w-full flex items-center justify-center gap-2 bg-bg-app border border-border-subtle text-text-high py-4 rounded-xl font-bold hover:bg-bg-subtle transition-all active:scale-[0.98] group"
                                >
                                    <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                                    {t('contact.info.cv')}
                                </a>
                            </div>
                        </div>

                        <div className="mt-12 pt-12 border-t border-border-subtle">
                            <p className="text-xs font-semibold uppercase tracking-wider text-text-high/60">{t('contact.info.response')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
