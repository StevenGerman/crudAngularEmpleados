import { Component, OnInit } from '@angular/core';

import { Route, ActivatedRoute } from '@angular/router';

import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicios/crud.service';


@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  idEmpleado:any;

  constructor(
    private activeRoute:ActivatedRoute,
    private servicioEmpleados:CrudService

  ){
    this.idEmpleado= activeRoute.snapshot.paramMap.get('id');
    console.log(this.idEmpleado);
    this.servicioEmpleados.ObtenerEmpleado(this.idEmpleado).subscribe((respuesta)=>{
      console.log(respuesta);
    });

  }

  ngOnInit(): void {
    
  }
}
