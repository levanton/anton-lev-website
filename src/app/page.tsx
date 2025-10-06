'use client';

import { useState } from 'react';
import { Code2, Layers, Zap, Github, Linkedin, Mail, User } from 'lucide-react';
import ChatInterface from '../components/ChatInterface';

export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);





  const handleCardClick = (skill: string) => {
    setSelectedSkill(selectedSkill === skill ? null : skill);
  };



  const skills = [
    {
      id: 'frontend',
      icon: Code2,
      title: 'Frontend',
      short: 'React, TypeScript, Tailwind CSS, Next.js',
      details: 'Building responsive and performant user interfaces with modern frameworks. Expert in React ecosystem, state management, and component architecture.'
    },
    {
      id: 'backend',
      icon: Layers,
      title: 'Backend',
      short: 'Node.js, PostgreSQL, REST APIs, Supabase',
      details: 'Designing scalable server architectures and APIs. Proficient in database optimization, authentication systems, and microservices patterns.'
    },
    {
      id: 'devops',
      icon: Zap,
      title: 'Cloud & DevOps',
      short: 'AWS, Docker, CI/CD, Vercel',
      details: 'Automating deployments and managing cloud infrastructure. Experience with containerization, orchestration, and monitoring solutions.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative">



      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>


      <div className="relative min-h-screen flex">
        <div className="w-full lg:w-1/2 p-6 lg:p-12 flex items-center justify-center overflow-y-auto">
          <div className="max-w-2xl w-full space-y-8 animate-fade-in">
            <div className="text-center lg:text-left space-y-6">
              <div className="flex justify-center lg:justify-start">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 animate-glow">
                  <User className="w-16 h-16 text-white" />
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4 animate-pulse-subtle">
                  <Zap className="w-4 h-4" />
                  <span>Available for new projects</span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent animate-gradient-flow">
                    Fullstack Developer
                  </span>
                </h1>

                <p className="text-lg lg:text-xl text-slate-400 leading-relaxed mb-6">
                  Building scalable applications with modern technologies.
                  <span className="text-slate-300"> Turning ideas into reality.</span>
                </p>
              </div>

              <div className="space-y-4">
                {skills.map((skill) => {
                  const Icon = skill.icon;
                  const isSelected = selectedSkill === skill.id;

                  return (
                    <div
                      key={skill.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(skill.id);
                      }}
                      className={`group p-5 bg-slate-800/50 backdrop-blur-sm border rounded-xl transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'border-blue-500 shadow-lg shadow-blue-500/20 animate-glow'
                          : 'border-slate-700/50 hover:border-blue-500/50'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                          isSelected ? 'bg-blue-500/30 rotate-12 animate-bounce-subtle' : 'group-hover:bg-blue-500/20'
                        }`}>
                          <Icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1">{skill.title}</h3>
                          <p className={`text-slate-400 text-sm transition-all duration-300 ${
                            isSelected ? 'hidden' : 'block'
                          }`}>
                            {skill.short}
                          </p>
                          <p className={`text-slate-300 text-sm transition-all duration-300 ${
                            isSelected ? 'block' : 'hidden'
                          }`}>
                            {skill.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-blue-500/50 hover:bg-slate-700/80 transition-all duration-300 group hover:scale-110"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-5 h-5 group-hover:text-blue-400 group-hover:rotate-12 transition-all" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-blue-500/50 hover:bg-slate-700/80 transition-all duration-300 group hover:scale-110"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Linkedin className="w-5 h-5 group-hover:text-blue-400 group-hover:rotate-12 transition-all" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="mailto:hello@example.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-300 font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-110"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex w-1/2 p-6 lg:p-12 items-center justify-center">
          <div onClick={(e) => e.stopPropagation()}>
            <ChatInterface />
          </div>
        </div>
      </div>
    </div>
  );
}