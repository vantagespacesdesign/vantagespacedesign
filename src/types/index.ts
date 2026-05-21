export type Service = {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
};

export type Project = {
  title: string;
  location: string;
  category: string;
  image: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
};

export type Brand = {
  name: string;
  label: string;
};

export type StatItem = {
  label: string;
  value: string;
};
