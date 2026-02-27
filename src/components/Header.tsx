import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Linkedin, Github, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Projets', href: '#projects' },
        { name: 'Parcours', href: '#experience' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-bg-app/80 backdrop-blur-md border-b border-border-subtle py-3' : 'bg-transparent py-6'
                }`}
        >
            <div className="container-custom flex items-center justify-between">
                <motion.a
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-heading font-extrabold text-solid"
                >
                    LA.
                </motion.a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="relative text-sm font-medium hover:text-solid transition-colors group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-solid scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                        </motion.a>
                    ))}
                    <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-border-subtle">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full hover:bg-bg-ui transition-colors text-text-high"
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    <button onClick={toggleDarkMode} className="p-2 text-text-high">
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-text-high"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-bg-app border-b border-border-subtle overflow-hidden"
                    >
                        <div className="container-custom py-8 flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium hover:text-solid"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex space-x-6 pt-4">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
