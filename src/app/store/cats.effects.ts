import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, mergeMap } from 'rxjs';
import { CatsService } from '../cats.service';
import { ICat } from '../interfaces';
import { getCats, setCats } from './cats.actions';

@Injectable()
export class CatsEffects {
  constructor(private actions$: Actions, private catsService: CatsService) {
    console.log(this.actions$);
    this.actions$.subscribe((d) => console.log(d));
  }

  newControlsValues$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(getCats),
      mergeMap((action) =>
        this.catsService
          .getCats(action.limit)
          .pipe(map((data: ICat[]) => ({ type: 'setCats', data })))
      )
    )
  );

  //requestFilteredDiscounts$ = createEffect
  // requestFilteredDiscounts$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(getFilteredData),
  //     mergeMap((action) =>
  //       this.filterService.requestFilteredData(action.data).pipe(
  //         map((data: any) => {
  //          // console.log(data);

  //           return { type: 'requestFilteredData', data: data };
  //         })
  //       )
  //     )
  //   )
  // );

  //   newControlsValues$ = createEffect(() =>
  //     this.actions$.pipe(
  //       ofType(getControlsValues),
  //       mergeMap(() =>
  //         this.filterService.requestRawData().pipe(
  //           map((data: any) => {
  //            // console.log(data);
  //             const processedData = {
  //               locations: data[0],
  //               categories: data[1],
  //               tags: data[2],
  //               vendors: data[3],
  //             };
  //             return { type: 'requestControlsValues', data: processedData };
  //           })
  //         )
  //       )
  //     )
  //   );
}
