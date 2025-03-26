
export type University = {
  id: string;
  name: string;
  location: string;
  region: string;
  programs: string[];
  employmentRate: number;
  specializations: string[];
  rating: number;
  image: string;
  international?: boolean;
};

export type Scholarship = {
  id: string;
  name: string;
  country: string;
  amount: string;
  requirements: string[];
  deadline: string;
  link: string;
};

export type AdmissionCriteria = {
  id: string;
  university: string;
  department: string;
  program: string;
  section: string;
  minimumScore: number;
  keySubjectsWeights: {
    subject: string;
    weight: number;
  }[];
  acceptanceRate: number;
  year: number;
};
