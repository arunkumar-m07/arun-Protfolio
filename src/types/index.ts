export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  approach: string;
  implementation: {
    title: string;
    details: string[];
    codeSnippet?: {
      language: string;
      code: string;
    };
  };
  whatILearned: string[];
  futureImprovements: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  features: string[];
  techFocus: string[];
  caseStudy: ProjectCaseStudy;
  links: {
    github: string;
    demo?: string;
  };
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface TimelineItem {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  highlight?: string;
}

export interface CurrentlyLearningItem {
  id: string;
  name: string;
  category: string;
  statusText: string;
}

export interface Principle {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export interface EducationInfo {
  tag: string;
  degree: string;
  college: string;
  expectedGraduation: string;
  coursework: string[];
}

export interface ContactInfo {
  heading: string;
  supportingText: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
  availability: string;
}
