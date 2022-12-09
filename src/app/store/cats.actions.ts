import { createAction, props } from '@ngrx/store';
import { IBreed, ICat } from '../interfaces';

interface Action {
  type: string;
}

export const getCats = createAction('getCats', props<{ limit: number }>());
export const setCats = createAction('setCats', props<{ data: ICat[] }>());

export const getBreeds = createAction('getBreeds', props<{ breed: string }>());
export const setBreeds = createAction('setBreeds', props<{ data: IBreed[] }>());

export const setBreed = createAction('setBreed', props<{breed: IBreed}>)