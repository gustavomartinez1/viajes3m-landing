export interface Package {
  id: string;
  name: string;
  destination: string;
  price: number;
  nights: number;
  includes: string[];
  image: string;
  whatsappMessage: string;
  badge?: string;
}
