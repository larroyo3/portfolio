import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
    highlight?: string;
}

export const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            title: 'Thurii',
            description: 'Application de navigation GPS récompensée, utilisant OpenStreetMap pour une expérience hors-ligne optimale. Plus de 50k utilisateurs actifs.',
            tags: ['Kotlin', 'Compose', 'OpenStreetMap', 'GPS'],
            image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop',
            highlight: 'Prix de l\'innovation 2023'
        },
        {
            title: 'Aléa',
            description: 'Plateforme mobile de gestion de risques en temps réel pour les professionnels du BTP. Architecture offline-first et synchronisation complexe.',
            tags: ['KMP', 'SwiftUI', 'Coroutines', 'SQLDelight'],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
        },
        {
            title: 'Plumi (À venir)',
            description: 'Solution de suivi nutritionnel intelligent avec reconnaissance d\'image. Focus sur la performance et le rendu fluide des graphiques.',
            tags: ['Jetpack Compose', 'MLKit', 'Charts'],
            image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop'
        }
    ];

    return (
        <section id="projects" className="py-24">
            <div className="container-custom">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Projets Sélectionnés</h2>
                        <p className="text-text-high/60 max-w-xl">Une sélection de mes travaux récents, mettant l'accent sur la performance et l'expérience utilisateur.</p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-solid font-semibold hover:underline">
                        Voir plus <ExternalLink size={18} />
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group bg-bg-subtle rounded-2xl overflow-hidden border border-border-subtle hover:border-solid transition-colors"
                        >
                            <div className="aspect-video overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {project.highlight && (
                                    <div className="absolute top-4 left-4 bg-solid text-white text-xs font-bold py-1 px-3 rounded-full flex items-center gap-1 shadow-lg">
                                        <Award size={12} /> {project.highlight}
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-solid transition-colors">{project.title}</h3>
                                <p className="text-text-high/70 text-sm mb-6 line-clamp-3 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-text-low bg-bg-ui py-1 px-2 rounded-md">
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
