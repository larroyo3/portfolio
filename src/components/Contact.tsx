import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-bg-subtle">
            <div className="container-custom">
                <div className="bg-bg-app rounded-3xl border border-border-subtle overflow-hidden shadow-2xl flex flex-col md:flex-row">

                    <div className="md:w-1/3 bg-solid p-12 text-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Parlons de votre projet</h2>
                            <p className="text-white/80 mb-12">
                                Disponible pour des missions en freelance ou du conseil technique.
                                N'hésitez pas à me contacter par email ou à réserver un créneau.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                        <Mail size={20} />
                                    </div>
                                    <span>lucas@arroyo.dev</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                        <Calendar size={20} />
                                    </div>
                                    <span>Calendly (disponible)</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                        <MapPin size={20} />
                                    </div>
                                    <span>Paris / Full Remote</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-12 border-t border-white/20">
                            <p className="text-sm font-medium">Réponse sous 24h à 48h</p>
                        </div>
                    </div>

                    <div className="md:w-2/3 p-12">
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-text-high/70 uppercase tracking-wider">Nom complet</label>
                                    <input
                                        type="text"
                                        placeholder="Jean Dupont"
                                        className="w-full bg-bg-subtle border border-border-subtle p-4 rounded-xl focus:outline-none focus:border-solid transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-text-high/70 uppercase tracking-wider">Email</label>
                                    <input
                                        type="email"
                                        placeholder="jean@entreprise.com"
                                        className="w-full bg-bg-subtle border border-border-subtle p-4 rounded-xl focus:outline-none focus:border-solid transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-text-high/70 uppercase tracking-wider">Budget (Optionnel)</label>
                                <select className="w-full bg-bg-subtle border border-border-subtle p-4 rounded-xl focus:outline-none focus:border-solid transition-colors">
                                    <option>Moins de 5k€</option>
                                    <option>5k€ - 15k€</option>
                                    <option>Plus de 15k€</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-text-high/70 uppercase tracking-wider">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Décrivez votre projet en quelques lignes..."
                                    className="w-full bg-bg-subtle border border-border-subtle p-4 rounded-xl focus:outline-none focus:border-solid transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                                Envoyer le message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
