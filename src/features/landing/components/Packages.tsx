'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Calendar, Check, MessageCircle } from 'lucide-react';
import { packages } from '@/entities/package/data';
import { buildWhatsAppUrl } from '@/shared/lib/constants';

gsap.registerPlugin(ScrollTrigger);

function PackageCard({ pkg, index }: { pkg: typeof packages[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const whatsappUrl = buildWhatsAppUrl(pkg.whatsappMessage);

  return (
    <div
      ref={cardRef}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={pkg.image}
          alt={`Paquete de viaje a ${pkg.destination}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Badge */}
        {pkg.badge && (
          <span className="absolute top-4 left-4 bg-accent text-primary font-sans text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {pkg.badge}
          </span>
        )}

        {/* Price overlay */}
        <div className="absolute bottom-4 left-4">
          <span className="text-white font-sans text-sm font-medium">Desde</span>
          <p className="text-white font-display text-3xl font-bold">
            ${pkg.price.toLocaleString('es-MX')}
          </p>
          <span className="text-white/80 font-sans text-xs">por persona</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-4 h-4 text-accent" />
          <span className="text-soft-gray font-sans text-sm">{pkg.destination}</span>
        </div>

        <h3 className="font-display text-xl text-primary mb-4">{pkg.name}</h3>

        <div className="flex items-center gap-2 mb-4 text-soft-gray">
          <Calendar className="w-4 h-4" />
          <span className="font-sans text-sm">{pkg.nights} noches</span>
        </div>

        <ul className="space-y-2 mb-6">
          {pkg.includes.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-soft-gray font-sans text-sm">
              <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-sans font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
          Reservar Ahora
        </a>
      </div>
    </div>
  );
}

export default function Packages() {
  return (
    <section id="paquetes" className="py-20 md:py-28 bg-sand">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-accent-dark font-sans text-sm tracking-[0.2em] uppercase">
            Ofertas Especiales
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 mb-4">
            Paquetes de Viaje en Aguascalientes
          </h2>
          <p className="text-soft-gray font-body max-w-xl mx-auto">
            Seleccionamos los mejores destinos con precios increíbles.
            ¡Reserva hoy y vive la experiencia de tu vida!
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
