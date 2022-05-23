import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-cmp02-viewchild',
  templateUrl: './cmp02-viewchild.component.html',
  styleUrls: ['./cmp02-viewchild.component.css']
})
export class Cmp02ViewchildComponent implements OnInit {

  @ViewChild(ModalComponent) modal1!: ModalComponent;
  @ViewChild('modal2') modal2!: ModalComponent;

  constructor() { }

  ngOnInit(): void {
  }

  abrirModal1() {
    this.modal1.abrir();
  }

  abrirModal2() {
    this.modal2.abrir();
  }

}
