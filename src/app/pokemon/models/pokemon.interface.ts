// Interface to list
export interface IResList {
  count: number;
  next: string;
  previous: null;
  results: IResult[];
}

export interface IResult {
  name: string;
  url: string;
  like?: boolean;
}

// Interface to detail
export interface IResDetail {
  abilities:                IAbility[];
  base_experience:          number;
  forms:                    ISpecies[];
  height:                   number;
  id:                       number;
  is_default:               boolean;
  location_area_encounters: string;
  name:                     string;
  order:                    number;
  species:                  ISpecies;
  stats:                    IStat[];
  types:                    IType[];
  weight:                   number;
}

export interface IAbility {
  ability:   ISpecies;
  is_hidden: boolean;
  slot:      number;
}

export interface ISpecies {
  name: string;
  url:  string;
}

export interface ICries {
  latest: string;
  legacy: string;
}

export interface IStat {
  base_stat: number;
  effort:    number;
  stat:      ISpecies;
}

export interface IType {
  slot: number;
  type: ISpecies;
}
