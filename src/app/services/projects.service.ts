import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProjectsService {
  private url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getProject(id: string) {
    return this.http.get(`${this.url}/projects/${id}`);
  }

  getAllProjects() {
    return this.http.get(`${this.url}/projects`);
  }
}
