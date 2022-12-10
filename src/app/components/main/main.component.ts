import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, Observable, Subject, takeUntil } from 'rxjs';
import { IAppState, IBreed, ICat } from 'src/app/interfaces';
import { getBreeds, getCats } from 'src/app/store/cats.actions';
import { selectBreeds, selectCats } from './cats.selector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  filters: FormGroup = new FormGroup({
    limit: new FormControl(10),
    breeds: new FormControl(),
  });

  cats$: Observable<ICat[]> = new Observable();
  breeds$: Observable<IBreed[]> = new Observable();

  destroy$: Subject<void> = new Subject<any>();

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.cats$ = this.store.select(selectCats);
    this.breeds$ = this.store.select(selectBreeds);

    this.getCatsBySelect();

    this.store.dispatch(getBreeds({ breed: '' }));

    this.filters?.valueChanges
      .pipe(takeUntil(this.destroy$), debounceTime(500))
      .subscribe(() => {
        this.getCatsBySelect();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(void 0);
    this.destroy$.unsubscribe();
  }

  getCatsBySelect(): void {
    //this.store.dispatch(getCats({ filter: this.filters.value }));
  }
}
