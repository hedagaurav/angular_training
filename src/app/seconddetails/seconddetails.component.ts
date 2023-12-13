import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Route, RouterLink } from '@angular/router';

@Component({
  selector: 'app-seconddetails',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './seconddetails.component.html',
  styleUrl: './seconddetails.component.css'
})
export class SeconddetailsComponent implements OnInit{

  route1 : ActivatedRoute = inject(ActivatedRoute);
  public second_id : number|undefined;
  constructor(private route : ActivatedRoute) {
    this.second_id = Number(this.route1.snapshot.params['id']);
  }

  ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get('id');
    // this.second_id = Number(id);
  }
  
}
