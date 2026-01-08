import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const LaunchPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Animate elements on mount
    const tl = gsap.timeline();

    tl.from('.launch-title', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .from('.launch-subtitle', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5')
    .from('.launch-button', {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, '-=0.3');

    // Add subtle floating animation to button
    gsap.to('.launch-button', {
      y: -5,
      duration: 2,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    });
  }, []);

  const handleLaunch = () => {
    // Add click animation
    gsap.to('.launch-button', {
      scale: 1.05,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        // Navigate to the home page
        navigate('/');
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center relative overflow-hidden">
      {/* Enhanced background overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="launch-title text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-violet-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent">
            LAUNCH
          </span>
        </h1>

        {/* Subtitle */}
        <p className="launch-subtitle text-xl md:text-2xl text-violet-200/80 mb-12 font-light leading-relaxed">
          Welcome to the Global Innovators Conclave 2026
        </p>

        {/* Launch Button */}
        <button
          onClick={handleLaunch}
          className="launch-button group relative inline-flex items-center justify-center px-16 py-8 text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:via-purple-500 hover:to-indigo-500 rounded-3xl shadow-2xl hover:shadow-violet-500/50 hover:shadow-purple-500/30 transition-all duration-500 transform hover:scale-110 border-2 border-violet-300/50 hover:border-violet-200/80 animate-pulse hover:animate-none z-20"
          style={{
            background: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #6366f1 100%)',
            boxShadow: '0 20px 40px rgba(139, 92, 246, 0.4), 0 10px 20px rgba(139, 92, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Enhanced glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

          {/* Inner glow */}
          <div className="absolute inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"></div>

          {/* Button content */}
          <span className="relative z-10 flex items-center gap-4 font-extrabold tracking-wide" role="button" aria-label="Launch Global Innovators Conclave Experience">
            <span className="text-3xl md:text-4xl animate-bounce" aria-hidden="true">🚀</span>
            <span className="drop-shadow-lg">Enter GIC 2026</span>
            <span className="text-3xl md:text-4xl animate-pulse" aria-hidden="true">✨</span>
          </span>

          {/* Animated border with multiple layers */}
          <div className="absolute inset-0 rounded-3xl border-2 border-violet-300/60 animate-pulse"></div>
          <div className="absolute inset-1 rounded-2xl border border-white/30"></div>

          {/* Sparkle effects */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-300 rounded-full animate-ping opacity-75"></div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-300 rounded-full animate-ping opacity-60 animation-delay-500"></div>
        </button>

        {/* Footer text */}
        <p className="mt-12 text-violet-300/60 text-sm">
          Experience the future of innovation
        </p>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-2 h-2 bg-violet-400/40 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-purple-400/40 rounded-full animate-bounce delay-100"></div>
        <div className="w-2 h-2 bg-indigo-400/40 rounded-full animate-bounce delay-200"></div>
      </div>
    </div>
  );
};

export default LaunchPage;
