import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profil-pic.png';

export const About: React.FC = () => {
    const skills = [
        'Kotlin Multiplatform', 'Jetpack Compose', 'SwiftUI',
        'Architecture (MVVM/MVI)', 'Performance Optimization', 'Clean Code'
    ];

    return (
        <section id="about" className="py-20 bg-bg-subtle">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center md:justify-start"
                    >
                        <div className="relative w-full max-w-[320px]">
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
                    >
                        <h2 className="section-title">
                            Expertise & Vision<span className="text-solid">.</span>
                        </h2>
                        <p className="text-lg text-text-high/80 mb-6 leading-relaxed">
                            Développeur mobile passionné par la création d'interfaces fluides et d'architectures robustes.
                            Mon approche combine rigueur technique et sensibilité UX pour livrer des produits performants et maintenables.
                        </p>
                        <p className="text-lg text-text-high/80 mb-8 leading-relaxed">
                            Spécialisé dans l'écosystème Android et le multiplateforme, j'accompagne les entreprises dans la migration
                            vers des technologies modernes comme Jetpack Compose et KMP.
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
