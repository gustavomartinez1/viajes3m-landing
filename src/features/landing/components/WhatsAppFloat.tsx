'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { buildWhatsAppUrl } from '@/shared/lib/constants';

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = buildWhatsAppUrl('Hola! Quiero información sobre paquetes de viaje.');

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="absolute bottom-16 right-0 bg-white rounded-xl shadow-2xl p-4 w-72"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                aria-label="Cerrar"
              >
                <X className="w-4 h-4" />
              </button>
              <p className="text-charcoal font-sans text-sm font-medium mb-3 pr-6">
                ¿Necesitas ayuda? ¡Escríbenos por WhatsApp!
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-sans font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Iniciar Chat
              </a>
            </motion.div>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Abrir WhatsApp"
          >
            <MessageCircle className="w-7 h-7 text-white" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
