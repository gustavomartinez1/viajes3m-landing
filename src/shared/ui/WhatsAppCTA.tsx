import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/shared/lib/constants';

interface WhatsAppCTAProps {
  message: string;
  label?: string;
  variant?: 'primary' | 'secondary';
}

export default function WhatsAppCTA({ message, label = 'Reservar por WhatsApp', variant = 'primary' }: WhatsAppCTAProps) {
  const url = buildWhatsAppUrl(message);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center gap-2 px-6 py-3 rounded-lg font-sans font-semibold text-sm
        transition-all duration-300 hover:scale-105 hover:shadow-lg
        ${variant === 'primary'
          ? 'bg-green-500 hover:bg-green-600 text-white'
          : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30'
        }
      `}
    >
      <MessageCircle className="w-5 h-5" />
      {label}
    </a>
  );
}
