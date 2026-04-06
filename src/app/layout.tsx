import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Paquetes de Viaje en Aguascalientes | Viajes 3M',
  description: 'Agencia de viajes en Aguascalientes. Los mejores paquetes de viaje a Cancún, Puerto Vallarta, Los Cabos y más. Atención personalizada y precios increíbles.',
  keywords: 'agencia de viajes Aguascalientes, paquetes de viaje Aguascalientes, viajes baratos Aguascalientes, Cancún todo incluido, Puerto Vallarta, Los Cabos',
  authors: [{ name: 'Viajes 3M' }],
  openGraph: {
    title: 'Viajes 3M | Paquetes de Viaje en Aguascalientes',
    description: 'Descubre los mejores destinos con Viajes 3M. Paquetes todo incluido a los precios más bajos de Aguascalientes.',
    type: 'website',
    locale: 'es_MX',
    siteName: 'Viajes 3M',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Viajes 3M | Paquetes de Viaje en Aguascalientes',
    description: 'Descubre los mejores destinos con Viajes 3M.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Viajes 3M',
  description: 'Agencia de viajes en Aguascalientes con los mejores paquetes y promociones de viaje.',
  url: 'https://viajes3m.com',
  telephone: '+52-449-379-6691',
  email: 'contacto@viajes3m.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Monte Blanco 744 local 4',
    addressLocality: 'Aguascalientes',
    addressRegion: 'Aguascalientes',
    addressCountry: 'MX',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 21.8818,
    longitude: -102.2916,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '15:00',
    },
  ],
  sameAs: [
    'https://instagram.com/viajes3m',
    'https://facebook.com/viajes3m',
  ],
  priceRange: '$$',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-sand text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
