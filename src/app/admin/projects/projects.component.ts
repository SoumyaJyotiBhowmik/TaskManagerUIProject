import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../../projects.service';
import {Project} from 'src/app/project';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects:Project[];
  newProject:Project = new Project();
  editProject:Project = new Project();
  editProjectIndex:number;
  deleteProject:Project = new Project();
  deleteIndex:any = null;
  searchBy:string = "ProjectName";
  searchText:string = "";
  constructor(private projectService : ProjectsService) {
  }

  ngOnInit() {
    this.projectService.getAllProjects().subscribe(
(response:Project[])=>{
  console.log(response);
  this.projects = response;
}
    );
  }

  onSaveClick():any{
    this.projectService.insertProject(this.newProject).subscribe(
      (response)=>{
        //Add project to GRID
        let p:Project = new Project();
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        this.projects.push(p);

        //Clearing dialog box values
        this.newProject.projectID = null;
        this.newProject.projectName = null;
        this.newProject.dateOfStart = null;
        this.newProject.teamSize = null;
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  onEditClick(event,index:number){
    this.editProjectIndex = index;
    this.editProject = this.projects[index];
  }
  onUpdateClick(){
    this.projectService.updateProject(this.editProject).subscribe(
      (response:Project)=>{
        this.projects[this.editProjectIndex] = response;

        this.editProject.projectID = null;
        this.editProject.projectName = null;
        this.editProject.dateOfStart = null;
        this.editProject.teamSize = null;

      },
      (error)=>{
console.log(error);
      }
    )
  }

  onDeleteClick(event,index:any){
this.deleteIndex = index;
this.deleteProject = this.projects[index];
  }
  onDeleteConfirm(){
this.projectService.deleteProject(this.deleteProject.projectID).subscribe(
  (response)=>{
this.projects.splice(this.deleteIndex,1);

this.deleteProject.projectID = null;
this.deleteProject.projectName = null;
this.deleteProject.dateOfStart = null;
this.deleteProject.teamSize = null;
  },
  (error)=>{
console.log(error);
  }
);
  }
  onSearchClick(){
    this.projectService.searchProjects(this.searchBy,this.searchText).subscribe(
      (response:Project[])=>{
        this.projects = response;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
