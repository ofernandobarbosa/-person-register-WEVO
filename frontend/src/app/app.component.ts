import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './services/api.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-intro',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  displayedColumns: string[] = ['nome', 'cpf', 'email', 'telefone', 'sexo', 'dataNascimento', 'action'];
  dataSource = new MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private dialog: MatDialog, private api: ApiService) {

  }
  ngOnInit(): void {
    this.getAllUsers();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '35%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllUsers();
      }
    })
  }

  getAllUsers() {
    this.api.getAllUsers()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          alert("Erro ao buscar os cadastros!")
        }
      })
  }

  editUser(element: any) {
    this.dialog.open(DialogComponent, {
      width: '35%',
      data: element,
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllUsers();
      }
    })
  }
}
