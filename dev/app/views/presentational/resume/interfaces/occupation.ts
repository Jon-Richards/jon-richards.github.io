import { Responsibility } from './responsibility';

export interface Occupation {
  id: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  organization: string;
  responsibilities: Responsibility[];
}
