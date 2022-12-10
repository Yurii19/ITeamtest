import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { CatsService } from '../cats.service';
import { IBreed, ICat } from '../interfaces';
import { getBreeds, getCats } from './cats.actions';

@Injectable()
export class CatsEffects {
  constructor(private actions$: Actions, private catsService: CatsService) {}

  newCatsSet$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(getCats),
      mergeMap((action) =>
        this.catsService
          .getCats(action.filter)
          .pipe(map((data: ICat[]) => ({ type: 'setCats', data })))
      )
    );
  });

  breedsSet$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(getBreeds),
      mergeMap(() =>
        this.catsService.getBreeds().pipe(
          map((data: any) => {
            const breeds: IBreed[] = data.map((breed: any) => ({
              id: breed.id,
              name: breed.name,
            }));
            return {
              type: 'setBreeds',
              data: [{ name: 'All breeds', id: 'all_breeds' }, ...breeds],
            };
          })
        )
      )
    );
  });
}
