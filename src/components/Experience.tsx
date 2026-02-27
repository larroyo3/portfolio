import React from 'react';
import { motion } from 'framer-motion';

export const Experience: React.FC = () => {
    const experiences = [
        {
            company: 'Sogelink',
            role: 'Développeur Mobile Senior',
            period: '2023 - Présent',
            desc: 'Lead technique sur les applications de terrain. Migration vers Jetpack Compose et mise en place d\'une architecture KMP partagée.'
        },
        {
            company: 'Freelance',
            role: 'Consultant Expert Android/KMP',
            period: '2021 - 2023',
            desc: 'Accompagnement de startups dans le développement de leurs MVP. Audit technique et optimisation de performance.'
        },
        {
            company: 'Startup Innovante',
            role: 'Développeur Android',
            period: '2019 - 2021',
            desc: 'Développement de fonctionnalités critiques et maintenance de CI/CD.'
        }
    ];

    return (
        <section id="experience" className="py-24 bg-bg-subtle">
            <div className="container-custom">
                <h2 className="text-3xl font-bold mb-16 text-center">Parcours Professionnel</h2>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border-focus -translate-x-1/2 hidden md:block"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-solid border-4 border-bg-app -translate-x-1/2 hidden md:block"></div>

                                <div className="md:w-1/2">
                                    <div className={`bg-bg-app p-8 rounded-2xl border border-border-subtle shadow-sm hover:border-solid transition-colors ${i % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                                        <span className="text-solid font-bold text-sm mb-2 block">{exp.period}</span>
                                        <h3 className="text-xl font-extrabold mb-1">{exp.role}</h3>
                                        <h4 className="text-text-low font-semibold mb-4">{exp.company}</h4>
                                        <p className="text-text-high/70 leading-relaxed text-sm">{exp.desc}</p>
                                    </div>
                                </div>
                                <div className="md:w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
