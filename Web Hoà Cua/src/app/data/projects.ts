export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  role: string;
  images: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "visual-identity-studio",
    title: "Visual Identity Studio",
    category: "Branding & Identity",
    year: "2025",
    description: "A comprehensive visual identity system for a contemporary design studio, featuring custom typography, color palette, and brand guidelines. The identity bridges modernist principles with playful experimentation.",
    role: "Brand Designer, Art Director",
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=1200&q=80",
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1200&q=80"
    ],
    tags: ["Branding", "Typography", "Print Design"]
  },
  {
    id: "architectural-magazine",
    title: "Architectural Magazine",
    category: "Editorial Design",
    year: "2025",
    description: "Editorial design for a quarterly architecture magazine exploring the intersection of built environments and human experience. Layout emphasizes negative space and typographic hierarchy.",
    role: "Art Director, Layout Designer",
    images: [
      "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=1200&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80"
    ],
    tags: ["Editorial", "Layout", "Photography"]
  },
  {
    id: "ceramic-collection",
    title: "Ceramic Collection",
    category: "Product Photography",
    year: "2024",
    description: "Photography series showcasing handcrafted ceramic pieces. The work captures texture, form, and the relationship between light and materiality through minimal composition.",
    role: "Photographer, Creative Director",
    images: [
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=1200&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1200&q=80",
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&q=80"
    ],
    tags: ["Photography", "Art Direction", "Styling"]
  },
  {
    id: "motion-graphics-reel",
    title: "Motion Graphics Reel",
    category: "Motion Design",
    year: "2024",
    description: "A collection of motion design work spanning brand animations, kinetic typography, and abstract visual experiments. Emphasis on fluid transitions and rhythmic movement.",
    role: "Motion Designer, Animator",
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80",
      "https://images.unsplash.com/photo-1551817958-20232a9c9a3d?w=1200&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80"
    ],
    tags: ["Motion Design", "Animation", "Typography"]
  },
  {
    id: "fashion-lookbook",
    title: "Fashion Lookbook",
    category: "Photography",
    year: "2024",
    description: "Seasonal fashion lookbook emphasizing minimalist aesthetics and natural light. Shot on location across urban and natural environments to create visual contrast.",
    role: "Fashion Photographer",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80"
    ],
    tags: ["Fashion", "Photography", "Art Direction"]
  },
  {
    id: "tech-startup-brand",
    title: "Tech Startup Brand",
    category: "Branding & UX",
    year: "2024",
    description: "Complete brand identity and digital design system for an emerging technology platform. The identity combines technical precision with human warmth through geometric forms and approachable typography.",
    role: "Brand Designer, UX Lead",
    images: [
      "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=1200&q=80",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80"
    ],
    tags: ["Branding", "UX Design", "Digital"]
  }
];
