import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  userForm!: FormGroup
  actionBtn: string = "Salvar"

  constructor(private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      sexo: ['', Validators.required],
      dataNascimento: ['', Validators.required],
    })

    if(this.editData){
      this.actionBtn = "Editar"
      this.userForm.controls['nome'].setValue(this.editData.nome);
      this.userForm.controls['cpf'].setValue(this.editData.cpf);
      this.userForm.controls['email'].setValue(this.editData.email);
      this.userForm.controls['telefone'].setValue(this.editData.telefone);
      this.userForm.controls['sexo'].setValue(this.editData.sexo);
      this.userForm.controls['dataNascimento'].setValue(this.editData.dataNascimento);
    }
  }

  addUser() {
    if(!this.editData){
      if (this.userForm.valid) {
        this.api.postUser(this.userForm.value)
          .subscribe({
            next: (res) => {
              alert("Usuário cadastrado com sucesso!");
              this.userForm.reset();
              this.dialogRef.close('save');
            },
            error: () => {
              alert("Erro ao adicionar o produto!");
            }
          })
      }
    }else{
      this.updateUser()
    }
  }

  updateUser(){
    this.api.putUser(this.userForm.value, this.editData._id)
    .subscribe({
      next:(res)=>{
        alert("Usuário atualizado com sucesso!");
        this.userForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("Erro ao tentar atualizar informações do usuário!")
      }
    })
  }
}
