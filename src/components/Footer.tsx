import { useTranslation } from 'react-i18next';
import { Linkedin, Github, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
    const { t } = useTranslation();
    return (
        <footer className="py-12 border-t border-border-subtle">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-text-high/60 text-sm">
                        © {new Date().getFullYear()} Lucas Arroyo. {t('footer.rights')}
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="https://www.linkedin.com/in/lucas-arroyo/" target="_blank" rel="noopener noreferrer" className="text-text-high/60 hover:text-solid transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://github.com/larroyo3" target="_blank" rel="noopener noreferrer" className="text-text-high/60 hover:text-solid transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.instagram.com/acyll_studios/" target="_blank" rel="noopener noreferrer" className="text-text-high/60 hover:text-solid transition-colors">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
