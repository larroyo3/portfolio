import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Header } from './components/Header';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' ||
                (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <div className="min-h-screen">
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <main>
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Services />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
