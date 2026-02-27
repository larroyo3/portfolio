import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
    const skills = [
        'Kotlin Multiplatform', 'Jetpack Compose', 'SwiftUI',
        'Architecture (MVVM/MVI)', 'Performance Optimization', 'Clean Code'
    ];

    return (
        <section id="about" className="py-24 bg-bg-subtle">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border-4 border-white dark:border-bg-ui shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                                alt="Lucas Arroyo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-solid rounded-2xl -z-10"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6">Expertise & Vision</h2>
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
