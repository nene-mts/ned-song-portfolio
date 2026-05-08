export interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
  caption?: string;
  poster?: string;
  featured?: boolean;
  aspect?: 'video' | 'square' | 'portrait' | 'phone' | 'auto';
  fit?: 'cover' | 'contain';
}

export interface ProjectSection {
  title: string;
  content: string;
  kicker?: string;
  note?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  media?: ProjectMedia[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  cardImage?: string;
  category: string;
  cardAspect?: 'landscape' | 'portrait' | 'square';
  cardCompact?: boolean;
  cardStyle?: 'default' | 'character' | 'cutout';
  coverFit?: 'contain' | 'cover';
  coverStyle?: 'full' | 'card' | 'character' | 'centered';
  featured?: boolean;
  intro?: string;
  sections?: ProjectSection[];
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  icon?: string;
  logo?: string;
}
