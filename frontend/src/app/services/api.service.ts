import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postUser(data: any) {
    return this.http.post<any>("https://backend-ofernandobarbosa.cloud.okteto.net/api/user", data)
  }

  getAllUsers() {
    return this.http.get<any>("https://backend-ofernandobarbosa.cloud.okteto.net/api/all-users")
  }

  putUser(data: any, id: string) {
    return this.http.put<any>(`https://backend-ofernandobarbosa.cloud.okteto.net/api/user/${id}`, data)
  }

  deleteUser(id: string){
    return this.http.delete<any>(`https://backend-ofernandobarbosa.cloud.okteto.net/api/user/${id}`)
  }
}
