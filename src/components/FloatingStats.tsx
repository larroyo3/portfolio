import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Layout, Star, Users, Briefcase } from 'lucide-react';

interface StatProps {
    value: string;
    label: string;
    icon: React.ReactNode;
    top: string;
    side: 'left' | 'right';
    delay?: number;
    parallaxRange: [number, number];
    containerRef: React.RefObject<HTMLElement | null>;
    xOffset?: string;
}

const StatCard: React.FC<StatProps> = ({ value, label, icon, top, side, delay = 0, parallaxRange, containerRef, xOffset }) => {
    const { scrollYProgress } = useScroll({
        target: containerRef as React.RefObject<HTMLElement>,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], parallaxRange);

    // Disparition progressive en haut et en bas de section
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [0, 1, 1, 0]
    );

    return (
        <motion.div
            style={{
                top,
                left: xOffset || '-280px', // On utilise left directement pour plus de flexibilité
                y,
                opacity
            }}
            initial={{ scale: 0.9, filter: 'blur(10px)', x: -100 }}
            whileInView={{ scale: 1, filter: 'blur(0px)', x: 0 }}
            whileHover={{
                scale: 1.05,
                rotate: -2,
                transition: { duration: 0.2 }
            }}
            viewport={{ once: false }}
            transition={{
                type: "spring",
                stiffness: 50,
                damping: 15,
                delay: delay,
            }}
            className={`absolute z-20 hidden xl:flex items-center gap-4 p-4 rounded-2xl bg-white/10 dark:bg-bg-app/20 backdrop-blur-3xl backdrop-saturate-[180%] border border-white/40 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)] pointer-events-auto cursor-default select-none group min-w-[180px] overflow-hidden`}
        >
            <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                className="w-12 h-12 rounded-xl bg-solid flex items-center justify-center text-white shadow-lg shadow-solid/20 relative z-10 border border-white/20"
            >
                {icon}
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            </motion.div>
            <div className="relative z-10">
                <div className="text-2xl font-heading font-black text-text-high leading-none mb-1 group-hover:text-solid transition-colors duration-300">
                    {value}
                </div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-text-high/60 group-hover:text-text-high/80 transition-colors duration-300">
                    {label}
                </div>
            </div>

            {/* Glossy overlay & Shine effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent pointer-events-none opacity-40" />

            <motion.div
                initial={{ x: '-150%', skewX: -45 }}
                whileHover={{ x: '150%' }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent z-20"
            />

            {/* Background glow on hover */}
            <div className="absolute inset-0 bg-solid/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10" />

            {/* Inner border for "Liquid" feel */}
            <div className="absolute inset-[1px] rounded-[15px] border border-white/10 pointer-events-none z-30" />
        </motion.div>
    );
};

export const FloatingStats: React.FC<{ containerRef: React.RefObject<HTMLElement | null> }> = ({ containerRef }) => {
    const { t } = useTranslation();

    const stats = [
        {
            value: '5+',
            label: t('stats.projects'),
            icon: <Layout size={18} />,
            top: '12%',
            side: 'left' as const,
            xOffset: '-320px',
            parallaxRange: [0, -80] as [number, number],
            delay: 0.1
        },
        {
            value: '2+',
            label: t('stats.experience'),
            icon: <Briefcase size={18} />,
            top: '42%',
            side: 'left' as const,
            xOffset: '-190px', // Encore un peu plus à gauche
            parallaxRange: [0, -110] as [number, number],
            delay: 0.2
        },
        {
            value: '100%',
            label: t('stats.satisfaction'),
            icon: <Users size={18} />,
            top: '62%',
            side: 'left' as const,
            xOffset: '-350px',
            parallaxRange: [0, -60] as [number, number],
            delay: 0.3
        },
        {
            value: '4.9/5',
            label: t('stats.rating'),
            icon: <Star size={18} />,
            top: '92%',
            side: 'left' as const,
            xOffset: '-180px', // Légèrement décalé
            parallaxRange: [0, -90] as [number, number],
            delay: 0.4
        }
    ];

    return (
        <div className="absolute inset-0 pointer-events-none z-20">
            {stats.map((stat, index) => (
                <StatCard key={index} {...stat} containerRef={containerRef} />
            ))}
        </div>
    );
};
