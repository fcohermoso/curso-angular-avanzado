import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cmp05-internacionalizacion',
  templateUrl: './cmp05-internacionalizacion.component.html',
  styleUrls: ['./cmp05-internacionalizacion.component.css']
})
export class Cmp05InternacionalizacionComponent implements OnInit {

  listaLang: string[] = ['es', 'en'];
  lenguajeSeleccionado: string;
  precio: number = 3;
  fecha = new Date();

  constructor(
    private translateService: TranslateService
  ) {
    this.lenguajeSeleccionado = translateService.getDefaultLang();
   }

  ngOnInit(): void {
  }

  cambioIdioma(event: any) {
    this.lenguajeSeleccionado = event.target.value;
    this.translateService.use(this.lenguajeSeleccionado);
  }

}
