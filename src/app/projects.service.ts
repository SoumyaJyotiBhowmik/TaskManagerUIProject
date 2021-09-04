import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Project } from './project';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})




export class ProjectsService {

  constructor(private httpClient: HttpClient) { }

  getAllProjects():Observable<Project[]>{
    const url = "api/getProjects";
    return this.httpClient.get<Project[]>(url).pipe(map(
      (data:Project[])=>{
        for(let i=0;i<data.length;i++){
          data[i].teamSize = data[i].teamSize * 100;
        }
      return data;

      }
    ));
  }

  insertProject(newProject: Project):Observable<Project>{
    const url = "api/insertProject";
    return this.httpClient.post<Project>(url,newProject);
  }
  updateProject(project: Project):Observable<Project>{
    const url = "api/updateProject";
    return this.httpClient.put<Project>(url,project);
  }
  deleteProject(id: number){
    const url = "api/deleteProject/"+id;
    return this.httpClient.delete(url);
  }
  searchProjects(searchBy:string,searchText:string) : Observable<Project[]>{
    const url = "api/search/"+searchBy+"/"+searchText;
    return this.httpClient.get<Project[]>(url,{responseType : "json"});
  }

}
