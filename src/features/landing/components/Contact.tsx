'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '@/shared/lib/constants';

const contactInfo = [
  {
    icon: Phone,
    title: 'Teléfono',
    details: [BUSINESS_INFO.phone, BUSINESS_INFO.phoneSecondary],
    link: `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`,
  },
  {
    icon: Mail,
    title: 'Email',
    details: [BUSINESS_INFO.email],
    link: `mailto:${BUSINESS_INFO.email}`,
  },
  {
    icon: MapPin,
    title: 'Dirección',
    details: [BUSINESS_INFO.address, BUSINESS_INFO.city],
    link: null,
  },
  {
    icon: Clock,
    title: 'Horario',
    details: [BUSINESS_INFO.hours.weekdays, BUSINESS_INFO.hours.saturday],
    link: null,
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-accent-dark font-sans text-sm tracking-[0.2em] uppercase">
            Contáctanos
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 mb-4">
            Hablemos de Tu Próximo Viaje
          </h2>
          <p className="text-soft-gray font-body max-w-xl mx-auto">
            Estamos listos para planear tu próxima aventura.
            ¡Escríbenos o llámanos!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg text-primary mb-2">
                {info.title}
              </h3>
              {info.details.map((detail, i) => (
                <p key={i} className="text-soft-gray font-body text-sm mb-1">
                  {detail}
                </p>
              ))}
              {info.link && (
                <a
                  href={info.link}
                  className="text-accent hover:text-accent-dark font-sans text-sm font-medium transition-colors"
                >
                  Contactar
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
