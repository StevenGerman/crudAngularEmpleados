import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';

import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit{

  formularioEmpleados: FormGroup;

  constructor(public formulario:FormBuilder,
    private servicioEmpleado:CrudService,
    private ruteador:Router
  ){

    this.formularioEmpleados = this.formulario.group({
      nombre:[''],
      correo:['']
    });
  }

  ngOnInit(): void {
    
  }

  enviarDatos():any{ 
    
    console.log(this.formularioEmpleados.value);
    this.servicioEmpleado.AgregarEmpleado(this.formularioEmpleados.value).subscribe();

    this.ruteador.navigateByUrl('/listar-empleado');
  }


}