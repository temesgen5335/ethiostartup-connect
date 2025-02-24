export interface Job {
  id: string;
  title: string;
  companyId: string;
  companyName: string;
  companyLogo: string;
  locationType: string;
  type: string;
  salary: number;
  description: string;
  skills: string[];
} 