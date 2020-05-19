import { Component, OnInit } from '@angular/core';
import { House } from './houses-house';
import { ActivatedRoute, Params } from '@angular/router';
import { HarryPotterService } from '../services/harrypotter.service';
@Component({
  selector: 'app-houses',
  template: `
    <div class="container">
      <h1>Houses at Hogwarts</h1>
      <div class="basicInfos">
        <div class="childOne">
          <p>Hogwarts School of Witchcraft and Wizardry, commonly shortened to Hogwarts, is a fictional British school of
            magic for students aged eleven to eighteen.</p>
          <p>Hogwarts is divided into four houses, each bearing the last name of its founder: Godric Gryffindor, Salazar Slytherin,
            Rowena Ravenclaw and Helga Hufflepuff. Throughout the school year, the houses compete for the House Cup,
            gaining and losing points based on actions such as performance in class and rule violations. The house with the
            highest end-of-year total wins and has its colours displayed in the Great Hall for the following school year.
            Each house also has its own Quidditch team that competes for the Quidditch Cup. These two competitions breed rivalries
            between the houses. Houses at Hogwarts are living and learning communities for their students. Each house is under the authority
            of one of the Hogwarts staff members. The Heads of the houses, as they are called, are in charge of giving their students
            important information, dealing with matters of severe punishment, and responding to emergencies in their houses, among other
            things. Each year, year level groups of every separate house share the same dormitory and classes. The dormitory and common room
            of a House are, barring rare exceptions, inaccessible to students belonging to other Houses.</p>

          <p>
            In the early days of Hogwarts, the four founders hand-picked students for their Houses. When the founders worried how students
            would be selected after their deaths, Godric Gryffindor took his hat off and they each added knowledge to it, allowing the Sorting
            Hat to choose the students by judging each student's qualities and placing them in the most appropriate house. The student's own
            choices may affect the decision: the clearest example is the Hat telling Harry that he would do well in Slytherin in the first
            book, but ultimately selecting Gryffindor after Harry asks it not to put him in Slytherin.</p>
          <p>
            The translators of the books' foreign editions had difficulty translating the "house" concept;
            in countries where this system does not exist, no word could adequately convey the importance of belonging to a house,
            the loyalty owed to it, and the pride taken in prizes won by the house.</p>
        </div>
        <div >
          <img class="childTwo" src="../../assets/allhouses.jfif">
        </div>
      </div>
        <div>
        <mat-accordion >
          <mat-expansion-panel *ngFor="let house of houses" (opened)="panelOpenState = true" (closed)="panelOpenState = false"
                               class="mat-elevation-z0">
            <mat-expansion-panel-header >
              <mat-panel-title>
                <b class="titleheader">{{house.name}}</b>
              </mat-panel-title>
              <mat-panel-description>
              </mat-panel-description>
            </mat-expansion-panel-header>
            <app-house-view-detail [houseId]=house._id></app-house-view-detail>
          </mat-expansion-panel>
        </mat-accordion>
      </div>
    </div>
    `,
  styles: [`
  .basicInfos {
    display: flex;
  }
  .childTwo {
    margin: 10px;
  }
  .titleheader {
    font-size: 18px
  }
  @media only screen and (max-width: 480px) {
    .basicInfos {
      display: block;
    }
    .childTwo {
     display: block;
      margin-right: auto;
      margin-right: auto;
    }
  }
  .container {
    padding: 15px
  }`]
})
export class HousesComponent implements OnInit {
  panelOpenState = false;
  houses: House[] = [];

  constructor(private activatedRoute: ActivatedRoute, private harryPotterService: HarryPotterService) { }

  ngOnInit() {
    this.harryPotterService.fetchHouses((result) => {
      this.houses = result;
    });
  }
}
