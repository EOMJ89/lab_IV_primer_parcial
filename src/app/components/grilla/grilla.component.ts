import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Auto } from 'src/app/services/autos.service';
import { BotonDeleteComponent } from 'src/app/components/boton-delete/boton-delete.component';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent {
  @Input() lista: Array<Auto>;
  @Output() recargarGrilla = new EventEmitter<boolean>();

  constructor() { }

  public RecargarGrilla(event) {
    console.log('Event de grilla ' + event);
    this.recargarGrilla.emit(event);
  }
}
