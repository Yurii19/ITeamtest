import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StateObservable, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CatsService } from 'src/app/cats.service';
import { IAppState } from 'src/app/interfaces';
import { getCats } from 'src/app/store/cats.actions';
//import { getCats } from 'src/app/store/store';
import { selectCats, selectCatsState } from './cats.selector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  
})
export class MainComponent implements OnInit {

  filters: FormGroup = new FormGroup({
    limit:  new FormControl(10),
    breeds:  new FormControl(),
  })

 

  cats : any[]= [ 'murka', 'katika', 'rudyk']

 cats$: any = new Observable();

  constructor(
    private catService: CatsService,
    private store : Store<IAppState>
  ){}

  ngOnInit(): void {

  this.cats$ = this.store.select(selectCats)
  this.store.dispatch(getCats({limit: 3}))
  this.cats$.subscribe((d:any) => console.log(d))
  this.store.subscribe(d => console.log(d))
  }

}
