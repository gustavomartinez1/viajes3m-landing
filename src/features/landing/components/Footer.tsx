'use client';

import { Instagram, Facebook, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO, WHATSAPP_NUMBER, buildWhatsAppUrl } from '@/shared/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl text-white mb-4">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-white/70 font-body text-sm leading-relaxed">
              Tu agencia de confianza para descubrir los mejores destinos.
              Hacemos realidad tus sueños de viaje.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-sans text-white font-semibold mb-4">
              Contáctanos
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span className="text-white/70 font-body text-sm">
                  {BUSINESS_INFO.phone}
                  <br />
                  {BUSINESS_INFO.phoneSecondary}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-white/70 hover:text-accent font-body text-sm transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span className="text-white/70 font-body text-sm">
                  {BUSINESS_INFO.address}
                  <br />
                  {BUSINESS_INFO.city}
                </span>
              </li>
            </ul>
          </div>

          {/* Horario */}
          <div>
            <h4 className="font-sans text-white font-semibold mb-4">
              Horario
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span className="text-white/70 font-body text-sm">
                  Lunes - Viernes
                  <br />
                  9:00 am - 7:00 pm
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span className="text-white/70 font-body text-sm">
                  Sábado
                  <br />
                  9:00 am - 3:00 pm
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sans text-white font-semibold mb-4">
              Síguenos
            </h4>
            <div className="flex gap-3">
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href={buildWhatsAppUrl('Hola! Quiero información sobre paquetes de viaje.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 font-body text-sm text-center md:text-left">
            © {currentYear} {BUSINESS_INFO.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 hover:text-accent font-body text-sm transition-colors">
              Aviso de Privacidad
            </a>
            <a href="#" className="text-white/50 hover:text-accent font-body text-sm transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
