import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Linkedin, Github, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState, useCallback } from 'react';

// ─── Magnetic Particle ───────────────────────────────────────────────────────
interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    speedX: number;
    speedY: number;
    color: string;
}

const PARTICLE_COLORS = [
    'rgba(229, 72, 77, 0.9)',
    'rgba(229, 72, 77, 0.75)',
    'rgba(255, 130, 135, 0.85)',
    'rgba(255, 100, 105, 0.7)',
];

const ParticleCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: -9999, y: -9999 });
    const animFrameRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Init particles
        const count = 110;
        particlesRef.current = Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 4 + 1.5,
            opacity: Math.random() * 0.3 + 0.7,
            speedX: (Math.random() - 0.5) * 0.4,
            speedY: (Math.random() - 0.5) * 0.4,
            color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
        }));

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;
            const MAGNET_RADIUS = 160;
            const MAGNET_FORCE = 0.06;

            particlesRef.current.forEach((p) => {
                // Magnetic attraction
                const dx = mx - p.x;
                const dy = my - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < MAGNET_RADIUS && mx > 0) {
                    const force = (MAGNET_RADIUS - dist) / MAGNET_RADIUS;
                    p.speedX += dx * force * MAGNET_FORCE;
                    p.speedY += dy * force * MAGNET_FORCE;
                }

                // Damping
                p.speedX *= 0.96;
                p.speedY *= 0.96;

                p.x += p.speedX;
                p.y += p.speedY;

                // Wrap around
                if (p.x < -10) p.x = canvas.width + 10;
                if (p.x > canvas.width + 10) p.x = -10;
                if (p.y < -10) p.y = canvas.height + 10;
                if (p.y > canvas.height + 10) p.y = -10;

                // Draw particle
                ctx.save();
                ctx.globalAlpha = p.opacity;
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();

                // Draw connections between close particles
                particlesRef.current.forEach((p2) => {
                    const ddx = p.x - p2.x;
                    const ddy = p.y - p2.y;
                    const d = Math.sqrt(ddx * ddx + ddy * ddy);
                    if (d < 120 && d > 0) {
                        ctx.save();
                        ctx.globalAlpha = ((120 - d) / 120) * 0.45;
                        ctx.strokeStyle = 'rgba(229, 72, 77, 0.9)';
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                        ctx.restore();
                    }
                });
            });

            animFrameRef.current = requestAnimationFrame(draw);
        };

        draw();

        const handleMouse = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        };
        const handleLeave = () => {
            mouseRef.current = { x: -9999, y: -9999 };
        };
        canvas.addEventListener('mousemove', handleMouse);
        canvas.addEventListener('mouseleave', handleLeave);
        // Also listen on window for global mouse position
        window.addEventListener('mousemove', handleMouse);

        return () => {
            cancelAnimationFrame(animFrameRef.current);
            window.removeEventListener('resize', resize);
            canvas.removeEventListener('mousemove', handleMouse);
            canvas.removeEventListener('mouseleave', handleLeave);
            window.removeEventListener('mousemove', handleMouse);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
        />
    );
};

// ─── Clip-path Letter Reveal ─────────────────────────────────────────────────
interface RevealTextProps {
    text: string;
    className?: string;
    delay?: number;
}

const RevealText: React.FC<RevealTextProps> = ({ text, className = '', delay = 0 }) => {
    return (
        <span className={`inline-block overflow-hidden ${className}`} style={{ verticalAlign: 'bottom' }}>
            <motion.span
                className="inline-block"
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                    duration: 0.75,
                    delay,
                    ease: [0.16, 1, 0.3, 1],
                }}
            >
                {text}
            </motion.span>
        </span>
    );
};

// ─── Word-by-word reveal for h1 ──────────────────────────────────────────────
interface RevealPhraseProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

const RevealPhrase: React.FC<RevealPhraseProps> = ({ children, delay = 0, className = '' }) => (
    <motion.div
        initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className={className}
    >
        {children}
    </motion.div>
);

// ─── Gradient Orb that follows the cursor ────────────────────────────────────
const CursorGradient: React.FC = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

    const bgX = useTransform(springX, (v) => `${v}px`);
    const bgY = useTransform(springY, (v) => `${v}px`);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handler);
        return () => window.removeEventListener('mousemove', handler);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-0"
            style={{
                background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(229,72,77,0.08), transparent 60%)',
                '--x': bgX,
                '--y': bgY,
            } as React.CSSProperties}
        />
    );
};

