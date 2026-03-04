import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FloatingTestimonials, MobileTestimonials } from './FloatingTestimonials';

export const Experience: React.FC = () => {
    const { t } = useTranslation();
    const sectionRef = React.useRef<HTMLElement>(null);

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
        <section id="experience" ref={sectionRef} className="py-24 bg-bg-subtle relative overflow-hidden scroll-mt-8">
            <div className="max-w-4xl mx-4 md:ml-auto md:mr-4 lg:mr-[10%] relative z-10 overflow-visible">
                <FloatingTestimonials containerRef={sectionRef} t={t} />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="section-title text-left">
                        {t('experience.title')}<span className="text-solid">.</span>
                    </h2>
                </motion.div>

                <div className="space-y-12 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-border-subtle via-solid/30 to-border-subtle" />

                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative pl-10 group"
                        >
                            {/* Dot */}
                            <div className="absolute -left-[5px] top-2 w-[12px] h-[12px] rounded-full bg-bg-app border-2 border-solid group-hover:bg-solid transition-colors duration-300 shadow-[0_0_10px_rgba(var(--color-solid),0.5)]" />

                            <div className="bg-bg-app/50 p-6 rounded-2xl border border-white/5 group-hover:border-solid/20 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-solid/5">
                                <span className="text-[11px] text-solid font-black uppercase tracking-[0.2em] mb-3 block">
                                    {exp.period}
                                </span>

                                <h3 className="font-heading font-black text-xl text-text-high mb-1 group-hover:text-solid transition-colors duration-300">
                                    {exp.role}
                                </h3>

                                <div className="text-text-high/70 font-bold text-sm mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-solid" />
                                    {exp.company}
                                </div>

                                <div className="space-y-3">
                                    {exp.desc.map((line, j) => (
                                        line === "" ? (
                                            <div key={j} className="h-1" />
                                        ) : (
                                            <p key={j} className="text-[15px] text-text-high/60 leading-relaxed font-medium">
                                                {line}
                                            </p>
                                        )
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <MobileTestimonials t={t} />
            </div>
        </section>
    );
};
