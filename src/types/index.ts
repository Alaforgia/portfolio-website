export interface IProjectCard {
  id: string;
  title: string;
  image: {
    domains: string[];
  };
  description: string;
}

export interface IHomeProjectCard {
  id: string;
  title: string;
  image: {
    domain: string;
  };
  description: string;
}