// ─── Main Hero ───────────────────────────────────────────────────────────────
export const Hero: React.FC = () => {
    const { t } = useTranslation();
    const sectionRef = useRef<HTMLElement>(null);

    // Parallax for hero content on scroll
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const onScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <CursorGradient />
            <section
                ref={sectionRef}
                className="relative min-h-screen flex items-center pt-20 overflow-hidden"
            >
                {/* Particle canvas – full section */}
                <ParticleCanvas />

                {/* Subtle grid background */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(229,72,77,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(229,72,77,0.04) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                        zIndex: 0,
                    }}
                />

                {/* Ambient blobs */}
                <motion.div
                    className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(229,72,77,0.12) 0%, transparent 70%)',
                        zIndex: 0,
                    }}
                    animate={{ scale: [1, 1.08, 1], rotate: [0, 10, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute -bottom-48 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(229,72,77,0.08) 0%, transparent 70%)',
                        zIndex: 0,
                    }}
                    animate={{ scale: [1, 1.12, 1], rotate: [0, -10, 0] }}
                    transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                />

                {/* Content */}
                <div
                    className="container-custom relative"
                    style={{ zIndex: 1, transform: `translateY(${scrollY * 0.08}px)` }}
                >
                    {/* Social links sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="hidden lg:flex flex-col items-center gap-6 absolute -left-12 top-1/2 -translate-y-1/2 -mt-8"
                    >
                        {[
                            { href: 'https://www.linkedin.com/in/lucas-arroyo/', Icon: Linkedin },
                            { href: 'https://github.com/larroyo3', Icon: Github },
                            { href: 'https://www.instagram.com/acyll_studios/', Icon: Instagram },
                        ].map(({ href, Icon }, i) => (
                            <motion.a
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-high/40 hover:text-solid transition-colors p-2"
                                whileHover={{ scale: 1.3, color: '#E5484D' }}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.3 + i * 0.1 }}
                            >
                                <Icon size={20} />
                            </motion.a>
                        ))}
                        <div className="w-px h-12 bg-border-subtle mt-2" />
                    </motion.div>

                    {/* Main text block */}
                    <div className="max-w-3xl">
                        {/* Badge / Role */}
                        <RevealPhrase delay={0.1} className="flex items-center gap-3 mb-6">
                            <motion.span
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="h-px w-12 bg-solid origin-left"
                            />
                            <span className="text-sm font-medium text-solid tracking-wider uppercase">
                                {t('hero.role')}
                            </span>
                        </RevealPhrase>

                        {/* H1 — clip-path word reveal */}
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                            <span className="block overflow-hidden">
                                <motion.span
                                    className="block"
                                    initial={{ y: '110%' }}
                                    animate={{ y: '0%' }}
                                    transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    {t('hero.title')}
                                    <span className="text-solid">{t('hero.titleAccent')}</span>
                                    {t('hero.titleEnd')}
                                    <span className="text-solid">.</span>
                                </motion.span>
                            </span>
                        </h1>

                        {/* Description */}
                        <RevealPhrase delay={0.55} className="mb-10">
                            <p className="text-lg md:text-xl text-text-high/80 max-w-2xl leading-relaxed">
                                {t('hero.description')}
                                <span className="font-bold text-solid">Lucas Arroyo</span>.
                                {t('hero.descriptionEnd')}
                            </p>
                        </RevealPhrase>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <motion.a
                                href="#projects"
                                className="btn-primary flex items-center justify-center gap-2 group relative overflow-hidden"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                {/* Shimmer */}
                                <motion.span
                                    className="absolute inset-0 -skew-x-12 bg-white/20"
                                    initial={{ x: '-120%' }}
                                    whileHover={{ x: '220%' }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                />
                                {t('hero.ctaProjects')}
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform relative z-10" />
                            </motion.a>

                            <motion.a
                                href="#contact"
                                className="btn-secondary flex items-center justify-center gap-2 group"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                {t('hero.ctaContact')}
                                <ArrowRight
                                    size={18}
                                    className="rotate-[-45deg] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                />
                            </motion.a>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-high/30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                >
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <motion.div
                        className="w-px h-10 bg-gradient-to-b from-text-high/30 to-transparent"
                        animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ transformOrigin: 'top' }}
                    />
                </motion.div>
            </section>
        </>
    );
};
