import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Calendar, MapPin, Send, ChevronDown, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
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
                'service_hlo7b2b',
                'template_ww5ob69', // Template ID
                formRef.current,
                'aQVzElRn7PP3_x24B'
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
                        Travaillons ensemble<span className="text-solid">.</span>
                    </h2>
                    <p className="text-text-high/60 max-w-2xl">Vous avez un projet en tête ? Discutons-en.</p>
                </div>

                <div className="bg-bg-app rounded-3xl border border-border-subtle overflow-hidden shadow-2xl flex flex-col md:flex-row">
                    {/* Form on the left */}
                    <div className="md:w-2/3 p-12 order-2 md:order-1 border-r border-border-subtle">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-text-high/70 uppercase tracking-wider">Nom</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        placeholder="Jean Dupont"
                                        className="w-full bg-bg-subtle border border-border-subtle p-4 rounded-xl focus:outline-none focus:border-solid transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-text-high/70 uppercase tracking-wider">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        placeholder="jean@entreprise.com"
                                        className="w-full bg-bg-subtle border border-border-subtle p-4 rounded-xl focus:outline-none focus:border-solid transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-text-high/70 uppercase tracking-wider">Budget (Optionnel)</label>
                                <div className="relative">
                                    <select
                                        name="budget"
                                        className="w-full bg-bg-subtle border border-border-subtle p-4 pr-12 rounded-xl focus:outline-none focus:border-solid transition-colors appearance-none cursor-pointer"
                                    >
                                        <option value="Non défini" selected>Je ne sais pas / À définir</option>
                                        <option value="Moins de 5k€">Moins de 5k€</option>
                                        <option value="5k€ - 15k€">5k€ - 15k€</option>
                                        <option value="Plus de 15k€">Plus de 15k€</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-text-high/40 pointer-events-none" size={20} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-text-high/70 uppercase tracking-wider">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    placeholder="Décrivez votre projet en quelques lignes..."
                                    className="w-full bg-bg-subtle border border-border-subtle p-4 rounded-xl focus:outline-none focus:border-solid transition-colors resize-none"
                                ></textarea>
                            </div>

                            <div className="flex flex-col gap-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Envoi en cours...
                                        </span>
                                    ) : (
                                        <><Send size={18} /> Envoyer</>
                                    )}
                                </button>

                                <AnimatePresence>
                                    {status === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-xl border border-green-100"
                                        >
                                            <CheckCircle2 size={18} />
                                            <span className="text-sm font-medium">Message envoyé avec succès !</span>
                                        </motion.div>
                                    )}
                                    {status === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl border border-red-100"
                                        >
                                            <AlertCircle size={18} />
                                            <span className="text-sm font-medium">Une erreur est survenue. Veuillez réessayer.</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </form>
                    </div>

                    {/* Info on the right */}
                    <div className="md:w-1/3 bg-bg-ui-hover p-12 text-text-high flex flex-col justify-between order-1 md:order-2">
                        <div>
                            <h3 className="text-xl font-bold mb-8">
                                Autres moyens de me joindre<span className="text-solid">.</span>
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-solid/10 rounded-lg flex items-center justify-center text-solid">
                                        <Mail size={20} />
                                    </div>
                                    <span className="font-medium">lucas@arroyo.dev</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-solid/10 rounded-lg flex items-center justify-center text-solid">
                                        <Calendar size={20} />
                                    </div>
                                    <span className="font-medium">Calendly (disponible)</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-solid/10 rounded-lg flex items-center justify-center text-solid">
                                        <MapPin size={20} />
                                    </div>
                                    <span className="font-medium">Paris / Full Remote</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-12 border-t border-border-subtle">
                            <p className="text-xs font-semibold uppercase tracking-wider text-text-high/60">Réponse sous 24h à 48h</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
