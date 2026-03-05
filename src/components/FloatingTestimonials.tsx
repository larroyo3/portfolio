import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

interface TestimonialProps {
    name: string;
    role: string;
    company: string;
    content: string;
    top: string;
    side: 'left' | 'right';
    xOffset: string;
    delay?: number;
    parallaxRange: [number, number];
    containerRef: React.RefObject<HTMLElement | null>;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, company, content, top, side, xOffset, delay = 0, parallaxRange, containerRef }) => {
    const { scrollYProgress } = useScroll({
        target: containerRef as React.RefObject<HTMLElement>,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], parallaxRange);
    const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            style={{
                top,
                [side]: xOffset,
                y,
                opacity
            }}
            initial={{ scale: 0.9, filter: 'blur(10px)', zIndex: 20 }}
            whileInView={{ scale: 1, filter: 'blur(0px)', zIndex: 20 }}
            whileHover="hover"
            variants={{
                hover: { zIndex: 50 }
            }}
            viewport={{ once: true, margin: "0px" }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 20,
                mass: 1,
                delay: delay * 0.5,
            }}
            className="absolute z-20 hidden xl:flex flex-col p-5 rounded-2xl bg-white/10 dark:bg-bg-app/20 backdrop-blur-2xl backdrop-saturate-[180%] border border-white/40 dark:border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] pointer-events-auto cursor-default select-none group w-[340px] overflow-hidden"
        >
            <motion.div
                variants={{
                    hover: { scale: 1.02 }
                }}
                className="flex items-start gap-4"
            >
                <motion.div
                    variants={{
                        hover: {
                            scale: 1.2,
                            rotate: [0, -10, 10, 0],
                            transition: {
                                scale: { type: "spring", stiffness: 400, damping: 10 },
                                rotate: { duration: 0.5 }
                            }
                        }
                    }}
                    className="w-8 h-8 rounded-full bg-solid flex items-center justify-center text-white shrink-0 translate-y-1 relative z-10 border border-white/20 shadow-lg shadow-solid/20"
                >
                    <Quote size={14} fill="currentColor" />
                    <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                </motion.div>
                <div className="relative z-10 w-full">
                    <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={11} className="text-yellow-400 fill-yellow-400" />
                        ))}
                    </div>
                    <div className="relative overflow-hidden transition-all duration-700 ease-in-out max-h-[63px] group-hover:max-h-[500px] mb-3 [mask-image:linear-gradient(to_bottom,black_40px,transparent)] group-hover:[mask-image:none]">
                        <p className="text-[13px] text-text-high/90 italic leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-700 delay-700 group-hover:delay-0">
                            "{content}"
                        </p>
                    </div>
                    <div>
                        <div className="text-[13px] font-heading font-black text-text-high">
                            {name} <span className="text-solid mx-1">•</span> <span className="text-text-high/80">{company}</span>
                        </div>
                        {role && (
                            <div className="text-[9px] uppercase tracking-widest font-bold text-text-high/40 mt-1">
                                {role}
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>

            {/* Glossy overlay & Shine effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent pointer-events-none opacity-40" />

            <motion.div
                initial={{ x: '-150%', skewX: -45 }}
                whileHover={{ x: '150%' }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-20"
            />

            {/* Background glow on hover */}
            <div className="absolute inset-0 bg-solid/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10" />

            {/* Inner border for "Liquid" feel */}
            <div className="absolute inset-[1px] rounded-[15px] border border-white/10 pointer-events-none z-30" />
        </motion.div>
    );
};

