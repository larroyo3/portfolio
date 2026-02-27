import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="py-12 border-t border-border-subtle">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-text-high/60 text-sm">
                        © {new Date().getFullYear()} Lucas Arroyo. Tous droits réservés.
                    </div>

                    <div className="flex items-center gap-8 text-sm font-medium">
                        <a href="#" className="hover:text-solid transition-colors">Mentions légales</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-solid transition-colors">LinkedIn</a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-solid transition-colors">GitHub</a>
                    </div>

                    <div className="text-text-high/40 text-xs">
                        Conçu avec React & Tailwind
                    </div>
                </div>
            </div>
        </footer>
    );
};
