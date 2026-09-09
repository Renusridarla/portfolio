export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    icon?: string;
  }[];
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  description?: string;
}

export interface CodingProfile {
  platform: string;
  username: string;
  url: string;
  iconName: string;
  highlight: string;
  color: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  iconName: string;
}
