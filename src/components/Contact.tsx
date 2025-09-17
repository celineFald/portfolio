import React, { useState } from 'react';
import { Send, Heart, Sparkles, Star } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Merci pour votre message ! Je vous répondrai bientôt.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      {/* Decorative floating elements */}
      <div className="absolute top-10 left-10 animate-float">
        <Star className="w-6 h-6 text-pink-300/50 dark:text-pink-400/40" fill="currentColor" />
      </div>
      <div className="absolute top-20 right-20 animate-sparkle delay-1000">
        <Sparkles className="w-5 h-5 text-rose-300/60 dark:text-rose-400/50" />
      </div>
      <div className="absolute bottom-20 left-1/4 animate-float delay-2000">
        <Heart className="w-4 h-4 text-pink-300/60 dark:text-pink-400/50" fill="currentColor" />
      </div>
      
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-pink-400 dark:text-pink-300 animate-heart-beat" fill="currentColor" />
            <Sparkles className="w-5 h-5 text-rose-400 dark:text-rose-300 animate-sparkle" />
            <Heart className="w-6 h-6 text-pink-400 dark:text-pink-300 animate-heart-beat delay-500" fill="currentColor" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-pink-600 dark:from-pink-300 dark:via-rose-300 dark:to-pink-500 bg-clip-text text-transparent">
              Contactez-moi
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-2xl border border-pink-100 dark:border-pink-800/30 relative overflow-hidden">
          {/* Decorative background gradients */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-pink-200/20 to-rose-200/20 dark:from-pink-400/10 dark:to-rose-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-br from-rose-200/30 to-pink-200/30 dark:from-rose-400/15 dark:to-pink-400/15 rounded-full blur-2xl"></div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-pink-100 dark:border-pink-800/30 dark:bg-gray-700 dark:text-white rounded-xl focus:border-pink-400 dark:focus:border-pink-500 focus:outline-none transition-colors duration-300"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-pink-100 dark:border-pink-800/30 dark:bg-gray-700 dark:text-white rounded-xl focus:border-pink-400 dark:focus:border-pink-500 focus:outline-none transition-colors duration-300"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border-2 border-pink-100 dark:border-pink-800/30 dark:bg-gray-700 dark:text-white rounded-xl focus:border-pink-400 dark:focus:border-pink-500 focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Votre message..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 dark:from-pink-500 dark:via-rose-500 dark:to-pink-600 text-white px-12 py-4 rounded-full font-semibold flex items-center gap-3 mx-auto hover:from-pink-500 hover:via-rose-500 hover:to-pink-600 dark:hover:from-pink-600 dark:hover:via-rose-600 dark:hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                )}
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <div className="flex items-center justify-center gap-2 text-pink-500 dark:text-pink-400">
              <Heart size={16} className="animate-pulse" fill="currentColor" />
              <Sparkles size={14} className="animate-sparkle" />
              <span className="text-sm">Créé avec passion</span>
              <Sparkles size={14} className="animate-sparkle delay-500" />
              <Heart size={16} className="animate-pulse delay-1000" fill="currentColor" />
            </div>
            <div className="mt-2 flex items-center justify-center gap-1">
              <Heart size={16} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;