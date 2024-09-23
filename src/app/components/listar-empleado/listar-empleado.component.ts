import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';

import { CrudService } from 'src/app/servicios/crud.service';


@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit{

  Empleados:any;

  constructor(
    private servicioEmpleados:CrudService

  ){

  }

  ngOnInit(): void {
    this.servicioEmpleados.ObtenerEmpleados().subscribe(respuesta =>{
      console.log(respuesta);
      this.Empleados= respuesta;
    });
  }

  borrarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Desea borrar el registro?")){
      this.servicioEmpleados.BorrarEmpleado(id).subscribe((respuesta) =>{
        this.Empleados.splice(iControl,1);
      });
    }
    
  }
}
