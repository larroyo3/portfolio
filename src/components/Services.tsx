import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Bug, Settings, Code, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
    const services = [
        {
            title: 'Développement d’application mobile (Android & KMP)',
            desc: "Conception et développement complet de votre application mobile, de l'idée à la mise en production sur les stores.",
            icon: <Code className="text-solid" size={20} />
        },
        {
            title: 'Correction de bugs',
            desc: 'Diagnostic et résolution de bugs sur votre application existante. Optimisation des performances et de la stabilité.',
            icon: <Bug className="text-solid" size={20} />
        },
        {
            title: 'Maintenance & évolutions',
            desc: 'Accompagnement continu pour faire évoluer votre application : nouvelles fonctionnalités, mises à jour, refactoring.',
            icon: <Settings className="text-solid" size={20} />
        },
    ];

    return (
        <section id="services" className="py-24">
            <div className="container-custom">
                <div className="text-left mb-16">
                    <h2 className="section-title mb-4">
                        Mes Services<span className="text-solid">.</span>
                    </h2>
                    <p className="text-text-high/60 max-w-2xl">Des prestations claires, adaptées à chaque étape de votre projet mobile.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl bg-bg-ui border border-border-subtle hover:border-solid hover:shadow-lg transition-all text-left group flex flex-col"
                        >
                            <div className="w-10 h-10 bg-solid/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-solid/20 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-3 min-h-[3.5rem] flex items-center">{service.title}</h3>
                            <p className="text-sm text-text-high/70 leading-relaxed mb-6">
                                {service.desc}
                            </p>
                            <a
                                href="#contact"
                                className="mt-auto text-xs font-bold uppercase tracking-widest text-text-low hover:text-solid flex items-center gap-2 transition-colors"
                            >
                                Demander un devis <ArrowRight size={16} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
