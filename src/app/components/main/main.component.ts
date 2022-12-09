import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CatsService } from 'src/app/cats.service';

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

 cats$: any = this.catService.getCats('limit=10&')

  constructor(
    private catService: CatsService
  ){}

  ngOnInit(): void {
  //this.cats$ = this.catService.getCats('limit=10&')
  this.catService.getBreeds().subscribe((d: any) => console.log(d))
  //this.cats$.subscribe((d: any)  => console.log(d))
    console.log('ngOninit')
  }

}
