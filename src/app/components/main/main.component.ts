import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StateObservable, Store } from '@ngrx/store';
import { debounce, debounceTime, delay, Observable, takeLast } from 'rxjs';
import { CatsService } from 'src/app/cats.service';
import { IAppState, IBreed, ICat } from 'src/app/interfaces';
import { getBreeds, getCats } from 'src/app/store/cats.actions';
//import { getCats } from 'src/app/store/store';
import { selectBreeds, selectCats, selectCatsState } from './cats.selector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  filters: FormGroup = new FormGroup({
    limit: new FormControl(10),
    breeds: new FormControl(),
  });

  //cats: any[] = ['murka', 'katika', 'rudyk'];

  cats$: Observable<ICat[]> = new Observable();
  breeds$: Observable<IBreed[]> = new Observable();

  constructor(
    //private catService: CatsService,
    private store: Store<IAppState>
  ) {}

  ngOnInit(): void {
    this.cats$ = this.store.select(selectCats);
    this.breeds$ = this.store.select(selectBreeds);
    this.getCatsBySelect();
    this.store.dispatch(getBreeds({breed: ''}));
    this.filters.get('limit')?.valueChanges.pipe(debounceTime(500)).subscribe(() => this.getCatsBySelect())
  }

  getCatsBySelect():void {
    const limit: number = this.filters.get('limit')?.value;
    this.store.dispatch(getCats({ limit }));
  }
}
