import { MatDialog } from '@angular/material/dialog';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmployeeService } from 'src/app/service/employee/employee.service';
import { CoreService } from 'src/app/core/core.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'education',
    'company',
    'experience',
    'package',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _empService: EmployeeService,
    private _coreService: CoreService
  ) { }

  ngOnInit(): void {
    this.getEmployeeList()
  }

  getEmployeeList() {
    this._empService.getEmployeeList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  deleteEmployee(id: number) {
    console.log('id', id)
    // this._empService.deleteEmployee(id).subscribe({
    //   next: (res) => {
    //     this._coreService.openSnackBar('Employee deleted!', 'done');
    //     this.getEmployeeList();
    //   },
    //   error: console.log,
    // });
  }

  openEditForm(data: any) {
    console.log('data', data)
    // const dialogRef = this._dialog.open(EmpAddEditComponent, {
    //   data,
    // });

    // dialogRef.afterClosed().subscribe({
    //   next: (val) => {
    //     if (val) {
    //       this.getEmployeeList();
    //     }
    //   },
    // });
  }
}
