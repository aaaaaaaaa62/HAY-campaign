import { useEffect, useState } from 'react';
import { Headphones, Users, Shield, ArrowDown, Zap } from 'lucide-react';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 300) {
        setShowContent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoOpacity = Math.max(0, 1 - scrollY / 400);
  const logoScale = Math.max(0.5, 1 - scrollY / 800);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 via-teal-50 to-orange-50 overflow-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 right-1/4 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300"
          style={{
            opacity: logoOpacity,
            transform: `scale(${logoScale}) translateY(-${scrollY * 0.5}px)`,
          }}
        >
          <div className="mb-8">
            <img
              src="/HAY-LOGO-GIF.gif"
              alt="HAY! Logo"
              className="w-56 h-auto drop-shadow-2xl mix-blend-multiply"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-center mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
            HAY!
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 text-center mb-2 font-light tracking-wide">
            Hearing Awareness for Youth
          </p>
          <p className="text-lg md:text-xl text-gray-600 text-center font-medium">
            Let's Listen Safe
          </p>
        </div>

        <div
          className="absolute bottom-10 animate-bounce"
          style={{ opacity: logoOpacity, animationDuration: '2s' }}
        >
          <ArrowDown className="text-blue-600" size={36} />
        </div>
      </div>

      <div
        className={`transition-opacity duration-1000 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              A Student-Led <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">Movement</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Empowering young people to protect their hearing and prevent
              noise-induced hearing loss through education and awareness
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-blue-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                  <Zap className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  1.1B Young People
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  At risk of hearing damage from recreational noise exposure through concerts, gaming, and personal listening devices.
                </p>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-cyan-100">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
                  <Shield className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Prevention First
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Noise-Induced Hearing Loss is preventable but not reversible.
                  Safe habits now protect your hearing forever.
                </p>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-blue-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Youth-Powered
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Created by audiology students at UQ, bringing peer-to-peer education to high schools across Australia.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mb-20 overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-orange-400/10"></div>
            <div className="relative px-12 py-16 text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                What We Bring
              </h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-lg text-blue-50 font-medium">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>1-hour interactive workshop</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Engaging activities & games</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Hearing protection discounts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Fun giveaways & merch</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
                Our <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">Vision</span>
              </h2>
              <div className="space-y-6 text-gray-700">
                <div>
                  <p className="text-sm font-bold text-blue-600 mb-2 uppercase tracking-widest">LEGACY AT UQ</p>
                  <p className="leading-relaxed">
                    The HAY campaign will be passed down annually to second-year
                    audiology students, creating a lasting tradition of community
                    engagement and hearing health advocacy.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold text-cyan-600 mb-2 uppercase tracking-widest">LONG-TERM MISSION</p>
                  <p className="leading-relaxed">
                    Expand HAY into a national, student-led initiative across
                    Audiology programs in Australia, promoting safe listening and
                    preventing hearing loss on a broader scale.
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl opacity-50"></div>
              <div className="relative z-10">
                <p className="text-sm font-bold text-blue-600 mb-6 uppercase tracking-widest">Golden Rule</p>
                <div className="mb-6">
                  <div className="text-6xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                    60/60
                  </div>
                  <p className="text-xl text-gray-700 font-semibold">
                    Listen at 60% volume for max 60 minutes
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Give your ears regular breaks to prevent permanent hearing damage. This simple rule protects your hearing for life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
