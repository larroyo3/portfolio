import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import profilePic from '../assets/profil-pic.png';
import { FloatingStats, MobileStats } from './FloatingStats';

export const About: React.FC = () => {
    const { t } = useTranslation();
    const sectionRef = React.useRef<HTMLElement>(null);
    const skills = [
        'Android', 'Kotlin Multiplatform', 'Jetpack Compose', 'Kotlin',
        'Architecture (MVVM/MVI)', 'Clean Code'
    ];

    return (
        <section id="about" ref={sectionRef} className="py-20 bg-bg-subtle relative overflow-hidden scroll-mt-8">
            <div className="max-w-4xl mx-4 md:ml-auto md:mr-4 lg:mr-[10%] relative z-10 overflow-visible">
                <FloatingStats containerRef={sectionRef} />
                <div className="grid md:grid-cols-[1fr_2fr] gap-16 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative hidden md:block"
                    >
                        <div className="relative w-full max-w-[280px] ml-auto">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden border-4 border-white dark:border-bg-ui shadow-xl">
                                <img
                                    src={profilePic}
                                    alt="Lucas Arroyo"
                                    className="w-full h-full object-cover brightness-[1.08] contrast-[0.9] saturate-[1.1] sepia-[0.1]"
                                />
                            </div>
                            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-solid/15 rounded-2xl -z-10 border border-solid/20"></div>
                        </div>
                    </motion.div>

                    {/* Mobile Image (centered, smaller) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative block md:hidden mb-12 flex justify-center"
                    >
                        <div className="relative w-full max-w-[280px]">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden border-4 border-white dark:border-bg-ui shadow-xl">
                                <img
                                    src={profilePic}
                                    alt="Lucas Arroyo"
                                    className="w-full h-full object-cover brightness-[1.08] contrast-[0.9] saturate-[1.1] sepia-[0.1]"
                                />
                            </div>
                            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-solid/15 rounded-2xl -z-10 border border-solid/20"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col h-full justify-center"
                    >
                        <h2 className="section-title">
                            {t('about.title')}<span className="text-solid">.</span>
                        </h2>
                        <p className="text-lg text-text-high/80 mb-6 leading-relaxed">
                            {t('about.desc1')}
                        </p>
                        <p className="text-lg text-text-high/80 mb-8 leading-relaxed">
                            {t('about.desc2')}
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 rounded-lg bg-bg-app border border-border-subtle text-sm font-semibold text-text-high"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <MobileStats />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
