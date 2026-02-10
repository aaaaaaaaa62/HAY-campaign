import { useState, useEffect} from 'react';
import { Users, Megaphone, Calendar, GraduationCap, BarChart, Handshake, Code, ChevronDown, ChevronUp } from 'lucide-react';

export default function TeamPage() {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);

  useEffect(() => {     // ← NEW LINES 6-9
    document.title = "Team | HAY Campaign";
  }, []);
  const teamMembers = [
    {
      name: 'Jas Uthayaseelan',
      role: 'Founder and Campaign Lead',
      icon: Users,
      color: 'blue',
      image: '/Screenshot_2026-02-03_at_11.57.26.png',
      responsibilities: [
        'Oversees all aspects of the campaign: vision, planning, partnerships',
        'Liaises with UQ, WHO, and community stakeholders',
        'Sets deadlines and ensures timely execution',
        'Provides final approval on resources, visuals, and outreach plans',
        'Supports and guides the entire team',
      ],
    },
    {
      name: 'Anoushka Sharma',
      role: 'Deputy Campaign Lead',
      icon: Users,
      color: 'cyan',
      image: '/PHOTO-2026-02-02-09-23-09.jpg',
      responsibilities: [
        'Co-leads the campaign, assisting with strategic direction and team coordination',
        'Takes the lead when the Campaign Lead is unavailable',
        'Manages internal communication and helps ensure tasks are being completed',
        'Supports all teams (creative, events, education, etc.) as needed',
        'Co-presents during workshops or campaign events',
        'Helps shape the vision of the campaign and ensures continuity',
      ],
    },
    {
      role: 'Creative & Social Media Leads',
      icon: Megaphone,
      color: 'orange',
      isMultiple: true,
      people: [
        { name: 'Meghana', image: '/Meghana.jpeg' },
        { name: 'Erin', image: '/Erin.png' },
      ],
      responsibilities: [
        'Designs campaign materials (posters, social media content, presentations)',
        "Manages campaign's online presence (Instagram, TikTok, etc.)",
        'Edits and posts workshop photos or videos',
        'Maintains consistent visual branding and tone',
        'Coordinates with photographer/videographer if available',
      ],
    },
    {
      name: 'Aaliya Ismail',
      role: 'Design & Technical Lead',
      icon: Code,
      color: 'teal',
      image: '/76361f30-f5d3-4f58-add5-53aa428f1bdd.jpg',
      responsibilities: [
        'Designs and develops technical solutions for the campaign',
        'Manages website and digital infrastructure',
        'Creates interactive tools and resources',
        'Ensures technical accessibility and user experience',
        'Collaborates with creative team on digital implementations',
      ],
    },
    {
      name: 'Events & School Liaison',
      role: 'Events Coordinator',
      icon: Calendar,
      color: 'cyan',
      responsibilities: [
        'Contacts and coordinates with schools for workshop bookings',
        'Schedules events, confirms logistics (room bookings, transport, equipment)',
        'Maintains calendar of all campaign activities',
        'Acts as main point of contact for external schools',
        'Helps set up and pack down workshop spaces',
      ],
    },
    {
      name: 'Hardy',
      role: 'Education & Workshop Coordinator',
      icon: GraduationCap,
      color: 'blue',
      image: '/WhatsApp_Image_2026-02-02_at_10.19.56.jpeg',
      responsibilities: [
        'Designs engaging educational content for school workshops (slides, activities)',
        'Aligns material with WHO goals and noise-induced hearing loss prevention',
        'Facilitates or co-facilitates sessions in high schools',
        'Prepares handouts or activity sheets',
        'Ensures learning outcomes are clear and age-appropriate',
      ],
    },
    {
      name: 'Edric',
      role: 'Evaluation & Data Officer',
      icon: BarChart,
      color: 'teal',
      image: '/WhatsApp_Image_2026-02-01_at_21.11.47.jpeg',
      responsibilities: [
        'Designs pre- and post-workshop surveys to measure knowledge change',
        'Tracks student engagement and feedback',
        'Collects and analyzes data to report campaign impact',
        'Prepares summary reports to assist with future funding or campaign growth',
        'Supports continuous improvement based on data insights',
      ],
    },
    {
      name: 'Amanda',
      role: 'Sponsorship & Partnerships Officer',
      icon: Handshake,
      color: 'orange',
      responsibilities: [
        'Reach out to hearing-related organizations, companies, and local groups for support',
        'Secure merchandise, giveaways, and funding',
        'Help manage sponsorship letters and relationships',
        'Build partnerships to expand campaign reach',
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { gradient: string; bg: string }> = {
      blue: {
        gradient: 'from-blue-500 to-cyan-500',
        bg: 'from-blue-50 to-cyan-50',
      },
      cyan: {
        gradient: 'from-cyan-500 to-teal-500',
        bg: 'from-cyan-50 to-teal-50',
      },
      teal: {
        gradient: 'from-teal-500 to-emerald-500',
        bg: 'from-teal-50 to-emerald-50',
      },
      orange: {
        gradient: 'from-orange-400 to-amber-500',
        bg: 'from-orange-50 to-amber-50',
      },
    };
    return colorMap[color] || colorMap.blue;
  };

  const getImageUrl = (name: string, image?: string) => {
    if (image) {
      return image;
    }
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=300&background=random&color=fff&bold=true&format=svg`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 via-teal-50 to-orange-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate audiology students leading the HAY campaign to protect youth hearing health across Australia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            const colors = getColorClasses(member.color);
            const isExpanded = expandedMember === index;
            const isMultiple = member.isMultiple;

            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border-2 border-transparent hover:border-opacity-20 ${
                  isExpanded ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
                style={{
                  borderImage: isExpanded ? 'none' : undefined,
                }}
                onClick={() => setExpandedMember(isExpanded ? null : index)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                <div className="relative z-10 p-6">
                  {!isExpanded ? (
                    <div className="flex flex-col items-center text-center">
                      {isMultiple ? (
                        <div className="relative mb-4 flex justify-center gap-2">
                          {member.people?.map((person, idx) => (
                            <div key={idx} className="relative">
                              <img
                                src={getImageUrl(person.name, person.image)}
                                alt={person.name}
                                className="w-20 h-20 rounded-full shadow-lg object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="relative mb-4">
                          <img
                            src={getImageUrl(member.name || '', member.image)}
                            alt={member.name}
                            className="w-24 h-24 rounded-full shadow-lg object-cover"
                          />
                        </div>
                      )}
                      {isMultiple ? (
                        <>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">
                            {member.people?.map(p => p.name).join(' & ')}
                          </h3>
                          <p className={`text-sm font-semibold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent mb-3`}>
                            {member.role}
                          </p>
                        </>
                      ) : (
                        <>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {member.name}
                          </h3>
                          <p className={`text-sm font-semibold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent mb-3`}>
                            {member.role}
                          </p>
                        </>
                      )}
                      <div className="flex items-center text-gray-500 text-sm">
                        <span>View details</span>
                        <ChevronDown className="ml-1 w-4 h-4" />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-start gap-6 mb-6">
                        <div className="flex-shrink-0">
                          {isMultiple ? (
                            <div className="relative flex gap-4">
                              {member.people?.map((person, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                  <img
                                    src={getImageUrl(person.name, person.image)}
                                    alt={person.name}
                                    className="w-28 h-28 rounded-2xl shadow-xl object-cover"
                                  />
                                  <p className="text-center mt-2 font-semibold text-gray-700 text-sm">{person.name}</p>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="relative">
                              <img
                                src={getImageUrl(member.name || '', member.image)}
                                alt={member.name}
                                className="w-32 h-32 rounded-2xl shadow-xl object-cover"
                              />
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl font-bold text-gray-900 mb-2">
                            {isMultiple ? member.people?.map(p => p.name).join(' & ') : member.name}
                          </h3>
                          <p className={`text-lg font-semibold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent mb-4`}>
                            {member.role}
                          </p>
                          <button
                            className="flex items-center text-gray-500 text-sm hover:text-gray-700 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedMember(null);
                            }}
                          >
                            <span>Close</span>
                            <ChevronUp className="ml-1 w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-4">
                          Key Responsibilities
                        </h4>
                        <ul className="grid md:grid-cols-2 gap-3">
                          {member.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className={`w-1.5 h-1.5 bg-gradient-to-r ${colors.gradient} rounded-full mr-3 mt-2 flex-shrink-0`}></span>
                              <span className="text-gray-700 leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 p-12 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-orange-400/10"></div>
          <div className="relative text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-blue-50 mb-4 max-w-3xl mx-auto">
              We're passionate about protecting youth hearing health and creating lasting change in communities across Australia.
            </p>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Together, we're building a legacy that will be passed on to future audiology students at UQ, ensuring hearing awareness reaches generations to come.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
