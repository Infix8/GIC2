import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { InteractiveHoverButton } from './ui/InteractiveHoverButton';
import { Input } from "@heroui/react";

const LoginForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        // Basic validation
        if (!formData.email || !formData.password) {
            setMessage({ type: 'error', text: 'Please fill in all fields' });
            setLoading(false);
            return;
        }

        try {
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulating API call
             // navigate('/dashboard'); // Mock navigation
             setMessage({ type: 'error', text: 'Backend functionality coming soon!' });
             navigate('/');
        } catch (error) {
            setMessage({ type: 'error', text: 'Login failed. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center relative overflow-hidden bg-[#0a0a0f]">
            {/* Decorative background elements - Dark Theme with purple accents */}
            <div className="absolute top-[10%] right-[10%] w-96 h-96 bg-[#8B7BB5]/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[10%] left-[10%] w-96 h-96 bg-[#6B5B95]/20 rounded-full blur-[120px] pointer-events-none" />
            
            {/* Animated curved lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="curve-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6B5B95" stopOpacity="0" />
                        <stop offset="50%" stopColor="#8B7BB5" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#A99BD4" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="curve-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#A99BD4" stopOpacity="0" />
                        <stop offset="50%" stopColor="#6B5B95" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#8B7BB5" stopOpacity="0" />
                    </linearGradient>
                </defs>
                
                {/* Flowing curve 1 */}
                <path
                    d="M-100,200 Q200,100 400,300 T800,200 T1200,350 T1600,200"
                    fill="none"
                    stroke="url(#curve-gradient-1)"
                    strokeWidth="1.5"
                    className="animate-pulse"
                    style={{ animation: 'flowCurve 8s ease-in-out infinite' }}
                />
                
                {/* Flowing curve 2 */}
                <path
                    d="M-100,400 Q300,300 500,500 T900,350 T1300,500 T1700,400"
                    fill="none"
                    stroke="url(#curve-gradient-2)"
                    strokeWidth="1"
                    style={{ animation: 'flowCurve 10s ease-in-out infinite reverse' }}
                />
                
                {/* Floating circle 1 */}
                <circle
                    cx="15%"
                    cy="30%"
                    r="80"
                    fill="none"
                    stroke="#8B7BB5"
                    strokeWidth="0.5"
                    strokeOpacity="0.3"
                    style={{ animation: 'floatOrb 6s ease-in-out infinite' }}
                />
                
                {/* Floating circle 2 */}
                <circle
                    cx="85%"
                    cy="70%"
                    r="120"
                    fill="none"
                    stroke="#6B5B95"
                    strokeWidth="0.5"
                    strokeOpacity="0.2"
                    style={{ animation: 'floatOrb 8s ease-in-out infinite reverse' }}
                />
            </svg>
            
            <style>{`
                @keyframes flowCurve {
                    0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
                    50% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
                }
                @keyframes floatOrb {
                    0%, 100% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(-30px) scale(1.05); }
                }
            `}</style>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="bg-[#0f0c19]/90 p-8 md:p-12 rounded-[2rem] backdrop-blur-xl border border-[#8B7BB5]/20 shadow-2xl shadow-[#8B7BB5]/10 relative overflow-hidden group">
                    
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-display font-bold text-[#EAEAEA] mb-2 tracking-tight">
                            Welcome Back
                        </h2>
                        <p className="text-[#EAEAEA]/60 text-sm">
                            Access your personalized dashboard
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Input
                            type="email"
                            label="Email"
                            name="email"
                            variant="bordered"
                            value={formData.email}
                            onChange={(e) => handleChange(e as any)}
                            required
                            classNames={{
                                inputWrapper: "border-[#8B7BB5]/30 hover:border-[#8B7BB5]/60 focus-within:!border-[#8B7BB5] bg-[#1a1528]/50",
                                label: "text-[#EAEAEA]/60",
                                input: "text-[#EAEAEA]",
                            }}
                        />

                        <Input
                            type="password"
                            label="Password"
                            name="password"
                            variant="bordered"
                            value={formData.password}
                            onChange={(e) => handleChange(e as any)}
                            required
                            classNames={{
                                inputWrapper: "border-[#8B7BB5]/30 hover:border-[#8B7BB5]/60 focus-within:!border-[#8B7BB5] bg-[#1a1528]/50",
                                label: "text-[#EAEAEA]/60",
                                input: "text-[#EAEAEA]",
                            }}
                        />

                        {/* Message */}
                        {message && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`p-4 rounded-xl text-sm border backdrop-blur-md ${
                                    message.type === 'success'
                                        ? 'bg-green-900/30 border-green-500/30 text-green-400'
                                        : 'bg-red-900/30 border-red-500/30 text-red-400'
                                }`}
                            >
                                {message.text}
                            </motion.div>
                        )}

                        {/* Submit Button */}
                        <div className="flex flex-col items-center pt-4 gap-6">
                            <InteractiveHoverButton 
                                type="submit"
                                disabled={loading}
                                text={loading ? "SIGNING IN..." : "SIGN IN"}
                                className="w-full border-[#8B7BB5]/30 hover:border-[#8B7BB5]/60 text-[#EAEAEA] hover:bg-[#8B7BB5]/10"
                            />
                            
                            <p className="text-[#EAEAEA]/40 text-sm">
                                Don't have an account?{' '}
                                <Link to="/register" className="text-[#8B7BB5] hover:text-[#A99BD4] transition-colors font-medium">
                                    Register here
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginForm;
