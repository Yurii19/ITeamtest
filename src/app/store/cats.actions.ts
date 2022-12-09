import { createAction, props } from '@ngrx/store';
import { ICat } from '../interfaces';

interface Action {
  type: string;
}

export const getCats = createAction('getCats', props<{ limit: number }>());
export const setCats = createAction('setCats', props<{ data: ICat[] }>());
