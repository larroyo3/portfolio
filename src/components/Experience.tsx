import React from 'react';
import { motion } from 'framer-motion';

export const Experience: React.FC = () => {
    const experiences = [
        {
            company: 'Freelance',
            role: 'Développeur application mobile | Android & KMP',
            period: '2025 - Présent',
            desc: [
                'Développeur mobile spécialisé en Android (Jetpack Compose) et Kotlin Multiplatform (Compose / SwiftUI).',
                '',
                'Mon objectif : créer des expériences mobiles fluides, robustes et maintenables, en misant sur des architectures propres et une intégration fluide entre Android et iOS grâce à Kotlin Multiplatform.'
            ]
        },
        {
            company: 'Sogelink',
            role: 'Ingénieur développement',
            period: '2023 - 2025',
            desc: [
                'Participation au développement d’une application mobile innovante destinée aux professionnels du BTP, dans le cadre d’un projet stratégique visant à consolider la position de leader de Sogelink sur le marché.',
                '',
                'Conception et développement en Kotlin Multiplatform avec Jetpack Compose (Android) et SwiftUI (iOS), dans le respect des bonnes pratiques d’architecture logicielle.',
            ]
        },
        {
            company: 'Thurii',
            role: 'Co-fondateur | Android développeur',
            period: '2021 - 2024',
            desc: [
                'Développement d’une application Android destinée aux amateurs de randonnée, permettant le suivi GPS en temps réel et la visualisation des itinéraires.',
                '',
                'Réalisation complète en Kotlin, intégration de la géolocalisation GPS, traçage et enregistrement d’itinéraires, gestion des permissions, et mise en place d’un système de notifications.',
                '',
                'Publication réussie sur le Google Play Store avec plus de 50 utilisateurs actifs. Récompensé comme meilleur projet étudiant à Epitech Lyon pour sa qualité technique et son innovation.'
            ]
        }
    ];

    return (
        <section id="experience" className="py-16 md:py-24 px-6 transition-colors duration-200">
            <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="max-w-5xl mx-auto"
            >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-high mb-12 text-center">
                    Parcours<span className="text-solid">.</span>
                </h2>
                <div className="max-w-2xl mx-auto space-y-8">
                    {experiences.map((exp, i) => (
                        <div key={i} className="relative pl-8 border-l-2 border-border-subtle group">
                            {/* Dot */}
                            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-solid border-2 border-bg-app transition-transform duration-300 group-hover:scale-125" />

                            <p className="text-sm text-text-high/60 mb-1 font-medium">{exp.period}</p>

                            <h3 className="font-heading font-bold text-lg text-text-high group-hover:text-solid transition-colors duration-200">
                                {exp.role}
                            </h3>

                            <p className="text-solid font-semibold text-sm mb-3">
                                {exp.company}
                            </p>

                            <ul className="space-y-2">
                                {exp.desc.map((line, j) => (
                                    line === "" ? (
                                        <li key={j} className="h-2" />
                                    ) : (
                                        <li key={j} className="text-sm text-text-high/80 leading-relaxed">
                                            {line}
                                        </li>
                                    )
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
