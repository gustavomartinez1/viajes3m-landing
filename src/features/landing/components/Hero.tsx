'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ArrowDown } from 'lucide-react';
import { buildWhatsAppUrl } from '@/shared/lib/constants';

export default function Hero() {
  const whatsappUrl = buildWhatsAppUrl('Hola! Quiero información sobre paquetes de viaje.');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
          alt="Playa paradisíaca con aguas cristalinas"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block bg-accent/90 text-primary font-sans text-sm font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
            Agencia de Viajes en Aguascalientes
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="font-display text-5xl md:text-7xl text-white mb-6 leading-tight"
        >
          Tu Próxima Aventura
          <br />
          <span className="text-accent">Comienza Aquí</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="font-body text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Descubre los mejores destinos con paquetes todo incluido.
          Atención personalizada y los precios más bajos de Aguascalientes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-sans font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Cotiza Tu Viaje
          </a>
          <a
            href="#paquetes"
            className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-sans font-semibold px-8 py-4 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/30 text-lg"
          >
            Ver Paquetes
            <ArrowDown className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/60"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
