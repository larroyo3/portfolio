import { motion } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Github, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Hero: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#E5484D" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,77.3,-44.7C85.4,-31.3,90.5,-15.7,90.3,-0.1C90.1,15.5,84.6,31,76,44.6C67.4,58.2,55.7,69.9,42.1,77.8C28.5,85.7,14.3,89.8,-0.1,89.9C-14.4,90.1,-28.9,86.2,-42.6,78.5C-56.3,70.8,-69.2,59.3,-77.4,45.7C-85.6,32.1,-89,16,-88.9,0.1C-88.8,-15.8,-85.1,-31.7,-76.7,-45C-68.3,-58.3,-55.1,-69.1,-40.9,-76.1C-26.6,-83,-13.3,-86.1,0.5,-87C14.3,-87.8,28.6,-86.5,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="container-custom relative">
                {/* Social links sidebar */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="hidden lg:flex flex-col items-center gap-6 absolute -left-12 top-1/2 -translate-y-1/2 -mt-8"
                >
                    <a href="https://www.linkedin.com/in/lucas-arroyo/" target="_blank" rel="noopener noreferrer" className="text-text-high/40 hover:text-solid transition-colors p-2">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://github.com/larroyo3" target="_blank" rel="noopener noreferrer" className="text-text-high/40 hover:text-solid transition-colors p-2">
                        <Github size={20} />
                    </a>
                    <a href="https://www.instagram.com/acyll_studios/" target="_blank" rel="noopener noreferrer" className="text-text-high/40 hover:text-solid transition-colors p-2">
                        <Instagram size={20} />
                    </a>
                    <div className="w-px h-12 bg-border-subtle mt-2" />
                </motion.div>

                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <motion.span
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="h-px w-12 bg-solid origin-left"
                            />
                            <span className="text-sm font-medium text-solid tracking-wider uppercase">
                                {t('hero.role')}
                            </span>
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                            {t('hero.title')}<span className="text-solid">{t('hero.titleAccent')}</span>{t('hero.titleEnd')}<span className="text-solid">.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-text-high/80 mb-10 max-w-2xl leading-relaxed">
                            {t('hero.description')}<span className="font-bold text-solid">Lucas Arroyo</span>.
                            {t('hero.descriptionEnd')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#projects" className="btn-primary flex items-center justify-center gap-2 group">
                                {t('hero.ctaProjects')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#contact" className="btn-secondary flex items-center justify-center gap-2 group">
                                {t('hero.ctaContact')} <ArrowRight size={18} className="rotate-[-45deg] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
