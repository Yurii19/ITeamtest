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
      id: 'string',
      width: 0,
      height: 0,
      url: 'https://img.freepik.com/premium-vector/cat-vector-kitten-calico-cartoon-character_71328-128.jpg?w=2000',
      breeds: [],
      //favourite:{}
    },
  ],
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
    default:
      return state;
  }
}

//export const addTask = createAction('addTask', props<{ task: ITask }>());
// export const getCats = createAction('getCats', props<{ limit: number }>());
// export const setCats = createAction('setCats', props<{data: any}>());

// export const removeTask = createAction(
//   'removeTask',
//   props<{ taskId: Number }>()
// );

// export const markTaskAsDone = createAction(
//   'markTaskAsDone',
//   props<{ taskId: Number }>()
// );
