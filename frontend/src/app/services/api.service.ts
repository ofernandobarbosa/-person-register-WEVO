import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postUser(data: any) {
    return this.http.post<any>("http://localhost:3000/api/user", data)
  }

  getAllUsers() {
    return this.http.get<any>("http://localhost:3000/api/all-users")
  }

  putUser(data: any, id: string) {
    return this.http.put<any>(`http://localhost:3000/api/user/${id}`, data)
  }

  deleteUser(id: string){
    return this.http.delete<any>(`http://localhost:3000/api/user/${id}`)
  }
}
