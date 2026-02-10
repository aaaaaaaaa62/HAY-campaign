export interface TeamMember {
  name?: string;
  role: string;
  responsibilities: string[];
  image?: string;
  isMultiple?: boolean;
  people?: Array<{ name: string; image?: string }>;
}

export interface NavigationItem {
  name: string;
  path: string;
}
