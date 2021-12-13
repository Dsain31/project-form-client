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
