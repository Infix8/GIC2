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
    // Enhanced click animation sequence
    const button = document.querySelector('.launch-button');
    const title = document.querySelector('.launch-title');
    const subtitle = document.querySelector('.launch-subtitle');

    // Create a timeline for the launch sequence
    const tl = gsap.timeline();

    // Phase 1: Button excitement animation
    tl.to('.launch-button', {
      scale: 1.1,
      duration: 0.2,
      ease: 'back.out(1.7)',
      boxShadow: '0 30px 60px rgba(139, 92, 246, 0.8), 0 20px 40px rgba(139, 92, 246, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
    })
    .to('.launch-button', {
      scale: 0.95,
      duration: 0.1,
      ease: 'power2.in',
    }, '-=0.1')
    .to('.launch-button', {
      scale: 1.05,
      duration: 0.3,
      ease: 'elastic.out(1, 0.3)',
      background: 'linear-gradient(135deg, #a855f7 0%, #c084fc 50%, #ddd6fe 100%)',
    });

    // Phase 2: Page elements fade and transform
    tl.to([title, subtitle], {
      opacity: 0,
      y: -30,
      scale: 0.9,
      duration: 0.8,
      ease: 'power3.inOut',
    }, '-=0.5');

    // Phase 3: Background transition
    tl.to('.launch-page-bg', {
      scale: 1.1,
      opacity: 0.8,
      duration: 1,
      ease: 'power2.inOut',
    }, '-=0.6');

    // Phase 4: Final button expansion and navigation
    tl.to('.launch-button', {
      scale: 2,
      opacity: 0.9,
      duration: 0.6,
      ease: 'power2.inOut',
      onComplete: () => {
        // Navigate to the home page after animation
        setTimeout(() => {
          navigate('/');
        }, 200);
      }
    }, '-=0.3');
  };

  return (
    <div className="launch-page-bg min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center relative overflow-hidden">
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
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
          className="launch-button group relative inline-flex items-center justify-center px-20 py-10 text-2xl md:text-3xl font-bold text-white rounded-full transition-all duration-700 transform hover:scale-105 border-0 z-30 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.9) 0%, rgba(168, 85, 247, 0.95) 30%, rgba(196, 181, 253, 0.9) 70%, rgba(139, 92, 246, 0.9) 100%)',
            boxShadow: '0 20px 40px rgba(139, 92, 246, 0.4), 0 10px 20px rgba(168, 85, 247, 0.3), inset 0 2px 0 rgba(255, 255, 255, 0.2), inset 0 -2px 0 rgba(0, 0, 0, 0.1)',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          {/* Elegant glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-300/40 via-purple-300/50 to-indigo-300/40 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-all duration-700"></div>

          {/* Subtle inner highlight */}
          <div className="absolute inset-2 bg-gradient-to-br from-white/15 via-transparent to-white/5 rounded-full"></div>

          {/* Sophisticated shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer"
               style={{
                 background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                 backgroundSize: '200% 100%',
                 animation: 'shimmer 2s infinite'
               }}></div>

          {/* Button content */}
          <span className="relative z-10 flex items-center font-bold tracking-wider text-white" role="button" aria-label="Enter Global Innovators Conclave 2026">
            <span className="text-xl md:text-2xl font-extrabold">GIC 2026</span>
          </span>

          {/* Elegant border ring */}
          <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-colors duration-700"></div>
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
