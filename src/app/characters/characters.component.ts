import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import { Character } from './characters-character';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { HarryPotterService} from '../services/harrypotter.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-characters',
  template: `
  <mat-drawer-container class="example-container" autosize>
    <mat-drawer #drawer class="example-sidenav" mode="side" [opened]="true">

      <div class="characters">
        <div class="char-header">
          <h1>Characters</h1>
        </div>
      <div class="char-btn" (click)="showFiller = false">
        <button type="button" class="button-side" (click)="drawer.toggle()">
          <span class="material-icons" mat-button >
          keyboard_arrow_left
          </span>
        </button>
      </div>
      </div>
      <mat-form-field>
        <mat-label>Filter</mat-label>
        <input matInput (keyup)="applyFilter($event)" placeholder="Filter by Name">
      </mat-form-field>
      <table mat-table [dataSource]="characters" matSort class="mat-elevation-z8">
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Names</th>
          <td mat-cell *matCellDef="let element" (click)="newUrl(element._id); this.innerWidth <= 480 ? drawer.toggle(): null">
            <button mat-button color="primary">
            {{element.name}}
            </button>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    </mat-drawer>
    <div class="container">
      <div *ngIf="!showFiller" (click)="showFiller = true">
        <button type="button" class="button-side" (click)="drawer.toggle()">
        <span class="material-icons" mat-button >
        keyboard_arrow_right
        </span>
        </button>
      </div>
      <div>
        <app-viewcharacter-detail [currentUrl]="this.router.url"></app-viewcharacter-detail>
      </div>
    </div>

  </mat-drawer-container>
  `,

  styles: [`
  .example-container {
    width: 100%;
    height: 100vh;
    /*border: 1px solid rgba(0, 0, 0, 0.5);*/
  }

  .example-sidenav-content {
    display: flex;
    height: 100%;
    margin-left: 10px;
    /*align-items: center;*/
    /*justify-content: center;*/
  }

  .example-sidenav {
    padding: 10px;
    overflow: hidden;
  }
  .character-list {
    list-style-type: none;
  }
  .characters {
    display: flex;
  }
  .char-header {
    flex-grow: 1;
    margin-right: 5px;
  }
  .char-btn {
    margin-right: 5px;
  }
  .button-side {
    border-radius: 0;
    border: none;
    background: none;
  }
  .mat-form-field {
    font-size: 14px;
    width: 100%;
  }
  .mat-elevation-z8 {
    box-shadow: none;
  }
  tr.mat-header-row {
    height: 40px;
  }

  .container {
    padding: 15px
  }
  .mat-button {
    padding: 0;
    width: 100%;
    height: 100%;
  }
  td.mat-cell:last-of-type {
    padding:0;
  }`]
})
export class CharactersComponent implements OnInit {
  showFiller = true;
  characters;
  selectedId: number;
  displayedColumns: string[] = ['name'];
  innerWidth: any;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public router: Router, private activatedRoute: ActivatedRoute, private harryPotterService: HarryPotterService) { }

  newUrl(charId) {
    if (this.innerWidth <= 480) {
      this.showFiller = false;
    }
    this.router.navigate(['characters', {id: charId}]);
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;

    this.activatedRoute.params.subscribe((paramss: Params) => {
    const id = paramss.id;
    this.selectedId = id;
  });

    this.harryPotterService.fetchCharacters((result) => {
    this.characters = new MatTableDataSource(result);
    this.characters.sort = this.sort;
  });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.characters.filter = filterValue.trim().toLowerCase();
  }

}
