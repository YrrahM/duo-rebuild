import { Briefcase, Brain, Globe, Clock, MessageCircle, Users, MonitorPlay, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: 'Formal Diagnostic Assessment',
    description: 'I begin with a professional evaluation to pinpoint your exact level and needs.',
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Instantaneous Needs Analysis',
    description: 'I quickly recognize and address your micro-level language gaps in real time.',
    icon: <Brain className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Industry-Specific Language',
    description: 'Lessons are personalized to reflect your profession’s terminology and communication style.',
    icon: <Globe className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Flexible Scheduling',
    description: 'Classes available anytime, designed around your work and life commitments.',
    icon: <Clock className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Engaging Techniques',
    description: 'I use roleplays, simulations, and real-life scenarios to make learning dynamic and relevant.',
    icon: <Users className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Stakeholder Feedback',
    description: 'Clear progress reports for both students and company stakeholders.',
    icon: <MessageCircle className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Multimedia Tools',
    description: 'Lessons supported with whiteboards, images, audio, video, and shared documents.',
    icon: <MonitorPlay className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Critical Thinking Focus',
    description: 'Develop confident, intelligent communication for every professional context.',
    icon: <Target className="w-8 h-8 text-blue-600" />,
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-20 px-6 bg-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/city-blur.jpg"
          alt="Blurred City Skyline"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Why Professionals Choose Me
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 border hover:border-blue-500 transition duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
