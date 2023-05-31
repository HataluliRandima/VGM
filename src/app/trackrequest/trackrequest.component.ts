import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-trackrequest',
  templateUrl: './trackrequest.component.html',
  styleUrls: ['./trackrequest.component.css'],
})
export class TrackrequestComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.getallborrowbymember().subscribe((res: any) => {
      console.log("Resutls :", res);
    });
  }
}
