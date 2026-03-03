import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award } from 'lucide-react';
import thuriiPic from '../assets/thurii-project.jpg';

interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
    highlight?: string;
    comingSoon?: boolean;
}

export const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            title: 'Thurii',
            description: 'Application de randonnée primée avec suivi GPS en temps réel et visualisation des itinéraires.',
            tags: ['Android', 'Kotlin', 'OpenStreetMap'],
            image: thuriiPic,
            highlight: 'Prix du meilleur projet Epitech Lyon 2023'
        },
        {
            title: 'Aléa',
            description: 'Projet en cours de développement. À venir très prochainement sur les stores Android et iOS.',
            tags: ['KMP', 'Compose', 'API Google Maps'],
            image: thuriiPic,
            comingSoon: true
        },
        {
            title: 'Plumi',
            description: 'Projet en cours de développement. À venir très prochainement sur les stores Android et iOS.',
            tags: ['KMP', 'Compose', 'Système de payement'],
            image: thuriiPic,
            comingSoon: true
        }
    ];

    return (
        <section id="projects" className="py-24">
            <div className="container-custom">
                <div className="flex justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title mb-4">
                            Projets<span className="text-solid">.</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: i * 0.12 }}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className="group bg-bg-app rounded-2xl overflow-hidden border border-border-subtle hover:border-solid/50 hover:shadow-md transition-all duration-300 relative"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.08 }}
                                    transition={{ duration: 0.5 }}
                                />
                                {project.highlight && (
                                    <div className="absolute top-4 left-4 bg-solid text-white text-[10px] font-bold py-1 px-2 rounded-full flex items-center gap-1 shadow-lg z-10">
                                        <Award size={10} /> {project.highlight}
                                    </div>
                                )}

                                {project.comingSoon && (
                                    <div className="absolute inset-0 bg-bg-app/60 backdrop-blur-sm flex items-center justify-center z-10">
                                        <motion.span
                                            animate={{ opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="text-sm font-bold text-solid"
                                        >
                                            À venir
                                        </motion.span>
                                    </div>
                                )}
                            </div>
                            <div className="p-5">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-bold text-lg group-hover:text-solid transition-colors">
                                        {project.title}
                                    </h3>
                                    {!project.comingSoon && (
                                        <motion.div
                                            whileHover={{ x: 2, y: -2 }}
                                            transition={{ duration: 0.15 }}
                                        >
                                            <ArrowUpRight size={18} className="text-text-low group-hover:text-solid transition-colors" />
                                        </motion.div>
                                    )}
                                </div>
                                <p className="text-sm text-text-high/70 mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] px-3 py-1 rounded-full bg-bg-ui text-text-low font-bold uppercase tracking-wider transition-colors group-hover:bg-solid/5 group-hover:text-solid"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
