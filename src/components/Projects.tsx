import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
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
            highlight: 'Prix de l\'innovation 2023'
        },
        {
            title: 'Aléa',
            description: 'Projet en cours de développement. À venir prochainement sur les stores Android et iOS.',
            tags: ['KMP', 'Compose', 'API Google Maps'],
            image: thuriiPic,
            comingSoon: true
        },
        {
            title: 'Plumi',
            description: 'Projet en cours de développement. À venir prochainement sur les stores Android et iOS.',
            tags: ['KMP', 'Compose', 'Système de payement'],
            image: thuriiPic,
            comingSoon: true
        }
    ];

    return (
        <section id="projects" className="py-24">
            <div className="container-custom">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="section-title mb-4">
                            Projets<span className="text-solid">.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group bg-bg-subtle rounded-2xl overflow-hidden border border-border-subtle hover:border-solid transition-colors relative"
                        >
                            <div className="aspect-video overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {project.highlight && (
                                    <div className="absolute top-4 left-4 bg-solid text-white text-[10px] font-bold py-1 px-2 rounded-full flex items-center gap-1 shadow-lg">
                                        <Award size={10} /> {project.highlight}
                                    </div>
                                )}

                                {project.comingSoon && (
                                    <div className="absolute inset-0 bg-bg-app/60 backdrop-blur-sm flex items-center justify-center">
                                        <motion.span
                                            animate={{ opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="text-sm font-heading font-bold text-solid"
                                        >
                                            À venir
                                        </motion.span>
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-solid transition-colors">{project.title}</h3>
                                <p className="text-text-high/70 text-sm mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-text-low bg-bg-ui py-1 px-2.5 rounded-md whitespace-nowrap">
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
