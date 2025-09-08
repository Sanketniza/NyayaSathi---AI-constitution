import React from 'react';
import { Users, GraduationCap, Scale, Heart } from 'lucide-react';
import AI3DElements from './AI3DElements';

const Impact = () => {
  const impactGroups = [
    {
      icon: Users,
      title: 'Citizens',
      description: 'Empowering everyday people with legal knowledge',
      color: 'text-accent'
    },
    {
      icon: GraduationCap,
      title: 'Students',
      description: 'Making legal education accessible and understandable',
      color: 'text-accent-secondary'
    },
    {
      icon: Scale,
      title: 'Lawyers',
      description: 'Streamlining legal research and client communication',
      color: 'text-accent'
    },
    {
      icon: Heart,
      title: 'NGOs',
      description: 'Supporting social justice initiatives with legal clarity',
      color: 'text-accent-secondary'
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-bg-primary to-bg-secondary relative overflow-hidden">
      {/* AI 3D Elements */}
      <AI3DElements variant="quantum" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Helping citizens, students, lawyers, NGOs access justice —{' '}
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent font-extrabold">
              <span className="text-text-primary">simple, fast, and inclusive</span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {impactGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <div key={index} className="group">
                <div className="bg-surface-secondary/80 backdrop-blur-md rounded-2xl border border-border p-6 text-center transform hover:scale-105 hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/25 hover:border-accent/40"
                     style={{
                       transform: `perspective(1000px) rotateX(${Math.sin(index * 0.6) * 2}deg) rotateY(${Math.cos(index * 0.4) * 2}deg)`,
                       animationDelay: `${index * 100}ms`
                     }}>
                  
                  <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-accent/50">
                    <Icon className={`w-7 h-7 ${group.color}`} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {group.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {group.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;