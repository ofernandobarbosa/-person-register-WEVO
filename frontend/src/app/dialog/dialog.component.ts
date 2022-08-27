import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  userForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private api: ApiService, private dialogRef : MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      sexo: ['', Validators.required],
      dataNascimento: ['', Validators.required],
    })
  }

  addUser() {
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
  }

}
