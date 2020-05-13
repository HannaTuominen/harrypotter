import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HarryPotterService} from '../services/harrypotter.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-spells',
  template: `<h1>Spells</h1>
  <p>There are currently {{spellAmount}} spells listed in the Harry Potter.</p>
  <mat-form-field>
    <mat-label>Filter</mat-label>
    <input matInput (keyup)="applyFilter($event)" placeholder="Ex. Charm">
  </mat-form-field>
  <table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8" width="100%">
    <!-- Name Column -->
    <ng-container matColumnDef="name" >
      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>
      <td mat-cell *matCellDef="let element"> {{element.spell}} </td>
    </ng-container>

    <!-- Effect Column -->
    <ng-container matColumnDef="effect">
      <th mat-header-cell *matHeaderCellDef mat-sort-header> Effect </th>
      <td mat-cell *matCellDef="let element"> {{element.effect}} </td>
    </ng-container>

    <!-- Type Column -->
    <ng-container matColumnDef="type">
      <th mat-header-cell *matHeaderCellDef mat-sort-header> Type </th>
      <td mat-cell *matCellDef="let element"> {{element.type}} </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>

  `,
  styles: [`.mat-form-field { font-size: 14px; width: 100%; }
  .mat-elevation-z8 {box-shadow: none;}`]
})
export class SpellsComponent implements OnInit {
  dataSource;
  displayedColumns: string[] = ['name', 'effect', 'type'];
  spellAmount;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private activatedRoute: ActivatedRoute, private harryPotterService: HarryPotterService) { }

  ngOnInit() {
    this.harryPotterService.fetchSpells((result) => {
      this.dataSource = new MatTableDataSource(result);
      this.spellAmount = result.length;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
