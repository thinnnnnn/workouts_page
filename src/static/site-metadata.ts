interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Workouts Map',
  siteUrl: 'https://go.eimoo.com',
  logo: 'https://eimoo.com/service/avatar/0ab4d0eec14aa1dc634d6d75dffe80d9',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://eimoo.com',
    },
    {
      name: 'Strava',
      url: 'https://www.strava.com/athletes/yangli',
    },
  ],
};

export default data;
