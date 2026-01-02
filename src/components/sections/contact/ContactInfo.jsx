import { Mail, Phone, MapPin, Clock, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
    { name: "Instagram", url: "#", color: "hover:text-pink-500" },
    { name: "LinkedIn", url: "#", color: "hover:text-blue-500" },
    { name: "YouTube", url: "#", color: "hover:text-red-500" },
    { name: "Facebook", url: "#", color: "hover:text-blue-600" }
];

const ContactInfo = () => {
    return (
        <div className="space-y-8">

            {/* Quick Actions Card */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
                <h3 className="text-2xl font-orbitron font-bold text-white mb-6">Contact Info</h3>
                <div className="space-y-6 font-outfit">

                    {/* Address */}
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-lg bg-dark-bg border border-white/10 text-neon-blue"><MapPin size={24} /></div>
                        <div>
                            <p className="text-gray-400 text-sm mb-1">HQ Location</p>
                            <p className="text-white text-lg font-bold">Kovilpatti, Tamil Nadu</p>
                            <p className="text-xs text-gray-500 mt-1">Serving clients across India 🇮🇳</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-dark-bg border border-white/10 text-neon-blue"><Phone size={24} /></div>
                        <div>
                            <p className="text-gray-400 text-sm mb-1">Phone / WhatsApp</p>
                            <a href="tel:+917708994392" className="text-white text-lg font-bold hover:text-neon-blue transition-colors block">+91 7708994392</a>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-dark-bg border border-white/10 text-neon-blue"><Mail size={24} /></div>
                        <div>
                            <p className="text-gray-400 text-sm mb-1">Email Us</p>
                            <a href="mailto:founder.boldvizbyte@gmail.com" className="text-white text-lg font-bold hover:text-neon-blue transition-colors block break-all">founder.boldvizbyte@gmail.com</a>
                        </div>
                    </div>

                </div>

                {/* Quick Action Buttons */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <a href="tel:+917708994392" className="py-3 rounded-xl bg-neon-blue text-black font-bold font-orbitron text-center hover:bg-white transition-colors">
                        📞 Call Now
                    </a>
                    <a href="https://wa.me/917708994392" target="_blank" rel="noreferrer" className="py-3 rounded-xl bg-green-500 text-white font-bold font-orbitron text-center hover:bg-green-400 transition-colors">
                        💬 WhatsApp
                    </a>
                </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
                <div className="flex items-center gap-3 mb-4 text-white">
                    <Clock className="text-neon-green" />
                    <h3 className="text-xl font-orbitron font-bold">Business Hours</h3>
                </div>
                <ul className="space-y-2 text-gray-400 font-outfit text-sm">
                    <li className="flex justify-between"><span>Mon – Sat:</span> <span className="text-white">10:00 AM – 7:00 PM</span></li>
                    <li className="flex justify-between"><span>Sunday:</span> <span className="text-red-400">Closed</span></li>
                </ul>
                <div className="mt-4 pt-4 border-t border-white/10 text-xs text-neon-green flex items-center gap-2">
                    <AlertCircle size={14} /> Only urgent calls on Sundays.
                </div>
            </motion.div>

            {/* Socials */}
            <div className="flex justify-center gap-6">
                {socialLinks.map((social, index) => (
                    <a key={index} href={social.url} className={`text-gray-400 transition-colors ${social.color} font-outfit font-bold`}>
                        {social.name}
                    </a>
                ))}
            </div>

        </div>
    );
};

export default ContactInfo;
