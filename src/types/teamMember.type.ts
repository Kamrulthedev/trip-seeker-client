interface ISocialLinks {
  facebook: string;
  twitter: string;
  instagram: string;
}

export interface ITeamMember {
  image: string;
  name: string;
  designation: string;
  social_links: ISocialLinks;
}
