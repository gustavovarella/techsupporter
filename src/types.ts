export type ServiceCategory = 'todos' | 'hardware' | 'software' | 'redes' | 'corporativo' | 'atendimento';

export interface TechService {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  popular?: boolean;
  benefits: string[];
  estimatedTime: string;
  serviceType: 'Residencial' | 'Empresarial' | 'Ambos';
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  rating: number;
  comment: string;
  date: string;
  serviceUsed: string;
  verified: boolean;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
  urgency?: 'baixa' | 'media' | 'alta' | 'urgente';
  deviceType?: 'computador' | 'notebook' | 'servidor' | 'rede' | 'outro';
}

export interface CorporateServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
