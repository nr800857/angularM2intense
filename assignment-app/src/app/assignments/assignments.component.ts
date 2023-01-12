import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  titre="Liste des devoirs";
  assignmentSelectionne!:Assignment;
  public dataSource: any; 

  assignments:Assignment[] = [];
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private assignmentsService:AssignmentsService) { }

   ngOnInit(): void {
    console.log("appelé à l'initialisation du composant");
    this.assignmentsService.getAssignments()
    .subscribe(assignments => {
      this.assignments = assignments
      this.dataSource = new MatTableDataSource<Assignment>(assignments);
      this.dataSource.paginator = this.paginator;
      this.totalSize = this.assignments.length;
      this.iterator();
    });
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }


  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.assignments.slice(start, end);
    this.dataSource = part;
  }

  assignmentClique(assignment:Assignment){
    console.log("assignmentClique : " + assignment.nom);
    this.assignmentSelectionne = assignment;
  }

  
}
