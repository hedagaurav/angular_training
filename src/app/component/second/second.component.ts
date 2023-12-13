import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent implements OnInit{
  name: string = '';

  // othername : string = '';

  second_list = [
    {'id':1, 'name': 'gaurav',},
    {'id':2, 'name': 'gaurav',},
    {'id':3, 'name': 'gaurav',},
    {'id':4, 'name': 'gaurav',},
    {'id':5, 'name': 'gaurav',},
  ]
  constructor(private route: ActivatedRoute, private router : Router){
    // for parameters of routes
    this.route.params.subscribe(params => {
      this.name = params['user_name']
    })
  }

  ngOnInit(){
    // get single query parameter
    const othername = this.route.snapshot.paramMap.get('othername');
  }

  select_item(second_id:number) {
    this.router.navigate(['second',second_id]);
  }
}
