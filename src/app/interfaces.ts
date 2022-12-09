export interface ICat {
  id: string;
  width: number;
  height: number;
  url: string;
  breeds: [];
  //favourite:{}
}
export interface ICatState {
  catsSet: ICat[];
}

export interface IAppState {
  cats: ICatState;
}
