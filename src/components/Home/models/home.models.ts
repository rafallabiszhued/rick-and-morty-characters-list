export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface ILocation {
  name: string;
  url: string;
}

export interface IOrigin extends ILocation {}
