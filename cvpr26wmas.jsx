import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, ExternalLink, Calendar, Users, MapPin } from 'lucide-react';

export default function WorkshopWebsite() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const speakers = [
    {
      name: 'Yiannis Aloimonos',
      title: 'University of Maryland',
      image: './workshops/YannisAloimonos.jpg'
    },
    {
      name: 'Chelsea Finn',
      title: 'Stanford University',
      image: './workshops/ChelseaFinn.jpg'
    },
    {
      name: 'C. Karen Liu',
      title: 'Stanford University',
      image: './workshops/CKarenLiu.jpg'
    },
    {
      name: 'Jitendra Malik',
      title: 'UC Berkeley',
      image: './workshops/JitendraMalik.jpg'
    },
    {
      name: 'Nicholas Roy',
      title: 'MIT CSAIL',
      image: './workshops/NicholasRoy.jpg'
    }
  ];

  const organizers = [
    { name: 'Rama Chellappa', affiliation: 'JHU' },
    { name: 'Jieneng Chen', affiliation: 'JHU', role: 'Contact Person' },
    { name: 'Yilun Du', affiliation: 'Harvard' },
    { name: 'Sanjeev Khudanpur', affiliation: 'JHU' },
    { name: 'Cheng Peng', affiliation: 'University of Virginia' },
    { name: 'Tianmin Shu', affiliation: 'JHU' },
    { name: 'Chen Wei', affiliation: 'Rice University' },
    { name: 'Jianwen Xie', affiliation: 'Lambda' },
    { name: 'Alan Yuille', affiliation: 'JHU' }
  ];

  const challengeCommittee = [
    { name: 'Jieneng Chen', affiliation: 'JHU' },
    { name: 'Jiahan Zhang', affiliation: 'JHU' }
  ];

  const importantDates = [
    { event: 'Paper Submission Opens', date: 'Mar 3, 2026' },
    { event: 'Paper Submission Deadline', date: 'Mar 27, 2026' },
    { event: 'Challenge Submissions Due', date: 'May 28, 2026' },
    { event: 'Author Notifications', date: 'Apr 15, 2026' },
    { event: 'Workshop Day', date: 'CVPR 2026' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/95 backdrop-blur shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
            WMAS
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#about" className="hover:text-amber-400 transition">About</a>
            <a href="#speakers" className="hover:text-amber-400 transition">Speakers</a>
            <a href="#schedule" className="hover:text-amber-400 transition">Schedule</a>
            <a href="#cfp" className="hover:text-amber-400 transition">Submit</a>
            <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-amber-500/20 border border-amber-400/50 rounded-full">
            <span className="text-amber-300 text-sm font-medium">CVPR 2026 Workshop</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">
              World Models Meet
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-300 to-blue-400 bg-clip-text text-transparent">
              Active Sensing & Closed-Loop Planning
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            From passive generation to interactive, adaptive agents that strategically acquire information and plan in closed-loop systems.
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <a href="#cfp" className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold rounded-lg transition transform hover:scale-105">
              Call for Papers
            </a>
            <a href="#challenge" className="px-8 py-3 border border-amber-400 text-amber-300 hover:bg-amber-400/10 font-semibold rounded-lg transition">
              Challenge Details
            </a>
          </div>

          <div className="flex justify-center gap-12 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>June 3 - 4, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-400" />
              <span>~200 Attendees</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Colorado Convention Center</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-amber-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-400/50 rounded-full mb-4">
            <span className="text-amber-300 text-xs font-semibold uppercase">About</span>
          </div>
          <h2 className="text-5xl font-bold mb-6">The Research Vision</h2>
          <p className="text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
            While generative models have achieved remarkable success in passive generation, a critical gap remains between passive observers and active, adaptive agents. This workshop bridges generative world models with active sensing and closed-loop planning—exploring how models can strategically decide <em>what to sense</em>, <em>when to sense</em>, and <em>how to act</em>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/30 hover:border-blue-400/60 transition">
            <h3 className="text-xl font-bold mb-3 text-blue-300">Active Information Gathering</h3>
            <p className="text-slate-300">How can generative models guide optimal sensor placement, viewpoint selection, and information-theoretic active sensing?</p>
          </div>
          
          <div className="p-8 rounded-xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-400/30 hover:border-amber-400/60 transition">
            <h3 className="text-xl font-bold mb-3 text-amber-300">Closed-Loop Planning</h3>
            <p className="text-slate-300">Integrating generative models with model-predictive control, efficient replanning, and uncertainty-informed decision-making.</p>
          </div>
          
          <div className="p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-400/30 hover:border-purple-400/60 transition">
            <h3 className="text-xl font-bold mb-3 text-purple-300">Learning Adaptation</h3>
            <p className="text-slate-300">End-to-end learning of information-seeking behavior and test-time world model adaptation with active sensing.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500/5 to-amber-500/5 border border-slate-700 rounded-xl p-8">
          <p className="text-slate-200 text-lg leading-relaxed">
            This is the first workshop to explicitly center on the intersection of generative world models, active sensing, and closed-loop planning—representing a critical shift from passive observers to <strong>active agents capable of intelligent behavior in robotics, autonomous systems, and interactive AI applications</strong>.
          </p>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-400/50 rounded-full mb-4">
            <span className="text-amber-300 text-xs font-semibold uppercase">Keynotes</span>
          </div>
          <h2 className="text-5xl font-bold mb-4">Invited Speakers</h2>
          <p className="text-slate-400">Leading researchers from vision, robotics, and AI communities</p>
          <p className="text-slate-400 text-sm mt-3">* Listed in alphabetical order by last name</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker, idx) => (
            <div key={idx} className="group rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-700 overflow-hidden hover:border-amber-400/50 transition cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              
              <div className="h-64 overflow-hidden bg-slate-700">
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{speaker.name}</h3>
                <p className="text-sm text-amber-400 font-medium">{speaker.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-400/50 rounded-full mb-4">
            <span className="text-amber-300 text-xs font-semibold uppercase">Schedule</span>
          </div>
          <h2 className="text-5xl font-bold">Workshop Agenda</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl">
          {[
            { time: '08:00', event: 'Opening Welcome & Introductions', duration: '10 min' },
            { time: '08:10', event: 'Invited Talk: Speaker 1', duration: '30 min' },
            { time: '08:45', event: 'Invited Talk: Speaker 2', duration: '30 min' },
            { time: '09:20', event: 'Coffee Break', duration: '15 min' },
            { time: '09:35', event: 'Invited Talk: Speaker 3', duration: '30 min' },
            { time: '10:10', event: 'Invited Talk: Speaker 4', duration: '30 min' },
            { time: '10:45', event: 'Invited Talk: Speaker 5', duration: '30 min' },
            { time: '11:20', event: 'Panel Discussion: Ranjay Krishna (UW & AI2), Amir Bar (Meta), Yilun Du (Harvard)', duration: '' },
            { time: '12:00', event: 'Closing Remarks', duration: '' }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6 p-4 rounded-lg bg-slate-800/30 border border-slate-700 hover:border-amber-400/30 transition group">
              <div className="text-amber-400 font-bold text-lg min-w-16 group-hover:text-amber-300 transition">{item.time}</div>
              <div className="flex-1">
                <p className="text-white font-semibold">{item.event}</p>
                {item.duration && <p className="text-sm text-slate-400 mt-1">{item.duration}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call for Papers */}
      <section id="cfp" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-400/50 rounded-full mb-4">
            <span className="text-amber-300 text-xs font-semibold uppercase">Submissions</span>
          </div>
          <h2 className="text-5xl font-bold mb-4">Call for Papers</h2>
          <p className="text-xl text-slate-300">Non-archival workshop accepting 4-page abstracts on world models, active sensing, and embodied planning.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-amber-300">Important Dates</h3>
            <div className="space-y-4">
              {importantDates.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center pb-4 border-b border-slate-700 last:border-0">
                  <span className="text-slate-300">{item.event}</span>
                  <span className="font-semibold text-white">{item.date}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-400/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-amber-300">Submission Details</h3>
            <div className="space-y-4 text-slate-300">
              <div>
                <p className="font-semibold text-white mb-2">Format</p>
                <p>4-page abstracts (non-archival)</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Presentation</p>
                <p>Accepted papers presented as posters</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Awards</p>
                <p>Best Paper Prize + Compute Credits (Lambda)</p>
              </div>
              <div className="pt-4">
                <a href="#contact" className="inline-block px-6 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold rounded-lg transition">
                  Submit Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-400/50 rounded-full mb-4">
            <span className="text-amber-300 text-xs font-semibold uppercase">Competition</span>
          </div>
          <h2 className="text-5xl font-bold mb-6">Workshop Challenge</h2>
          <p className="text-xl text-slate-300 max-w-2xl">Benchmark your world models on active embodied tasks with unified evaluation metrics.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-300">Challenge Tracks</h3>
              <ul className="space-y-3">
                {[
                  'Active Recognition',
                  'Active Embodied QA',
                  'Image-Goal Navigation',
                  'Robotic Manipulation'
                ].map((track, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300">{track}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-300">World Model Options</h3>
              <ul className="space-y-3">
                {[
                  'Image-based generators',
                  'Physical simulation engines',
                  'Hybrid physical + generative',
                  'Physics-grounded models'
                ].map((opt, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300">{opt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/5 border border-blue-400/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-blue-300">Evaluation Metrics</h3>
            <div className="space-y-4">
              <div className="pb-4 border-b border-slate-700">
                <p className="font-semibold text-white mb-2">Task Success</p>
                <p className="text-slate-300 text-sm">Success rate on embodied tasks</p>
              </div>
              <div className="pb-4 border-b border-slate-700">
                <p className="font-semibold text-white mb-2">Efficiency</p>
                <p className="text-slate-300 text-sm">SPL and sample efficiency metrics</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Generalization</p>
                <p className="text-slate-300 text-sm">Performance on unseen environments and actions</p>
              </div>
            </div>
            <div className="mt-6">
              <a href="#contact" className="inline-block px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition">
                Challenge Sign-ups Open Soon
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-400/50 rounded-full mb-4">
            <span className="text-amber-300 text-xs font-semibold uppercase">Team</span>
          </div>
          <h2 className="text-5xl font-bold">Organizing Committee</h2>
          <p className="text-slate-400 text-sm mt-3">* Listed in alphabetical order by last name</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizers.map((org, idx) => (
            <div key={idx} className="p-6 rounded-lg bg-slate-800/30 border border-slate-700 hover:border-amber-400/50 transition">
              <h3 className="text-lg font-bold text-white">
                {org.name}
                {org.role && <span className="text-amber-300">, {org.role}</span>}
              </h3>
              <p className="text-sm text-amber-400 font-medium">{org.affiliation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge Committee Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-400/50 rounded-full mb-4">
            <span className="text-blue-300 text-xs font-semibold uppercase">Committee</span>
          </div>
          <h2 className="text-5xl font-bold">Challenge Committee</h2>
          <p className="text-slate-400 text-sm mt-3">* Listed in alphabetical order by last name</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
          {challengeCommittee.map((member, idx) => (
            <div key={idx} className="p-6 rounded-lg bg-slate-800/30 border border-slate-700 hover:border-blue-400/50 transition">
              <h3 className="text-lg font-bold text-white">{member.name}</h3>
              <p className="text-sm text-blue-400 font-medium">{member.affiliation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-400/50 rounded-full mb-4">
            <span className="text-amber-300 text-xs font-semibold uppercase">Partners</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Sponsors</h2>
          <p className="text-slate-400">We're grateful to our sponsors for supporting the workshop</p>
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-amber-500/10 border border-slate-700 rounded-xl p-12 flex items-center justify-center">
          <div className="text-center">
            <div className="text-5xl font-bold text-amber-400 mb-2">Lambda</div>
            <p className="text-slate-300">Best Paper Prize | Compute Credits | Challenge Awards</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-amber-500/20 to-blue-500/20 border border-amber-400/30 rounded-2xl p-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-2">Get in Touch</h2>
            <p className="text-amber-300 font-semibold mb-6">Contact Person: Jieneng Chen</p>
            <p className="text-slate-300 mb-6 text-lg">
              Have questions about the workshop? Want to submit a paper or join the challenge? We'd love to hear from you!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <a href="mailto:jchen293@jh.edu" className="text-lg hover:text-amber-300 transition">
                  jchen293@jh.edu
                </a>
              </div>
              <div className="flex items-center gap-3">
                <ExternalLink className="w-5 h-5 text-amber-400" />
                <span className="text-slate-400">CVPR 2026 (June 2026)</span>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a href="#cfp" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold rounded-lg transition">
                Submit a Paper
              </a>
              <a href="#challenge" className="px-6 py-3 border border-amber-400 text-amber-300 hover:bg-amber-400/10 font-semibold rounded-lg transition">
                Join the Challenge
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-700 mt-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-400 text-sm">
          <div>
            <p>World Models Meet Active Sensing & Closed-Loop Planning</p>
            <p className="text-xs mt-1">CVPR 2026 Workshop | 1st Edition</p>
          </div>
          <div className="text-right">
            <p className="text-xs leading-relaxed">Organized by Rama Chellappa, Jieneng Chen, Yilun Du, Cheng Peng, Tianmin Shu, Chen Wei, Jianwen Xie, and Alan Yuille</p>
          </div>
        </div>
      </footer>
    </div>
  );
}