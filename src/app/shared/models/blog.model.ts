export interface Blog {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  imageUrl: string;
  url: string;
  heading1: string;
  heading1Content: string;
  heading2: string;
  heading2Content: string;
  heading3: string;
  heading3Content: string;
  summary: string;
  blogSummary: string;
  likes?: number;
  dislikes?: number;
}
