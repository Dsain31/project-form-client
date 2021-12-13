export interface Organization {
  _id: string;
  id: number;
  name: string;
}

export interface Category {
  _id: string;
  id: number;
  categoryName: string;
  organizationId: string;
}
export interface Activity {
  _id: string;
  categoryId: number;
  activityName: string;
}

export interface ProjectFormCreate {
  message: string;
  error: boolean;
}

interface ProjectDetail {
  _id: string;
  organization: string;
  category: string;
  activity: string;
  title: string;
  minAge: number;
  maxAge: number;
  description: string;
}

interface ProjectGallery {
  _id: string;
  projectName: string;
  projectImages: string[];
}

interface ProjectCostsOption {
  duration: number;
  costs: number;
}

interface ProjectCost {
  _id: string;
  projectName: string;
  projectCostsOptions: ProjectCostsOption[];
}

export interface ProjectFormData {
  projectDetails: ProjectDetail[];
  projectGallery: ProjectGallery[];
  projectCosts: ProjectCost[];
}