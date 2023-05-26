import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  ngOnInit(): void {
    const osbTest$ = new Observable( observer => {
      observer.next('Return from observable')
      observer.next('This is second observable')
      observer.next('This is third observable')
    }).subscribe( value => {
      console.log(value)
    })

    
  }

}
