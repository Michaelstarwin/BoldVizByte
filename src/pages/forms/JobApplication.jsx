import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ChevronRight, ChevronLeft, Upload } from 'lucide-react';
import ApplicationLayout from '../../components/layout/ApplicationLayout';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const jobRoles = [
    "Frontend Developer", "Backend Developer", "Full Stack Developer", "UI/UX Designer",
    "Digital Marketing Specialist", "Content Writer", "Business Development Executive"
];

const JobApplication = () => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        location: '',
        role: '',
        experienceLevel: 'Fresher',
        yearsOfExperience: '',
        portfolio: '',
        skills: '',
        whyJoin: ''
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
            <ApplicationLayout title="Application Received" subtitle="Good luck!">
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
                        We have received your application. Our HR team will review your profile and get back to you if your skills match our requirements.
                    </p>
                    <Link to="/careers" className="px-6 py-3 bg-neon-blue text-black rounded-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all font-bold font-orbitron text-sm">
                        BACK TO CAREERS
                    </Link>
                </div>
            </ApplicationLayout>
        );
    }

    return (
        <ApplicationLayout title="Apply for Job" subtitle="We hire people with passion, not just resumes.">
            <Helmet>
                <title>Apply for Job | BoldVizByte Connect</title>
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
                            <h3 className="text-xl font-bold text-white border-l-4 border-neon-blue pl-3">Personal Info</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-sm">Full Name <span className="text-red-500">*</span></label>
                                    <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-base outline-none focus:border-neon-blue transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-sm">Current Location</label>
                                    <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-base outline-none focus:border-neon-blue transition-colors" placeholder="City, State" />
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
                            <h3 className="text-xl font-bold text-white border-l-4 border-neon-purple pl-3">Job Details</h3>

                            <div className="space-y-2">
                                <label className="text-gray-400 text-sm">Job Role <span className="text-red-500">*</span></label>
                                <select name="role" value={formData.role} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-base outline-none focus:border-neon-blue transition-colors appearance-none cursor-pointer">
                                    <option value="">Select Role</option>
                                    {jobRoles.map(r => <option key={r} value={r} className="bg-dark-bg text-gray-300">{r}</option>)}
                                </select>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-sm">Experience Level</label>
                                    <select name="experienceLevel" value={formData.experienceLevel} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-neon-blue transition-colors appearance-none cursor-pointer">
                                        <option value="Fresher">Fresher</option>
                                        <option value="Experienced">Experienced</option>
                                    </select>
                                </div>
                                {formData.experienceLevel === 'Experienced' && (
                                    <div className="space-y-2">
                                        <label className="text-gray-400 text-sm">Years of Experience</label>
                                        <input type="text" name="yearsOfExperience" value={formData.yearsOfExperience} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-base outline-none focus:border-neon-blue transition-colors" placeholder="e.g. 2 Years" />
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-between pt-4">
                                <button type="button" onClick={handlePrev} className="text-gray-400 hover:text-white font-bold py-3 px-6 flex items-center">
                                    <ChevronLeft size={16} className="mr-2" /> Back
                                </button>
                                <button type="button" onClick={handleNext} disabled={!formData.role} className="bg-white disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors flex items-center">
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
                            <h3 className="text-xl font-bold text-white border-l-4 border-neon-pink pl-3">Professional Info</h3>

                            <div className="space-y-2">
                                <label className="text-gray-400 text-sm">Resume Upload (PDF) <span className="text-red-500">*</span></label>
                                <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-neon-blue transition-colors cursor-pointer group">
                                    <Upload className="mx-auto text-gray-500 group-hover:text-neon-blue mb-2 transition-colors" />
                                    <p className="text-gray-400 text-sm">Click to upload or drag & drop</p>
                                    <p className="text-gray-600 text-xs mt-1">PDF only (Max 5MB)</p>
                                    {/* Mock Input */}
                                    <input type="file" className="hidden" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-400 text-sm">Portfolio / LinkedIn URL</label>
                                <input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-base outline-none focus:border-neon-blue transition-colors" placeholder="https://" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-400 text-sm">Why do you want to join BoldVizByte? <span className="text-red-500">*</span></label>
                                <textarea required name="whyJoin" value={formData.whyJoin} onChange={handleChange} rows="3" className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-base outline-none focus:border-neon-blue transition-colors" placeholder="Tell us about yourself..." />
                            </div>

                            <div className="flex justify-between pt-8 border-t border-white/10">
                                <button type="button" onClick={handlePrev} className="text-gray-400 hover:text-white font-bold py-3 px-6 flex items-center">
                                    <ChevronLeft size={16} className="mr-2" /> Back
                                </button>
                                <button type="submit" disabled={isSubmitting} className="bg-neon-blue text-black font-bold font-orbitron tracking-wider py-4 px-10 rounded-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all flex items-center disabled:opacity-70">
                                    {isSubmitting ? 'SENDING...' : <>APPLY FOR JOB <Send size={18} className="ml-2" /></>}
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </form>
        </ApplicationLayout>
    );
};

export default JobApplication;
