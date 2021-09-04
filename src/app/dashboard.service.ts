import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  constructor() { }

  getTeamMembersSummary():any[]{
    var TeamMembersSummary = [
      {Region:"East",TeamMembersCount:20,TemporarilyUnavailableMembers : 4},
      {Region:"West",TeamMembersCount:12,TemporarilyUnavailableMembers : 2},
      {Region:"North",TeamMembersCount:34,TemporarilyUnavailableMembers : 1},
      {Region:"South",TeamMembersCount:44,TemporarilyUnavailableMembers : 0}
    ]
    return TeamMembersSummary;
  } 
  
}
