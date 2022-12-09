//import { ITaskState } from '../Interfaces';
//import { ITask } from '../Interfaces';
import { ICat } from '../interfaces';
import { createAction, props } from '@ngrx/store';
import { ICatState } from '../interfaces';
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
  breedsSet:[{name: 'addf', id:'asdf'}],
  selectedBreed: {name: '',id:''}
};

export function catsReducer(state: ICatState = initialCatsState, action: any) {
  switch (action.type) {
    case 'getCats':
      return {
        ...state,
      };
    case 'setCats':
      return {
        ...state, catsSet : action.data
      };
      case 'getBreeds':
        return {
          ...state,
        };
      case 'setBreeds':
        return {
          ...state, breedsSet :[ {name: 'None', id: 'none'},...action.data ]
        };
    default:
      return state;
  }
}
