import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { InteractiveHoverButton } from './ui/InteractiveHoverButton';
import { Input, Select, SelectItem, RadioGroup, Radio } from "@heroui/react";

interface FormData {
    fullName: string;
    phoneNumber: string;
    email: string;
    password: string;
    confirmPassword: string;
    gender: string;
    dateOfBirth: string;
    country: string;
    state: string;
    pincode: string;
    profession: 'student' | 'professional' | '';
    collegeName: string;
    companyName: string;
}

const RegisterForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        dateOfBirth: '',
        country: '',
        state: '',
        pincode: '',
        profession: '',
        collegeName: '',
        companyName: '',
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    // State options based on country
    const statesByCountry: Record<string, string[]> = {
        India: ['Andhra Pradesh', 'Karnataka', 'Maharashtra', 'Tamil Nadu', 'Telangana', 'Delhi', 'Gujarat', 'Kerala', 'West Bengal', 'Uttar Pradesh'],
        USA: ['California', 'Texas', 'New York', 'Florida', 'Illinois', 'Pennsylvania', 'Ohio', 'Georgia', 'North Carolina', 'Michigan'],
        UK: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | { target: { name: string; value: string } }) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
            // Clear state when country changes
            ...(name === 'country' ? { state: '' } : {}),
            // Clear conditional fields when profession changes
            ...(name === 'profession' && value === 'student' ? { companyName: '' } : {}),
            ...(name === 'profession' && value === 'professional' ? { collegeName: '' } : {}),
        }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [name]: value,
             // Clear state when country changes
             ...(name === 'country' ? { state: '' } : {}),
        }));
    }


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        // Validate password match
        if (formData.password !== formData.confirmPassword) {
            setMessage({ type: 'error', text: 'Passwords do not match!' });
            setLoading(false);
            return;
        }

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            // Navigate to verification page with email
            navigate('/verify-email', { state: { email: formData.email } });
        } catch (error) {
            setMessage({ type: 'error', text: 'Registration failed. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    const inputStyles = {
        inputWrapper: "border-[#8B7BB5]/30 hover:border-[#8B7BB5]/60 focus-within:!border-[#8B7BB5] bg-[#1a1528]/50",
        label: "text-[#EAEAEA]/60",
        input: "text-[#EAEAEA]",
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center relative overflow-hidden bg-[#0a0a0f]">
             {/* Decorative background elements - Dark Theme with purple accents */}
             <div className="absolute top-[10%] right-[10%] w-96 h-96 bg-[#8B7BB5]/20 rounded-full blur-[120px] pointer-events-none" />
             <div className="absolute bottom-[10%] left-[10%] w-96 h-96 bg-[#6B5B95]/20 rounded-full blur-[120px] pointer-events-none" />
             <div className="absolute top-[50%] left-[50%] w-64 h-64 bg-[#A99BD4]/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
             
             {/* Animated curved mesh background */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="reg-curve-1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6B5B95" stopOpacity="0" />
                        <stop offset="50%" stopColor="#8B7BB5" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#A99BD4" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="reg-curve-2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#A99BD4" stopOpacity="0" />
                        <stop offset="50%" stopColor="#6B5B95" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#8B7BB5" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="reg-curve-3" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8B7BB5" stopOpacity="0" />
                        <stop offset="50%" stopColor="#A99BD4" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#6B5B95" stopOpacity="0" />
                    </linearGradient>
                </defs>
                
                {/* Top flowing curve */}
                <path
                    d="M-100,150 Q250,50 500,200 T1000,100 T1500,250 T2000,150"
                    fill="none"
                    stroke="url(#reg-curve-1)"
                    strokeWidth="1.5"
                    style={{ animation: 'regFlowCurve 12s ease-in-out infinite' }}
                />
                
                {/* Middle flowing curve */}
                <path
                    d="M-100,450 Q200,350 450,500 T850,400 T1250,550 T1650,450"
                    fill="none"
                    stroke="url(#reg-curve-2)"
                    strokeWidth="1"
                    style={{ animation: 'regFlowCurve 15s ease-in-out infinite reverse' }}
                />
                
                {/* Bottom flowing curve */}
                <path
                    d="M-100,750 Q350,650 600,800 T1100,700 T1600,850 T2100,750"
                    fill="none"
                    stroke="url(#reg-curve-3)"
                    strokeWidth="1"
                    style={{ animation: 'regFlowCurve 10s ease-in-out infinite' }}
                />
                
                {/* Decorative arc top-right */}
                <path
                    d="M1200,0 Q1400,200 1200,400"
                    fill="none"
                    stroke="#8B7BB5"
                    strokeWidth="0.5"
                    strokeOpacity="0.2"
                    style={{ animation: 'regPulseArc 6s ease-in-out infinite' }}
                />
                
                {/* Decorative arc bottom-left */}
                <path
                    d="M0,600 Q200,800 0,1000"
                    fill="none"
                    stroke="#6B5B95"
                    strokeWidth="0.5"
                    strokeOpacity="0.15"
                    style={{ animation: 'regPulseArc 8s ease-in-out infinite reverse' }}
                />
                
                {/* Floating ring 1 */}
                <ellipse
                    cx="10%"
                    cy="25%"
                    rx="100"
                    ry="60"
                    fill="none"
                    stroke="#8B7BB5"
                    strokeWidth="0.5"
                    strokeOpacity="0.2"
                    style={{ animation: 'regFloatRing 7s ease-in-out infinite' }}
                />
                
                {/* Floating ring 2 */}
                <ellipse
                    cx="90%"
                    cy="75%"
                    rx="80"
                    ry="120"
                    fill="none"
                    stroke="#A99BD4"
                    strokeWidth="0.5"
                    strokeOpacity="0.15"
                    style={{ animation: 'regFloatRing 9s ease-in-out infinite reverse' }}
                />
            </svg>
            
            <style>{`
                @keyframes regFlowCurve {
                    0%, 100% { transform: translateY(0) translateX(0); opacity: 0.25; }
                    25% { transform: translateY(-15px) translateX(5px); opacity: 0.35; }
                    50% { transform: translateY(-25px) translateX(15px); opacity: 0.4; }
                    75% { transform: translateY(-10px) translateX(8px); opacity: 0.3; }
                }
                @keyframes regPulseArc {
                    0%, 100% { transform: scale(1); opacity: 0.2; }
                    50% { transform: scale(1.1); opacity: 0.35; }
                }
                @keyframes regFloatRing {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
            `}</style>

            <div className="w-full max-w-3xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-[#EAEAEA] mb-3 tracking-tight">
                        Join the Conclave
                    </h1>
                    <p className="text-[#EAEAEA]/60 text-base md:text-lg tracking-wide">
                        Be part of the global innovation journey
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <form 
                        onSubmit={handleSubmit}
                        className="bg-[#0f0c19]/90 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-xl border border-[#8B7BB5]/20 shadow-2xl shadow-[#8B7BB5]/10 relative overflow-hidden"
                    >
                        <div className="space-y-8">
                            {/* Personal Details Section */}
                            <div className="space-y-6">
                                <h3 className="text-[#8B7BB5] text-sm font-semibold uppercase tracking-widest border-b border-[#8B7BB5]/20 pb-2">Personal Details</h3>
                                
                                <Input
                                    label="Full Name"
                                    name="fullName"
                                    variant="bordered"
                                    value={formData.fullName}
                                    onChange={(e) => handleChange(e as any)}
                                    required
                                    classNames={inputStyles}
                                />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input
                                        type="tel"
                                        label="Phone Number"
                                        name="phoneNumber"
                                        variant="bordered"
                                        value={formData.phoneNumber}
                                        onChange={(e) => handleChange(e as any)}
                                        required
                                        classNames={inputStyles}
                                    />
                                    <Input
                                        type="email"
                                        label="Email"
                                        name="email"
                                        variant="bordered"
                                        value={formData.email}
                                        onChange={(e) => handleChange(e as any)}
                                        required
                                        classNames={inputStyles}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Select 
                                        label="Gender" 
                                        variant="bordered" 
                                        selectedKeys={formData.gender ? [formData.gender] : []}
                                        onSelectionChange={(keys) => handleSelectChange('gender', Array.from(keys)[0] as string)}
                                        classNames={{
                                            trigger: "border-[#8B7BB5]/30 hover:border-[#8B7BB5]/60 bg-[#1a1528]/50",
                                            value: "text-[#EAEAEA]",
                                            label: "text-[#EAEAEA]/60",
                                            listbox: "bg-[#1a1528]",
                                            popoverContent: "bg-[#1a1528] border-[#8B7BB5]/30"
                                        }}
                                    >
                                        <SelectItem key="male">Male</SelectItem>
                                        <SelectItem key="female">Female</SelectItem>
                                        <SelectItem key="other">Other</SelectItem>
                                    </Select>

                                    <Input
                                        type="date"
                                        label="Date of Birth"
                                        name="dateOfBirth"
                                        variant="bordered"
                                        placeholder=" "
                                        value={formData.dateOfBirth}
                                        onChange={(e) => handleChange(e as any)}
                                        required
                                        classNames={inputStyles}
                                    />
                                </div>
                            </div>

                            {/* Location Section */}
                            <div className="space-y-6">
                                <h3 className="text-[#8B7BB5] text-sm font-semibold uppercase tracking-widest border-b border-[#8B7BB5]/20 pb-2">Location</h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <Select
                                        label="Country"
                                        variant="bordered"
                                        selectedKeys={formData.country ? [formData.country] : []}
                                        onSelectionChange={(keys) => handleSelectChange('country', Array.from(keys)[0] as string)}
                                        classNames={{
                                            trigger: "border-[#8B7BB5]/30 hover:border-[#8B7BB5]/60 bg-[#1a1528]/50",
                                            value: "text-[#EAEAEA]",
                                            label: "text-[#EAEAEA]/60",
                                            listbox: "bg-[#1a1528]",
                                            popoverContent: "bg-[#1a1528] border-[#8B7BB5]/30"
                                        }}
                                    >
                                        <SelectItem key="India">India</SelectItem>
                                        <SelectItem key="USA">USA</SelectItem>
                                        <SelectItem key="UK">UK</SelectItem>
                                    </Select>

                                    <Select
                                        label="State"
                                        variant="bordered"
                                        selectedKeys={formData.state ? [formData.state] : []}
                                        onSelectionChange={(keys) => handleSelectChange('state', Array.from(keys)[0] as string)}
                                        isDisabled={!formData.country}
                                        classNames={{
                                            trigger: "border-[#8B7BB5]/30 hover:border-[#8B7BB5]/60 bg-[#1a1528]/50",
                                            value: "text-[#EAEAEA]",
                                            label: "text-[#EAEAEA]/60",
                                            listbox: "bg-[#1a1528]",
                                            popoverContent: "bg-[#1a1528] border-[#8B7BB5]/30"
                                        }}
                                    >
                                        {(formData.country && statesByCountry[formData.country]) ? 
                                            statesByCountry[formData.country].map((state) => (
                                                <SelectItem key={state}>{state}</SelectItem>
                                            )) : []
                                        }
                                    </Select>

                                    <Input
                                        label="Pincode"
                                        name="pincode"
                                        variant="bordered"
                                        value={formData.pincode}
                                        onChange={(e) => handleChange(e as any)}
                                        required
                                        classNames={inputStyles}
                                    />
                                </div>
                            </div>

                            {/* Professional Details Section */}
                            <div className="space-y-6">
                                <h3 className="text-[#8B7BB5] text-sm font-semibold uppercase tracking-widest border-b border-[#8B7BB5]/20 pb-2">Professional Details</h3>
                                
                                <div className="space-y-4">
                                    <label className="block text-[#EAEAEA]/60 text-xs uppercase tracking-widest font-medium ml-1">
                                        Profession <span className="text-[#8B7BB5]">*</span>
                                    </label>
                                    <RadioGroup
                                        orientation="horizontal"
                                        value={formData.profession}
                                        onValueChange={(val) => setFormData(prev => ({ ...prev, profession: val as any }))}
                                        classNames={{ wrapper: "gap-6" }}
                                    >
                                        <Radio value="student" classNames={{ label: "text-[#EAEAEA]", control: "border-[#8B7BB5]/50" }}>Student</Radio>
                                        <Radio value="professional" classNames={{ label: "text-[#EAEAEA]", control: "border-[#8B7BB5]/50" }}>Professional</Radio>
                                    </RadioGroup>
                                </div>

                                {formData.profession === 'student' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="space-y-2"
                                    >
                                        <Input
                                            label="College Name"
                                            name="collegeName"
                                            variant="bordered"
                                            value={formData.collegeName}
                                            onChange={(e) => handleChange(e as any)}
                                            required={formData.profession === 'student'}
                                            classNames={inputStyles}
                                        />
                                    </motion.div>
                                )}

                                {formData.profession === 'professional' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="space-y-2"
                                    >
                                         <Input
                                            label="Company Name"
                                            name="companyName"
                                            variant="bordered"
                                            value={formData.companyName}
                                            onChange={(e) => handleChange(e as any)}
                                            required={formData.profession === 'professional'}
                                            classNames={inputStyles}
                                        />
                                    </motion.div>
                                )}
                            </div>

                            {/* Security Section */}
                            <div className="space-y-6">
                                <h3 className="text-[#8B7BB5] text-sm font-semibold uppercase tracking-widest border-b border-[#8B7BB5]/20 pb-2">Security</h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input
                                        type="password"
                                        label="Password"
                                        name="password"
                                        variant="bordered"
                                        value={formData.password}
                                        onChange={(e) => handleChange(e as any)}
                                        required
                                        classNames={inputStyles}
                                    />
                                    <Input
                                        type="password"
                                        label="Confirm Password"
                                        name="confirmPassword"
                                        variant="bordered"
                                        value={formData.confirmPassword}
                                        onChange={(e) => handleChange(e as any)}
                                        required
                                        classNames={inputStyles}
                                    />
                                </div>
                            </div>

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
                            <div className="flex flex-col items-center pt-6 gap-6">
                                <InteractiveHoverButton 
                                    type="submit"
                                    disabled={loading}
                                    text={loading ? "REGISTERING..." : "CREATE ACCOUNT"}
                                    className="w-56 border-[#8B7BB5]/30 hover:border-[#8B7BB5]/60 text-[#EAEAEA] hover:bg-[#8B7BB5]/10"
                                />
                                
                                <p className="text-[#EAEAEA]/40 text-sm">
                                    Already have an account?{' '}
                                    <Link to="/login" className="text-[#8B7BB5] hover:text-[#A99BD4] transition-colors font-medium">
                                        Login here
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default RegisterForm;
