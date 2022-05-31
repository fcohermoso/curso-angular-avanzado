import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css'],
  animations: [
    trigger('zoom', [
      state('con-zoom', style({
        transform: 'scale(1.6)'
      })),
      state('sin-zoom', style({
        transform: 'scale(1)'
      })),
      transition('sin-zoom <=> con-zoom', animate('300ms 0s ease-out')),
      //transition('con-zoom => sin-zoom', animate('500ms'))
    ])
  ]
})

export class ZoomComponent implements OnInit {
  zoomState: string = 'sin-zoom';

  constructor() { }

  ngOnInit(): void {
  }

  cambiarEstado() {
    this.zoomState = (this.zoomState === 'sin-zoom') ? 'con-zoom' : 'sin-zoom';
  }

}
