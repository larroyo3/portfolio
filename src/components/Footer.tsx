import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="py-12 border-t border-border-subtle">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-text-high/60 text-sm">
                        © {new Date().getFullYear()} Lucas Arroyo. Tous droits réservés.
                    </div>
                </div>
            </div>
        </footer>
    );
};
