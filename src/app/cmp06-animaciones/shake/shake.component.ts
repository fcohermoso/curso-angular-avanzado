import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shake',
  templateUrl: './shake.component.html',
  styleUrls: ['./shake.component.css'],
  animations: [
    trigger('shake', [
      transition( 'no-shaking <=> shaking', [
        animate(500, keyframes([
          style({
            transform: 'rotate(0deg)',
            offset: 0
          }),
          style({
            transform: 'rotate(-30deg)',
            offset: 0.2
          }),
          style({
            transform: 'rotate(30deg)',
            offset: 0.4
          }),
          style({
            transform: 'rotate(-30deg)',
            offset: 0.6
          }),
          style({
            transform: 'rotate(30deg)',
            offset: 0.8
          }),
          style({
            transform: 'rotate(0deg)',
            offset: 1
          })
        ]))
      ])
    ])
  ]
})
export class ShakeComponent implements OnInit {

  shakeState: string = 'no-shaking';

  constructor() { }

  ngOnInit(): void {
  }

  cambiarEstado() {
    this.shakeState = (this.shakeState === 'no-shaking') ? 'shaking' : 'no-shaking';
  }

}
