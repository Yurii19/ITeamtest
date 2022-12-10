//import { ITaskState } from '../Interfaces';
//import { ITask } from '../Interfaces';
import { ICat } from '../interfaces';
import { createAction, props } from '@ngrx/store';
import { ICatState } from '../interfaces';
import { Actions } from '@ngrx/effects';
interface Action {
  type: string;
}
export const initialCatsState: ICatState = {
  catsSet: [
    {
      id: '',
      width: 0,
      height: 0,
      url: 'https://img.freepik.com/premium-vector/cat-vector-kitten-calico-cartoon-character_71328-128.jpg?w=2000',
      breeds: [],
    },
  ],
  breedsSet: [{ name: 'addf', id: 'asdf' }],
  filters: {
    breeds: { name: '', id: '' },
    limit: 0,
  },
};

export function catsReducer(state: ICatState = initialCatsState, action: any) {
  switch (action.type) {
    case 'setFilterLimit':
      const newState = {
        ...state,
        filters: { ...state.filters, limit: action.limit },
      };
      // console.log(newState);
      return newState;
    case 'getCats':
      return {
        ...state,
      };
    case 'setCats':
      return {
        ...state,
        catsSet: action.data,
      };
    case 'getBreeds':
      return {
        ...state,
      };
    case 'setBreeds':
      return {
        ...state,
        breedsSet: [...action.data],
      };
    default:
      return state;
  }
}
