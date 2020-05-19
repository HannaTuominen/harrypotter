import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HarryPotterService} from '../services/harrypotter.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-spells',
  template: `<div class="container">
    <h1>Spells</h1>
    <div class="basic-info">
      <div class="info-text"><p>There are currently {{spellAmount}} spells listed. Each of the spells have
      different effects and types.</p></div>
      <div><img class="spells-image" src="../../assets/spellsimage.png" alt="spells Image"></div>
    </div>
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
</div>
  `,
  styles: [`.mat-form-field { font-size: 14px; width: 100%; }
  .mat-elevation-z8 {box-shadow: none;}
  .container {padding: 15px}
  .basic-info { display: flex;}
  .spells-image {width: 100%}
  .info-text {flex-grow: 1}
  @media only screen and (max-width: 480px) {
    .container {
      margin: 1px;
      overflow: hidden;
    }
  }`]
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
