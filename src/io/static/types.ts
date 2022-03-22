export interface Response {
  info: {
    name: string;
    title: string;
  },
  projects: Array<Project>;
}

interface Project {
  name: string;
  url: string;
  description: string;
}
