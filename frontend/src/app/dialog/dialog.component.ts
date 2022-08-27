import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  userForm!: FormGroup

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name : ['', Validators.required],
      cpf : ['', Validators.required],
      email : ['', Validators.required],
      telefone : ['', Validators.required],
      sexo : ['', Validators.required],
      dataNascimento : ['', Validators.required],
    })
  }
  addUser():void{
    console.log(this.userForm.value)
  }

}
