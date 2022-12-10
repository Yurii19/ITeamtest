import { createAction, props } from '@ngrx/store';
import { IBreed, ICat, IFilter } from '../interfaces';

export const getCats = createAction('getCats', props<{ filter: IFilter }>());
export const setCats = createAction('setCats', props<{ data: ICat[] }>());

export const getBreeds = createAction('getBreeds', props<{ breed: string }>());
export const setBreeds = createAction('setBreeds', props<{ data: IBreed[] }>());
