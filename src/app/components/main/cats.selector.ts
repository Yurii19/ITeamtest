import { state } from '@angular/animations';
import { createSelector } from '@ngrx/store';
import { IAppState, ICatState } from 'src/app/interfaces';


export const selectCatsState = (state: IAppState) => state.cats;

export const selectCats = createSelector(
    selectCatsState,
    (state: ICatState) => state.catsSet
) 