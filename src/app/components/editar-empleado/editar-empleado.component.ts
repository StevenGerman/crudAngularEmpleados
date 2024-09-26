import { Component, OnInit } from '@angular/core';

import { Route, ActivatedRoute, Router } from '@angular/router';


import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicios/crud.service';


@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  formularioEmpleados: FormGroup;

  idEmpleado:any;

  constructor(
    public formulario:FormBuilder,
    private activeRoute:ActivatedRoute,
    private servicioEmpleados:CrudService,
    public ruteador:Router

  ){
    this.idEmpleado= activeRoute.snapshot.paramMap.get('id');
    console.log(this.idEmpleado);

    this.servicioEmpleados.ObtenerEmpleado(this.idEmpleado).subscribe((respuesta)=>{
      console.log(respuesta);
      this.formularioEmpleados.setValue({
        nombre:respuesta[0]['nombre'],
        correo:respuesta[0]['correo']
      });
    });

    this.formularioEmpleados = this.formulario.group({
      nombre:[''],
      correo:['']
    });

    

  }

  ngOnInit(): void {
    
  }

  enviarDatos():any{
    console.log(this.idEmpleado);
    console.log(this.formularioEmpleados.value); 
    this.servicioEmpleados.EditarEmpleado(this.idEmpleado,this.formularioEmpleados.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-empleado');
    })
  

  }



  }