export const FloatingTestimonials: React.FC<{ containerRef: React.RefObject<HTMLElement | null>, t: any }> = ({ containerRef, t }) => {
    const testimonials = [
        {
            name: t('testimonials.client1.name'),
            role: t('testimonials.client1.role'),
            company: t('testimonials.client1.company'),
            content: t('testimonials.client1.content'),
            top: '11%',
            side: 'left' as const,
            xOffset: '-400px',
            parallaxRange: [0, -120] as [number, number],
            delay: 0.1
        },
        {
            name: t('testimonials.client2.name'),
            role: t('testimonials.client2.role'),
            company: t('testimonials.client2.company'),
            content: t('testimonials.client2.content'),
            top: '27%',
            side: 'left' as const,
            xOffset: '-400px',
            parallaxRange: [0, -60] as [number, number],
            delay: 0.2
        },
        {
            name: t('testimonials.client3.name'),
            role: t('testimonials.client3.role'),
            company: t('testimonials.client3.company'),
            content: t('testimonials.client3.content'),
            top: '47%',
            side: 'left' as const,
            xOffset: '-400px',
            parallaxRange: [0, -90] as [number, number],
            delay: 0.3
        },
        {
            name: t('testimonials.client4.name'),
            role: t('testimonials.client4.role'),
            company: t('testimonials.client4.company'),
            content: t('testimonials.client4.content'),
            top: '68%',
            side: 'left' as const,
            xOffset: '-400px',
            parallaxRange: [0, -70] as [number, number],
            delay: 0.4
        },
        {
            name: t('testimonials.client5.name'),
            role: t('testimonials.client5.role'),
            company: t('testimonials.client5.company'),
            content: t('testimonials.client5.content'),
            top: '87%',
            side: 'left' as const,
            xOffset: '-400px',
            parallaxRange: [0, -80] as [number, number],
            delay: 0.5
        }
    ];

    return (
        <div className="absolute inset-x-0 inset-y-0 pointer-events-none z-20">
            {testimonials.map((testi, index) => (
                <TestimonialCard key={index} {...testi} containerRef={containerRef} />
            ))}
        </div>
    );
};

export const MobileTestimonials: React.FC<{ t: any }> = ({ t }) => {
    const testimonials = [
        {
            name: t('testimonials.client1.name'),
            role: t('testimonials.client1.role'),
            company: t('testimonials.client1.company'),
            content: t('testimonials.client1.content'),
        },
        {
            name: t('testimonials.client2.name'),
            role: t('testimonials.client2.role'),
            company: t('testimonials.client2.company'),
            content: t('testimonials.client2.content'),
        },
        {
            name: t('testimonials.client3.name'),
            role: t('testimonials.client3.role'),
            company: t('testimonials.client3.company'),
            content: t('testimonials.client3.content'),
        },
        {
            name: t('testimonials.client4.name'),
            role: t('testimonials.client4.role'),
            company: t('testimonials.client4.company'),
            content: t('testimonials.client4.content'),
        },
        {
            name: t('testimonials.client5.name'),
            role: t('testimonials.client5.role'),
            company: t('testimonials.client5.company'),
            content: t('testimonials.client5.content'),
        }
    ];

    return (
        <div className="flex overflow-x-auto gap-4 pb-8 mt-12 xl:hidden snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {testimonials.map((testi, index) => (
                <div key={index} className="flex-none w-[85vw] sm:w-[320px] snap-center p-5 rounded-2xl bg-white/5 dark:bg-bg-app/20 border border-white/10 shadow-lg flex flex-col gap-3 relative overflow-hidden">
                    <div className="flex items-start gap-4 z-10 relative">
                        <div className="w-10 h-10 rounded-full bg-solid/10 flex items-center justify-center text-solid shrink-0 mt-1 border border-solid/20 shadow-inner">
                            <Quote size={16} fill="currentColor" />
                        </div>
                        <div className="flex-1">
                            <div className="flex gap-1 mb-2 mt-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-[14px] text-text-high/90 italic leading-relaxed mb-4">
                                "{testi.content}"
                            </p>
                            <div>
                                <div className="text-[14px] font-heading font-black text-text-high">
                                    {testi.name} <span className="text-solid mx-1">•</span> <span className="text-text-high/80">{testi.company}</span>
                                </div>
                                {testi.role && (
                                    <div className="text-[10px] uppercase tracking-widest font-bold text-text-high/40 mt-1">
                                        {testi.role}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none opacity-40 mix-blend-overlay" />
                </div>
            ))}
        </div>
    );
};
