import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
Designation:string;
Username:String;
NoOfTeamMembers:number;
TotalCostOfAllProjects:number;
PendingTasks:number;
UpComingProjects:number;
ProjectCost:number;
CurrentExpenditure:number;
AvailableFunds:number;

Clients:string[] =[];
Projects:string[];
Years:number[] = [];
TeamMembersSummary:any=[];
TeamMembers:any=[];
today:any;

constructor(private dashboardService : DashboardService){

}
  ngOnInit(): void {
    //Initialising all data`
    this.today = new Date();
this.Designation = "Team Leader";
this.Username= "John Smith";
this.NoOfTeamMembers = 67;
this.TotalCostOfAllProjects = 240;
this.PendingTasks =15;
this.UpComingProjects =2;
this.ProjectCost = 2113507;
this.CurrentExpenditure = 96788;
this.AvailableFunds = 52536;
this.Clients = ["ABC Infotech","DEF Softare Solutions","GHI LTD"];
this.Projects = ["Project A","Project B","Project C","Project D"];
  for(let i =2019;i>=2010;i--){
    this.Years.push(i);
  }
this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();

this.TeamMembers=[
  {Region:"East",Members:[
    {ID:1,Name:"Ford",Status:"Available"},
    {ID:2,Name:"Miller",Status:"Available"},
    {ID:3,Name:"Jones",Status:"Busy"},
    {ID:4,Name:"James",Status:"Busy"},
  ]},
  {Region:"West",Members:[
    {ID:1,Name:"Soumya",Status:"Available"},
    {ID:2,Name:"Kanti",Status:"Available"},
    {ID:3,Name:"Biswas",Status:"Busy"},
    {ID:4,Name:"Basak",Status:"Busy"},
  ]},
  {Region:"South",Members:[
    {ID:1,Name:"Soumya",Status:"Available"},
    {ID:2,Name:"Kanti",Status:"Available"},
    {ID:3,Name:"Biswas",Status:"Busy"},
    {ID:4,Name:"Basak",Status:"Busy"},
  ]},
  {Region:"North",Members:[
    {ID:1,Name:"Soumya",Status:"Available"},
    {ID:2,Name:"Kanti",Status:"Available"},
    {ID:3,Name:"Biswas",Status:"Busy"},
    {ID:4,Name:"Basak",Status:"Busy"},
  ]}
]
  }

  onProjectChange(event){
   let val = event.target.innerHTML; 
    if(val == "Project A"){
      this.ProjectCost = 3223232;
      this.CurrentExpenditure = 343243;
      this.AvailableFunds = 43444;  
    }else  if(val == "Project B"){
      this.ProjectCost = 21167;
      this.CurrentExpenditure = 45453;
      this.AvailableFunds = 3324;  
    }else  if(val == "Project C"){
      this.ProjectCost = 765765;
      this.CurrentExpenditure = 4234324;
      this.AvailableFunds = 7657567;  
    }else  if(val == "Project D"){
      this.ProjectCost = 5435435;
      this.CurrentExpenditure = 67567;
      this.AvailableFunds = 45435;  
    }
  }
}
