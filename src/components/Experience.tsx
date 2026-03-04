import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Experience: React.FC = () => {
    const { t } = useTranslation();
    const experiences = [
        {
            company: 'Freelance',
            role: t('experience.freelance.role'),
            period: `2025 - ${t('experience.present')}`,
            desc: t('experience.freelance.desc').split('\n')
        },
        {
            company: 'Sogelink',
            role: t('experience.sogelink.role'),
            period: '2023 - 2025',
            desc: t('experience.sogelink.desc').split('\n')
        },
        {
            company: 'Thurii',
            role: t('experience.thurii.role'),
            period: '2021 - 2024',
            desc: t('experience.thurii.desc').split('\n')
        }
    ];

    return (
        <section id="experience" className="py-12 md:py-16 px-6 transition-colors duration-200 scroll-mt-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-5xl mx-auto"
            >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-high mb-12 text-center">
                    {t('experience.title')}<span className="text-solid">.</span>
                </h2>
                <div className="max-w-2xl mx-auto space-y-6">
                    {experiences.map((exp, i) => (
                        <div key={i} className="relative pl-8 border-l-2 border-border-subtle group">
                            {/* Dot */}
                            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-solid border-2 border-bg-app transition-transform duration-300 group-hover:scale-125" />

                            <p className="text-[12px] text-text-high/60 mb-0.5 font-medium uppercase tracking-wider">{exp.period}</p>

                            <h3 className="font-heading font-bold text-lg text-text-high group-hover:text-solid transition-colors duration-200">
                                {exp.role}
                            </h3>

                            <p className="text-solid font-semibold text-sm mb-2">
                                {exp.company}
                            </p>

                            <div className="space-y-1">
                                {exp.desc.map((line, j) => (
                                    line === "" ? (
                                        <div key={j} className="h-2" />
                                    ) : (
                                        <p key={j} className="text-sm text-text-high/80 leading-snug">
                                            {line}
                                        </p>
                                    )
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
