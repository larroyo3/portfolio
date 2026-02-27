import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, Search, Code, MessageSquare } from 'lucide-react';

export const Services: React.FC = () => {
    const services = [
        {
            title: 'Expertise KMP',
            desc: 'Migration et développement d\'architectures Kotlin Multiplatform pour unifier votre logique métier.',
            icon: <Code className="text-solid" />
        },
        {
            title: 'Optimisation Perf',
            desc: 'Audit complet et amélioration de la fluidité, du temps de chargement et de la consommation batterie.',
            icon: <Zap className="text-solid" />
        },
        {
            title: 'Refonte UI Modernes',
            desc: 'Transition vers Jetpack Compose ou SwiftUI pour des interfaces déclaratives et réactives.',
            icon: <Smartphone className="text-solid" />
        },
        {
            title: 'Audit & Conseil',
            desc: 'Rédaction de cahiers des charges techniques et estimation de faisabilité pour vos projets complexes.',
            icon: <Search className="text-solid" />
        }
    ];

    return (
        <section id="services" className="py-24">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="section-title mb-4">
                        Mes Services<span className="text-solid">.</span>
                    </h2>
                    <p className="text-text-high/60 max-w-2xl mx-auto">Des solutions sur-mesure pour vos besoins en développement mobile, de la conception à la performance.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl bg-bg-app border border-border-subtle hover:border-solid hover:shadow-lg transition-all text-center group"
                        >
                            <div className="w-12 h-12 bg-bg-ui rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-solid/10 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                            <p className="text-sm text-text-high/70 leading-relaxed mb-6">
                                {service.desc}
                            </p>
                            <button className="text-xs font-bold uppercase tracking-widest text-text-low hover:text-solid flex items-center justify-center gap-2 mx-auto">
                                Demander un devis <MessageSquare size={14} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
