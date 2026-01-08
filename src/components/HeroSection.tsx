import { useState, useEffect, useRef } from "react";
import { ArrowRight, Calendar, MapPin, Users, Trophy, Lightbulb, Rocket, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import gicLogo from "../assets/gic-logo.jpeg";

const slides = [
  {
    highlight: "Knowledge Hub",
    title: "Explore cutting-edge insights from industry leaders",
    stat: "500+",
    statLabel: "Expert Mentors",
    icon: Lightbulb,
  },
  {
    highlight: "Alpha to Infinite",
    title: "Transform your student innovation into reality",
    stat: "10,000+",
    statLabel: "Participants",
    icon: Users,
  },
  {
    highlight: "Investors Boot Camp",
    title: "Secure funding opportunities for your startup",
    stat: "₹10Cr",
    statLabel: "Investment Pool",
    icon: Trophy,
  },
  {
    highlight: "BusiTech Expo",
    title: "Showcase your innovations to the world",
    stat: "100+",
    statLabel: "Startups",
    icon: Rocket,
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Check if desktop view
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const slide = slides[currentSlide];
  const SlideIcon = slide.icon;

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[95vh] flex items-center overflow-hidden bg-gradient-to-br from-gic-dark via-gic-dark via-primary/5 to-primary/3"
    >
      {/* Animated gradient orbs - dimmed violet */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/4 -right-1/4 w-[900px] h-[900px] bg-gradient-to-br from-primary/15 via-gic-violet/12 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
        />
        <motion.div
          className="absolute -bottom-1/4 -left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-primary/12 via-gic-violet/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.08, 1],
            x: [0, -20, 0],
            y: [0, 25, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
        />
        {/* Additional violet accent orb - dimmed */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-gradient-to-br from-primary/8 via-gic-violet/6 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            x: [0, 15, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>

      {/* Grid pattern - 5% visible */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base grid - 5% visible */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#8B7BB5 1px, transparent 1px), linear-gradient(90deg, #8B7BB5 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>


      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 w-full">
            {/* Event Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 via-gic-violet/10 to-primary/10 backdrop-blur-md rounded-full px-5 py-2.5 border border-gic-violet/30 shadow-lg shadow-primary/15"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-gic-lavender font-semibold text-sm">27-28 February 2026</span>
              </div>
              <div className="w-px h-4 bg-gic-violet/40" />
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gic-violet" />
                <span className="text-gic-lavender font-semibold text-sm">Hyderabad, India</span>
              </div>
            </motion.div>

              {/* Event Name - Cursive/Italic Style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="mb-8 sm:mb-10 md:mb-12 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 group pb-4 sm:pb-6"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white flex-shrink-0 transition-colors duration-300 group-hover:text-gic-lavender" />
                </motion.div>
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                    fontStyle: 'normal',
                    letterSpacing: '0.01em',
                    lineHeight: '1.2',
                    fontWeight: 'bold',
                  }}
                >
                  {['Global', 'Innovators', 'Conclave', '2026'].map((word, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ 
                        scale: 1.1,
                      }}
                      transition={{ 
                        duration: 0.3, 
                        ease: [0.4, 0, 0.2, 1] 
                      }}
                      className="inline-block text-white hover:text-gic-lavender cursor-pointer event-word-glow py-1 px-2 rounded transition-all duration-300"
                      style={{
                        transformOrigin: 'center',
                        display: 'inline-block',
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </h2>
              </motion.div>

            {/* Main Title */}
            <div className="space-y-4 w-full overflow-hidden">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                  className="w-full"
                >
                  <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05] tracking-tight w-full"
                    style={{
                      fontStyle: 'normal',
                      fontFamily: '"Times New Roman", Times, serif',
                      fontWeight: 'bold',
                    }}
                  >
                    <span
                      className="bg-gradient-to-r from-gic-lavender via-gic-violet via-primary to-gic-lavender bg-clip-text text-transparent animate-gradient block overflow-wrap-anywhere"
                      style={{
                        textShadow: '0 0 20px rgba(139, 123, 181, 0.3), 0 0 40px rgba(169, 155, 212, 0.2), 0 0 60px rgba(139, 123, 181, 0.1)',
                        filter: 'drop-shadow(0 0 8px rgba(169, 155, 212, 0.25))',
                        fontStyle: 'normal',
                        wordBreak: 'break-word',
                        overflowWrap: 'anywhere',
                      }}
                    >
                      {slide.highlight}
                    </span>
                  </h1>
                  <p className="text-gic-lavender/80 text-base sm:text-lg lg:text-xl mt-4 leading-relaxed max-w-xs sm:max-w-md lg:max-w-xl xl:max-w-2xl w-full overflow-wrap-anywhere"
                    style={{
                      fontStyle: 'normal',
                      fontFamily: '"Times New Roman", Times, serif',
                      fontWeight: 400,
                      wordBreak: 'break-word',
                      overflowWrap: 'anywhere',
                    }}
                  >
                    {slide.title}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Stats Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`stat-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="grid grid-cols-3 gap-6"
              >
                <div className="space-y-1">
                  <p className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gic-lavender to-primary bg-clip-text text-transparent">{slide.stat}</p>
                  <p className="text-gic-violet/70 text-sm">{slide.statLabel}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gic-lavender to-primary bg-clip-text text-transparent">2</p>
                  <p className="text-gic-violet/70 text-sm">Days Event</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gic-lavender to-primary bg-clip-text text-transparent">₹5L+</p>
                  <p className="text-gic-violet/70 text-sm">Prize Pool</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link to="/register">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="bg-gradient-to-r from-primary via-gic-violet to-primary hover:from-gic-violet hover:via-primary hover:to-gic-violet text-white rounded-full px-8 h-14 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all">
                    Register Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/events">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-semibold border-2 border-gic-violet/50 text-gic-lavender hover:bg-gic-violet/20 hover:border-gic-violet hover:shadow-lg hover:shadow-primary/40 transition-all">
                    <Play className="w-4 h-4 mr-2" />
                    Explore Programs
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Carousel Dots */}
            <div className="flex gap-2 pt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === currentSlide
                      ? "w-10 bg-gradient-to-r from-gic-lavender via-gic-violet to-primary"
                      : "w-2 bg-gic-violet/30 hover:bg-gic-lavender/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative hidden lg:flex items-center justify-center translate-y-[15%]">
            <div className="relative w-full max-w-lg">
              {/* Main Logo Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10"
              >
                {/* Glowing ring - dimmed violet */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-gic-violet to-primary opacity-30 blur-2xl scale-105"
                  animate={{ opacity: [0.25, 0.4, 0.25], scale: [1.05, 1.1, 1.05] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                {/* Logo with subtle violet border */}
                <div className="relative bg-gic-dark rounded-full p-4 shadow-lg border border-gic-violet/30 shadow-primary/15">
                  <img 
                    src={gicLogo} 
                    alt="GIC 2026" 
                    className="w-80 h-80 rounded-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="absolute -top-4 -right-8 bg-gradient-to-br from-primary/8 via-gic-violet/8 to-primary/8 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-gic-violet/25 z-20 shadow-primary/10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-gic-violet to-gic-lavender flex items-center justify-center">
                    <SlideIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gic-violet/70 font-medium">Featured</p>
                    <p className="font-display font-bold text-gic-lavender">{slide.highlight}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="absolute -bottom-4 -left-8 bg-gradient-to-br from-primary/12 to-gic-violet/12 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-gic-violet/25 z-20 shadow-primary/10"
              >
                <div className="space-y-1">
                  <p className="text-3xl font-bold bg-gradient-to-r from-gic-lavender via-gic-violet to-primary bg-clip-text text-transparent">₹10Cr</p>
                  <p className="text-sm text-gic-lavender/90">Investment Opportunity</p>
                  <p className="text-xs text-gic-violet/70">for selected startups</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="absolute top-1/2 -right-16 -translate-y-1/2 bg-gradient-to-br from-primary/10 via-gic-violet/10 to-primary/10 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-gic-violet/25 z-20 shadow-primary/10"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-7 h-7 rounded-full bg-gradient-to-br from-primary via-gic-violet to-gic-lavender border-2 border-gic-violet/30"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.9 + i * 0.1 }}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gic-lavender">10K+ Joined</span>
                </div>
              </motion.div>

              {/* Decorative elements - dimmed violet */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border-2 border-dashed border-gic-violet/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-primary/15" />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-gic-violet/12"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

