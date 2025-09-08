import React from 'react';
import { FileText, Globe, Upload, Scale, ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import AI3DElements from './AI3DElements';

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: 'Plain Language Law',
      description: 'Legal jargon turned into simple words.',
      color: 'text-accent'
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'English, Hindi, Marathi (text & voice).',
      color: 'text-accent-secondary'
    },
    {
      icon: Upload,
      title: 'Upload & Query',
      description: 'Ask questions directly from documents.',
      color: 'text-accent'
    },
    {
      icon: Scale,
      title: 'Incident Guide',
      description: 'Get IPC sections & punishments for real-life cases.',
      color: 'text-accent-secondary'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-bg-primary to-bg-secondary relative overflow-hidden">
      {/* AI 3D Elements */}
      <AI3DElements variant="cubes" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent font-extrabold">
              <span className="text-text-primary">understand the law</span>
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto font-medium">
            <span className="text-text-primary font-semibold">Clearly and quickly</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group">
                <div className="bg-surface-secondary/80 backdrop-blur-md rounded-2xl border border-border p-8 text-center transform hover:scale-105 hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/25 hover:border-accent/40"
                     style={{
                       transform: `perspective(1000px) rotateX(${Math.sin(index * 0.8) * 2}deg) rotateY(${Math.cos(index * 0.6) * 2}deg)`,
                       animationDelay: `${index * 150}ms`
                     }}>
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-accent/50">
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">

          <div className="bg-gradient-to-r from-accent/10 to-accent-secondary/10 border border-[#1b2028] rounded-2xl p-12 max-w-4xl mx-auto transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/25 hover:border-accent/40">
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              Ready to simplify legal complexity?
            </h3>
            <p className="text-text-secondary mb-8 text-lg">
              Join thousands already using NyayaSathi for legal clarity
            </p>
            <button className="px-8 py-4 text-orange-600 bg-gradient-to-r from-accent to-accent-secondary text-surface-primary rounded-lg font-semibold hover:from-accent/80 hover:to-accent-secondary/80 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/50">
              Try NyayaSathi Now
              <ArrowBigRight className="w-5 h-5 inline-block ml-2 -rotate-90" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;