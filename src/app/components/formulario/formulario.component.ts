import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AutosService } from "src/app/services/autos.service";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})
export class FormularioComponent implements OnInit {
  public profileGroup: FormGroup;
  public empleadoCargado = false;
  constructor(private http: AutosService) {}

  ngOnInit() {
    this.profileGroup = new FormGroup({
      nombre: new FormControl("", [Validators.required]),
      apellido: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      legajo: new FormControl("", [
        Validators.required,
        Validators.min(1000),
        Validators.max(2000)
      ]),
      sueldo: new FormControl("", [
        Validators.required,
        Validators.min(10000),
        Validators.max(150000)
      ]),
      sexo: new FormControl("femenino", [Validators.required]),
      RutaDeFoto: new FormControl("", [Validators.required])
    });
  }

  public Mostrar() {
    this.empleadoCargado = false;
    console.log(this.profileGroup.value);
    const empleadoSubida = { empleado: this.profileGroup.value };
    console.log("Voy a subir");
    this.http.AñadirAuto(empleadoSubida).subscribe((rta: any) => {
      console.log(rta.rta);
      if (rta.rta.ok === 1) {
        this.empleadoCargado = true;
        console.log("Cargado");
      }
    });
  }
}
