import { Ear, Volume2, AlertTriangle, Heart, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 via-teal-50 to-orange-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">HAY!</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding Noise-Induced Hearing Loss and why awareness matters
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-12 mb-12 border border-gray-100">
          <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center">
            <span className="w-1.5 h-10 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full mr-4"></span>
            The Challenge
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Approximately <span className="font-bold text-blue-600">1.1 billion</span> adolescents and young adults are at risk of hearing damage due to exposure to loud sounds during recreational activities.
            </p>
            <p>
              The #MakingListeningSafe initiative, led by the World Health Organization (WHO), aims to prevent Noise-Induced Hearing Loss (NIHL), particularly among young people.
            </p>
            <p>
              Adolescents and young adults are frequently exposed to high noise levels through non-occupational and recreational activities such as gaming, concerts, personal listening devices (PLDs), playing musical instruments, clubs, music festivals, and sporting events.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-blue-100">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                <Ear className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What is NIHL?</h3>
              <p className="text-gray-600 leading-relaxed">
                Noise-Induced Hearing Loss is permanent hearing damage caused by prolonged exposure to high noise levels. It affects the inner ear (cochlea and hair cells) and cannot be reversed.
              </p>
            </div>
          </div>

          <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-cyan-100">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
                <Volume2 className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Sources</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center"><span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>Concerts and music festivals</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>Headphones and earbuds</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>Gaming with high volume</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>Clubs and bars</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>Construction sites</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>Fireworks and motorcycles</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-r from-orange-400 to-amber-400 rounded-3xl p-12 mb-12 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-orange-500/20 rounded-3xl"></div>
          <div className="relative z-10 flex items-start gap-6">
            <AlertTriangle className="text-white flex-shrink-0 mt-1" size={40} />
            <div>
              <h2 className="text-3xl font-black text-white mb-6">
                Why Youth Awareness is Critical
              </h2>
              <div className="space-y-4 text-white">
                <p className="leading-relaxed">
                  Young people today are increasingly exposed to high-volume sound through earbuds, gaming, concerts, and part-time jobs in noisy environments.
                </p>
                <p className="text-lg font-semibold border-l-4 border-white pl-4">
                  NIHL is preventable, but not reversible. Once hearing is damaged, it cannot be restored.
                </p>
                <p className="leading-relaxed">
                  Exposure to high noise levels has been linked to academic difficulties and behavioral issues in youth, which can negatively impact employability, lifestyle choices, and long-term well-being.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-8 text-center">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-blue-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
                  <Heart className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Promote Healthy Habits</h3>
                <p className="text-gray-600">
                  Equip students with practical strategies for hearing conservation and promote healthy listening habits.
                </p>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-cyan-100">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 text-center">
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/30">
                  <Volume2 className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Educate on NIHL</h3>
                <p className="text-gray-600">
                  Teach youth about the causes and consequences of Noise-Induced Hearing Loss with science-backed content.
                </p>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-blue-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 text-center">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
                  <AlertTriangle className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Raise Awareness</h3>
                <p className="text-gray-600">
                  Highlight increasing NIHL risks due to lifestyle factors like prolonged headphone use and loud environments.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <h2 className="text-4xl font-black text-gray-900 mb-10 text-center">
            Workshop Content
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4 group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-4 flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all">
                <Heart className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Introduction to NIHL
                </h3>
                <p className="text-gray-600">
                  Understanding causes and the importance of awareness among youth
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full p-4 flex-shrink-0 shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all">
                <AlertTriangle className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Facts and Consequences
                </h3>
                <p className="text-gray-600">
                  Real numbers and the impact of hearing loss on daily life
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-4 flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all">
                <Ear className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  NIHL Simulation
                </h3>
                <p className="text-gray-600">
                  Experience how hearing loss affects daily communication
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full p-4 flex-shrink-0 shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all">
                <Shield className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Prevention & Habits
                </h3>
                <p className="text-gray-600">
                  Learn the 60/60 rule and develop healthy listening practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
