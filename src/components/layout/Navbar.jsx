import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, LogOut } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useAuth } from '../../context/AuthContext';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const location = useLocation();
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menus on route change
    useEffect(() => {
        setIsOpen(false);
        setUserMenuOpen(false);
    }, [location]);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn(
                "fixed w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-dark-bg/80 backdrop-blur-lg border-white/10 py-3"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="relative z-50 group">
                    <h1 className="text-2xl md:text-3xl font-orbitron font-bold text-white tracking-widest">
                        BOLD<span className="text-neon-blue">VIZ</span>BYTE
                    </h1>
                    <motion.div
                        className="h-0.5 bg-neon-blue w-0 group-hover:w-full transition-all duration-300"
                    />
                </Link>

                {/* Desktop Links - Centered */}
                <div className="hidden md:flex space-x-8 items-center absolute left-1/2 transform -translate-x-1/2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={cn(
                                "font-outfit text-sm font-medium tracking-wide transition-colors duration-300 relative group overflow-hidden",
                                location.pathname === link.path ? "text-neon-blue" : "text-gray-300 hover:text-white"
                            )}
                        >
                            <span className="relative z-10">{link.name}</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* Right Side Actions */}
                <div className="hidden md:flex items-center space-x-4">
                    {user ? (
                        <div className="relative">
                            <button
                                onClick={() => setUserMenuOpen(!userMenuOpen)}
                                className="flex items-center gap-2 text-white hover:text-neon-blue transition-colors font-orbitron text-sm"
                            >
                                <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue border border-neon-blue">
                                    <User size={16} />
                                </div>
                                <span>{user.name.split(' ')[0]}</span>
                            </button>

                            <AnimatePresence>
                                {userMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute right-0 mt-2 w-48 bg-dark-bg border border-white/10 rounded-xl shadow-xl overflow-hidden"
                                    >
                                        <div className="px-4 py-3 border-b border-white/10">
                                            <p className="text-white text-sm font-bold truncate">{user.name}</p>
                                            <p className="text-gray-500 text-xs truncate">{user.email}</p>
                                        </div>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2 text-red-400 hover:bg-white/5 flex items-center gap-2 text-sm transition-colors"
                                        >
                                            <LogOut size={16} /> Logout
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="px-5 py-2 text-white font-orbitron text-xs font-bold tracking-wider hover:text-neon-blue transition-all duration-300"
                        >
                            LOGIN
                        </Link>
                    )}

                    <Link
                        to="/apply-service"
                        className="px-6 py-2 border border-neon-blue text-neon-blue font-orbitron text-xs font-bold tracking-wider hover:bg-neon-blue hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,243,255,0.2)] hover:shadow-[0_0_20px_rgba(0,243,255,0.6)] flex items-center justify-center"
                    >
                        GET STARTED
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden z-50 flex items-center gap-4">
                    {user && (
                        <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue border border-neon-blue">
                            <span className="font-bold text-xs">{user.name[0]}</span>
                        </div>
                    )}
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-neon-blue transition-colors p-2">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "tween", duration: 0.4 }}
                        className="fixed inset-0 bg-dark-bg/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center h-screen w-screen md:hidden"
                    >
                        <div className="flex flex-col space-y-8 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="font-orbitron text-3xl text-white hover:text-neon-blue transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            {user ? (
                                <button onClick={handleLogout} className="font-orbitron text-xl text-red-500 hover:text-red-400 transition-colors">
                                    Logout
                                </button>
                            ) : (
                                <Link to="/login" className="font-orbitron text-xl text-white hover:text-neon-blue transition-colors">
                                    Login
                                </Link>
                            )}

                            <Link to="/apply-service" className="mt-8">
                                <button className="px-8 py-3 bg-neon-blue text-black font-orbitron font-bold tracking-wider rounded-lg shadow-[0_0_20px_rgba(0,243,255,0.4)] active:scale-95 transition-transform">
                                    GET STARTED
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
