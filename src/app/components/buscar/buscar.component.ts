import { Component, OnInit } from '@angular/core';
import { Auto } from 'src/app/services/autos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  public lista: Array<Auto> = null;
  public sinResult = false;

  constructor() {}

  ngOnInit() {
    this.lista = new Array<Auto>();
  }
  public MostrarElemento(event: Array<Auto>) {
    // console.log('Mostrar Elemento: ', event);
    if (event.length > 0) {
      this.sinResult = false;
      this.lista = event;
    } else {
      this.sinResult = true;
    }

    // console.log('Lista: ', this.lista);
  }
}
