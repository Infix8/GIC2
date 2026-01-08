import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const LaunchPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);

    // Add a loading animation before navigation
    setTimeout(() => {
      navigate('/');
    }, 3000); // 3 second loading animation
  };

  return (
    <div className="launch-page-bg min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center relative overflow-hidden">
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Loading Animation Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center z-50">
          {/* SMEC-style loading animation */}
          <div className="text-center">
            {/* Animated logo or text */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-pulse">
                SMEC
              </h2>
              <div className="flex justify-center space-x-2">
                <div className="w-3 h-3 bg-violet-400 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>

            {/* Loading text */}
            <p className="text-violet-200 text-lg animate-pulse">
              Launching Global Innovators Conclave 2026...
            </p>

            {/* Progress bar */}
            <div className="mt-8 w-64 mx-auto">
              <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-violet-400 to-purple-400 h-full rounded-full animate-pulse"
                     style={{
                       animation: 'loading-bar 3s ease-in-out',
                       width: '100%'
                     }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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
          <span className="bg-gradient-to-r from-gray-200 via-gray-100 to-white bg-clip-text text-transparent drop-shadow-lg">
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
          disabled={isLoading}
          className="bg-violet-600 hover:bg-violet-700 disabled:bg-violet-800 disabled:cursor-not-allowed text-white font-bold text-xl md:text-2xl px-12 py-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg border-0"
          style={{
            backgroundColor: isLoading ? '#5b21b6' : '#7c3aed',
            borderRadius: '8px'
          }}
          onMouseEnter={(e) => {
            if (!isLoading) {
              e.currentTarget.style.backgroundColor = '#6d28d9';
            }
          }}
          onMouseLeave={(e) => {
            if (!isLoading) {
              e.currentTarget.style.backgroundColor = '#7c3aed';
            }
          }}
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Loading...</span>
            </div>
          ) : (
            'GIC 2026'
          )}
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
