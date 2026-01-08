import { useEffect } from 'react';
import gsap from 'gsap';

const LaunchPage = () => {
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
        // Redirect to the main website
        window.location.href = 'http://www.globalinnovatorsconclave.in';
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="launch-title text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
          <span className="bg-gradient-to-r from-violet-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent">
            GIC 2026
          </span>
        </h1>

        {/* Subtitle */}
        <p className="launch-subtitle text-lg md:text-xl text-violet-200/70 mb-16 font-light leading-relaxed max-w-md text-center">
          Global Innovators Conclave
        </p>

        {/* Launch Button */}
        <button
          onClick={handleLaunch}
          className="launch-button group relative inline-flex items-center justify-center px-16 py-8 text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:via-purple-500 hover:to-indigo-500 rounded-full shadow-2xl hover:shadow-violet-500/30 transition-all duration-500 transform hover:scale-105 border-0"
          style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.95) 0%, rgba(168, 85, 247, 0.97) 50%, rgba(139, 92, 246, 0.95) 100%)',
            boxShadow: '0 20px 40px rgba(139, 92, 246, 0.5), 0 10px 20px rgba(168, 85, 247, 0.3), inset 0 2px 0 rgba(255, 255, 255, 0.2)',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-400/30 via-purple-400/40 to-indigo-400/30 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

          {/* Button content */}
          <span className="relative z-10 flex items-center font-extrabold tracking-wide" role="button" aria-label="Launch GIC 2026">
            <span className="text-2xl md:text-3xl">Launch</span>
          </span>

          {/* Elegant border ring */}
          <div className="absolute inset-0 rounded-full border border-white/30 group-hover:border-white/50 transition-colors duration-500"></div>
        </button>

        {/* Footer text */}
        <p className="mt-12 text-violet-300/50 text-sm font-light tracking-wide">
          Global Innovation Starts Here
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
