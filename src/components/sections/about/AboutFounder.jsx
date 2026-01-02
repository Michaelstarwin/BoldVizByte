import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const AboutFounder = () => {
    return (
        <section className="py-20 bg-dark-bg border-b border-white/5 relative">
            <div className="container mx-auto px-6 max-w-6xl text-center">
                {/* Vision Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-gradient-to-br from-white/5 to-transparent p-10 md:p-14 rounded-3xl border border-white/10 mb-16"
                >
                    <Quote className="absolute top-8 left-8 text-neon-blue opacity-20 transform -scale-x-100" size={60} />

                    <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-8 relative z-10">
                        "BoldVizByte was built to help businesses <br className="hidden md:block" />
                        <span className="text-neon-blue">not just survive online, but dominate digitally.</span>"
                    </h2>

                    <p className="text-gray-300 font-outfit text-lg leading-relaxed italic relative z-10 max-w-3xl mx-auto">
                        We believe that technology without purpose is noise. Our goal is to cut through that noise and deliver clear, measurable growth for every client we work with.
                    </p>

                    <Quote className="absolute bottom-8 right-8 text-neon-blue opacity-20" size={60} />
                </motion.div>

                {/* Leadership Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                    {/* Founder */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-neon-blue/30 transition-all group"
                    >
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 bg-gray-700 rounded-full mb-6 overflow-hidden border-2 border-neon-blue shadow-[0_0_20px_rgba(0,243,255,0.2)] group-hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-shadow">
                                {/* Placeholder for Founder Image */}
                                <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800" />
                            </div>
                            <h3 className="text-2xl font-orbitron font-bold text-white mb-1">Founder Name</h3>
                            <p className="text-sm text-neon-blue font-outfit uppercase tracking-widest font-bold mb-6">Founder & CEO – Vision & Technology</p>

                            <p className="text-gray-400 font-outfit leading-relaxed text-sm mb-6">
                                The Founder & CEO of BoldVizByte leads the company with a clear vision and strong technical direction. Focused on innovation, quality, and long-term growth, the Founder drives the team to build scalable, high-performance digital solutions that help businesses grow with confidence.
                            </p>

                            <ul className="text-left w-full space-y-3 bg-black/20 p-5 rounded-xl border border-white/5">
                                <li className="flex items-start gap-3 text-sm text-gray-300 font-outfit">
                                    <span className="text-neon-blue mt-1">▹</span> Defining company vision and direction
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-300 font-outfit">
                                    <span className="text-neon-blue mt-1">▹</span> Leading technology and innovation
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-300 font-outfit">
                                    <span className="text-neon-blue mt-1">▹</span> Guiding product and solution strategy
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-300 font-outfit">
                                    <span className="text-neon-blue mt-1">▹</span> Ensuring quality, performance, and growth
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Co-Founder */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-neon-purple/30 transition-all group"
                    >
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 bg-gray-700 rounded-full mb-6 overflow-hidden border-2 border-neon-purple shadow-[0_0_20px_rgba(168,85,247,0.2)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-shadow">
                                {/* Placeholder for Co-Founder Image */}
                                <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800" />
                            </div>
                            <h3 className="text-2xl font-orbitron font-bold text-white mb-1">Co-Founder Name</h3>
                            <p className="text-sm text-neon-purple font-outfit uppercase tracking-widest font-bold mb-6">Strategy & Operations</p>

                            <p className="text-gray-400 font-outfit leading-relaxed text-sm mb-6">
                                Shaping the company’s vision and ensuring smooth execution. Focused on planning, coordination, and growth to deliver reliable value for clients.
                            </p>

                            <ul className="text-left w-full space-y-3 bg-black/20 p-5 rounded-xl border border-white/5">
                                <li className="flex items-start gap-3 text-sm text-gray-300 font-outfit">
                                    <span className="text-neon-purple mt-1">▹</span> Strategic planning & decision-making
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-300 font-outfit">
                                    <span className="text-neon-purple mt-1">▹</span> Overseeing day-to-day operations
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-300 font-outfit">
                                    <span className="text-neon-purple mt-1">▹</span> Driving consistent growth
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutFounder;
