export const WHATSAPP_NUMBER = '524493796691';

export const BUSINESS_INFO = {
  name: 'Viajes 3M',
  phone: '449 379 66 91',
  phoneSecondary: '449 399 88 33',
  email: 'contacto@viajes3m.com',
  address: 'Monte Blanco 744 local 4',
  city: 'Aguascalientes, México',
  hours: {
    weekdays: 'Lun - Vie: 9am - 7pm',
    saturday: 'Sáb: 9am - 3pm',
  },
  instagram: 'https://instagram.com/viajes3m',
  facebook: 'https://facebook.com/viajes3m',
};

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
