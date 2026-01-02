import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import ApplicationLayout from '../../components/layout/ApplicationLayout';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const services = [
    "Logo Design", "Business Cards", "Agentic AI", "Web Design & Development",
    "Meta & Google Ads", "Posts & Banners", "Brochures", "Posters", "Book Covers"
];

const budgets = ["Please Select", "Low (Starter)", "Medium (Standard)", "High (Premium)", "Custom"];
const timelines = ["Urgent", "1-2 Weeks", "1 Month+", "Flexible"];

const ServiceApplication = () => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        company: '',
        location: '',
        service: '',
        description: '',
        budget: '',
        timeline: ''
    });

    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            setFormData(prev => ({
                ...prev,
                fullName: user.name || '',
                email: user.email || '',
                mobile: user.mobile || ''
            }));
        }
    }, [user]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => setStep(step + 1);
    const handlePrev = () => setStep(step - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 2000);
    };

    if (isSuccess) {
        return (
            <ApplicationLayout title="Request Received" subtitle="We're reviewing your requirements.">
                <div className="text-center py-12">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-24 h-24 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-6 text-neon-green"
                    >
                        <CheckCircle2 size={48} />
                    </motion.div>
                    <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Application Submitted!</h3>
                    <p className="text-gray-300 font-outfit mb-8 max-w-md mx-auto">
                        Thank you for connecting with BoldVizByte. Our expert team will review your request and contact you within 24 hours.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/" className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-bold font-orbitron text-sm">
                            GO BACK HOME
                        </Link>
                        <Link to="/services" className="px-6 py-3 bg-neon-blue text-black rounded-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all font-bold font-orbitron text-sm">
                            EXPLORE SERVICES
                        </Link>
                    </div>
                </div>
            </ApplicationLayout>
        );
    }

    return (
        <ApplicationLayout title="Apply for Service" subtitle="Tell us about your project. Serious inquiries only.">
            <Helmet>
                <title>Apply for Service | BoldVizByte Connect</title>
            </Helmet>

            {/* Progress Bar */}
            <div className="flex h-1 mb-8 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / 3) * 100}%` }}
                    className="h-full bg-neon-blue"
                />
            </div>

            <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <h3 className="text-xl font-bold text-white border-l-4 border-neon-blue pl-3">Basic Details</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-sm">Full Name <span className="text-red-500">*</span></label>
                                    <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-base outline-none focus:border-neon-blue transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-sm">Company Name</label>
                                    <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-base outline-none focus:border-neon-blue transition-colors" placeholder="Your Business" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-sm">Email Address <span className="text-red-500">*</span></label>
                                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-base outline-none focus:border-neon-blue transition-colors" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-sm">Mobile Number <span className="text-red-500">*</span></label>
                                    <input required type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-base outline-none focus:border-neon-blue transition-colors" placeholder="+91 9876543210" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-400 text-sm">Location</label>
                                <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-base outline-none focus:border-neon-blue transition-colors" placeholder="City, State" />
                            </div>

                            <div className="flex justify-end pt-4">
                                <button type="button" onClick={handleNext} className="bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors flex items-center">
                                    Next Step <ChevronRight size={16} className="ml-2" />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <h3 className="text-xl font-bold text-white border-l-4 border-neon-purple pl-3">Service Selection</h3>

                            <div className="space-y-2">
                                <label className="text-gray-400 text-sm">Select Service <span className="text-red-500">*</span></label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {services.map(s => (
                                        <label key={s} className={`p-4 border rounded-xl cursor-pointer transition-all ${formData.service === s ? 'border-neon-purple bg-neon-purple/10 text-white' : 'border-white/10 bg-dark-bg/30 text-gray-400 hover:bg-white/5'}`}>
                                            <input type="radio" name="service" value={s} checked={formData.service === s} onChange={handleChange} className="hidden" />
                                            <span className="font-outfit font-medium">{s}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-between pt-4">
                                <button type="button" onClick={handlePrev} className="text-gray-400 hover:text-white font-bold py-3 px-6 flex items-center">
                                    <ChevronLeft size={16} className="mr-2" /> Back
                                </button>
                                <button type="button" onClick={handleNext} disabled={!formData.service} className="bg-white disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors flex items-center">
                                    Next Step <ChevronRight size={16} className="ml-2" />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <h3 className="text-xl font-bold text-white border-l-4 border-neon-pink pl-3">Project Details</h3>

                            <div className="space-y-2">
                                <label className="text-gray-400 text-sm">Project Description <span className="text-red-500">*</span></label>
                                <textarea required name="description" value={formData.description} onChange={handleChange} rows="4" className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-base outline-none focus:border-neon-blue transition-colors" placeholder="Briefly describe your requirements..." />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-sm">Budget Range</label>
                                    <select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-base outline-none focus:border-neon-blue transition-colors appearance-none cursor-pointer">
                                        {budgets.map(b => <option key={b} value={b} className="bg-dark-bg text-gray-300">{b}</option>)}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-sm">Timeline</label>
                                    <select name="timeline" value={formData.timeline} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-base outline-none focus:border-neon-blue transition-colors appearance-none cursor-pointer">
                                        {timelines.map(t => <option key={t} value={t} className="bg-dark-bg text-gray-300">{t}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-between pt-8 border-t border-white/10">
                                <button type="button" onClick={handlePrev} className="text-gray-400 hover:text-white font-bold py-3 px-6 flex items-center">
                                    <ChevronLeft size={16} className="mr-2" /> Back
                                </button>
                                <button type="submit" disabled={isSubmitting} className="bg-neon-blue text-black font-bold font-orbitron tracking-wider py-4 px-10 rounded-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all flex items-center disabled:opacity-70">
                                    {isSubmitting ? 'SUBMITTING...' : <>REQUEST CONSULTATION <Send size={18} className="ml-2" /></>}
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </form>
        </ApplicationLayout>
    );
};

export default ServiceApplication;
