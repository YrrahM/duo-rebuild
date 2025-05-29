import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Elena R.',
    role: 'Project Manager, InnovaTech Group',
    text: `"As a project manager in a global firm, I needed to enhance my communication with international clients. [Your Name] immediately identified my weak areas and adapted the sessions to my field. His teaching style is sharp, intuitive, and truly personalized. My confidence during presentations has grown remarkably."`,
  },
  {
    name: 'Luis M.',
    role: 'HR Coordinator, Grand Mar Azul Hotel',
    text: `"Our hotel staff required specialized Business English training to better serve corporate guests. [Your Name] provided highly effective and engaging group sessions tailored to our operations. Within weeks, the improvement in team communication and professionalism was noticeable to guests and management alike."`,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          What My Clients Say
        </h2>
        <div className="grid gap-12 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition duration-300"
            >
              <Quote className="w-8 h-8 text-blue-600 mb-4 mx-auto" />
              <p className="text-gray-700 text-sm italic mb-4">{testimonial.text}</p>
              <p className="text-blue-700 font-semibold">{testimonial.name}</p>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
