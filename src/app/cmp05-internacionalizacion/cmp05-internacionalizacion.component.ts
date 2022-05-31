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
