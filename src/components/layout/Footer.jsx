import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark-bg border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-orbitron font-bold text-white tracking-widest">
                            BOLD<span className="text-neon-blue">VIZ</span>BYTE
                        </h2>
                        <p className="text-gray-400 font-outfit leading-relaxed">
                            Merging creative technology with strategic digital marketing to build brands that defy gravity.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/boldvizbyte" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-neon-blue hover:text-black hover:border-transparent transition-all duration-300">
                                <Instagram size={18} />
                            </a>
                            <a href="https://www.linkedin.com/company/micheal-s-creative-tech/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-neon-blue hover:text-black hover:border-transparent transition-all duration-300">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://youtube.com/@jones-boldvizbyte" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-neon-blue hover:text-black hover:border-transparent transition-all duration-300">
                                <Youtube size={18} />
                            </a>
                            <a href="https://www.facebook.com/share/18kprRt7qy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-neon-blue hover:text-black hover:border-transparent transition-all duration-300">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-orbitron font-bold text-white mb-6">Explore</h3>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Services', 'Projects', 'Careers'].map((item) => (
                                <li key={item}>
                                    <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-neon-blue hover:translate-x-2 transition-all duration-300 inline-block">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-orbitron font-bold text-white mb-6">Services</h3>
                        <ul className="space-y-4">
                            {['Web Development', 'Digital Marketing', 'Agentic AI', 'Branding'].map((item) => (
                                <li key={item}>
                                    <Link to="/services" className="text-gray-400 hover:text-neon-blue hover:translate-x-2 transition-all duration-300 inline-block">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-orbitron font-bold text-white mb-6">Contact</h3>
                        <ul className="space-y-4 font-outfit">
                            <li className="flex items-start space-x-3 text-gray-400 group">
                                <MapPin className="mt-1 text-neon-blue group-hover:animate-bounce" size={18} />
                                <span>Kovilpatti, Tamil Nadu,<br />India</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400 hover:text-neon-blue transition-colors">
                                <Phone className="text-neon-blue" size={18} />
                                <a href="tel:+917708994392">+91 7708994392</a>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400 hover:text-neon-blue transition-colors">
                                <Mail className="text-neon-blue" size={18} />
                                <a href="mailto:founder.boldvizbyte@gmail.com">founder.boldvizbyte@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2025 BoldVizByte. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
