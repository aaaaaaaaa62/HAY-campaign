import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    school: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`HAY Workshop Inquiry from ${formData.school}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `School: ${formData.school}\n\n` +
      `Message:\n${formData.message}`
    );

    window.location.href = `mailto:hey.campaign.au@gmail.com?subject=${subject}&body=${body}`;

    setFormData({ name: '', email: '', school: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 via-teal-50 to-orange-50 pt-20 relative overflow-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6">
            Get in <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Interested in bringing the HAY workshop to your school? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-3 flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-lg">Location</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The University of Queensland<br />
                      Brisbane, Queensland, Australia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full p-3 flex-shrink-0 shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-lg">Email</h3>
                    <a href="mailto:hey.campaign.au@gmail.com" className="text-gray-600 leading-relaxed hover:text-blue-600 transition-colors">
                      hey.campaign.au@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full p-3 flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-lg">Phone</h3>
                    <p className="text-gray-600 leading-relaxed">Available upon request</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 rounded-3xl p-8 overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-orange-400/10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-6">What's Included</h3>
                <ul className="space-y-4 text-blue-50">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 text-blue-100 mt-0.5" />
                    <span className="leading-relaxed">1-hour interactive workshop</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 text-blue-100 mt-0.5" />
                    <span className="leading-relaxed">Suitable for Years 10-12 students</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 text-blue-100 mt-0.5" />
                    <span className="leading-relaxed">Engaging activities and demonstrations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 text-blue-100 mt-0.5" />
                    <span className="leading-relaxed">Free educational materials</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 text-blue-100 mt-0.5" />
                    <span className="leading-relaxed">Discounts on hearing protection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 text-blue-100 mt-0.5" />
                    <span className="leading-relaxed">Fun giveaways for students</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Book a Workshop
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-widest"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-widest"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                  placeholder="john.smith@school.edu.au"
                />
              </div>

              <div>
                <label
                  htmlFor="school"
                  className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-widest"
                >
                  School Name
                </label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                  placeholder="Brisbane State High School"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-widest"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all resize-none"
                  placeholder="Tell us about your school and when you'd like to schedule a workshop..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <h2 className="text-4xl font-black text-gray-900 mb-6 text-center">
            Target Audience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed font-light">
            Our primary audience is high school students in Years 10-12. This transitional phase is ideal for preventive education as students begin to experience greater independence and move into university, vocational training, or the workforce.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            While this age group may engage in riskier behaviors, including unsafe listening practices, they are mature enough to understand the long-term consequences of their actions, making it the perfect time for behavioral intervention and lasting change.
          </p>
        </div>
      </div>
    </div>
  );
}
