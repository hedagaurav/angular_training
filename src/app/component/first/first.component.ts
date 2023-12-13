import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule, DatePipe, CurrencyPipe, DecimalPipe],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit {

  // pipes
  birthdate = new Date('1993-10-28');
  gift_amount = 2810.199354;
  decimal_value = 300;

  show: any;
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    
    
  }
  getData(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
    // console.log(this.http.get<any>('https://jsonplaceholder.typicode.com/posts'));
  }

  getPost() {
    this.getData().subscribe(
      {
        next(res: any) {
          console.log(res);
          
          // return res;
        },
        error(err) {
          console.log('err=',err);
        },
      }
      
      // (res) => {
      //   this.show = res;    
      // }
    );
    // console.log(this.show);
  }

}
