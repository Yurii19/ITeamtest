import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StateObservable, Store } from '@ngrx/store';
import { debounce, debounceTime, delay, Observable, takeLast } from 'rxjs';
import { CatsService } from 'src/app/cats.service';
import { IAppState, IBreed, ICat, IFilter } from 'src/app/interfaces';
import { getBreeds, getCats, setFilterLimit } from 'src/app/store/cats.actions';
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
    console.log(this.filters.value)
    this.cats$ = this.store.select(selectCats);
    this.breeds$ = this.store.select(selectBreeds);

    this.getCatsBySelect();

    this.store.dispatch(getBreeds({ breed: '' }));

    this.filters?.valueChanges.pipe(debounceTime(500))
      .subscribe(() => {
        //this.store.dispatch(setFilterLimit({limit}));
        this.getCatsBySelect()
       // this.getCatsBySelect();
      });
   // this.store.dispatch(setFilters({breed: this}))
   // this.filters.valueChanges.subscribe(d => console.log(d))
  }

  getCatsBySelect(): void {
    //console.log(this.filters.value)
    const filter:IFilter = this.filters.value;
    this.store.dispatch(getCats({filter}));
  }
}
