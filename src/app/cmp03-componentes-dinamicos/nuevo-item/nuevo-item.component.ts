import { Component, OnInit } from '@angular/core';
import { MiRouterService } from '../mi-router/mi-router.service';

@Component({
  selector: 'app-nuevo-item',
  templateUrl: './nuevo-item.component.html',
  styleUrls: ['./nuevo-item.component.css']
})
export class NuevoItemComponent implements OnInit {

  constructor(
    private miRouterService: MiRouterService
  ) { }

  ngOnInit(): void {
  }

  guardar() {
    setTimeout(() => {
      this.miRouterService.navigate(['/']);
    }, 1000);
  }

}
