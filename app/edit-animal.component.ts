import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
        <div *ngIf="childSelectedAnimal">
          <h3>{{childSelectedAnimal.species}} Details</h3>

          <hr>
          <h3>Edit Form</h3>
          <label>Species:</label><br>
          <input [(ngModel)]="childSelectedAnimal.species"><br>
          <label>Name</label><br>
          <input [(ngModel)]="childSelectedAnimal.name"><br>
          <label>Age</label><br>
          <input type="number" [(ngModel)]="childSelectedAnimal.age"><br>
          <label>Diet</label><br>
          <input [(ngModel)]="childSelectedAnimal.diet"><br>
          <label>Location</label><br>
          <input [(ngModel)]="childSelectedAnimal.zooLocation"><br>
          <label>Number of Caretakers</label><br>
          <input type="number" [(ngModel)]="childSelectedAnimal.caretakers"><br>
          <label>Sex</label><br>
          <input [(ngModel)]="childSelectedAnimal.sex"><br>
          <label>Likes</label><br>
          <input [(ngModel)]="childSelectedAnimal.likes"><br>
          <label>Dislikes</label><br>
          <input [(ngModel)]="childSelectedAnimal.dislikes"><br>
          <br>
          <button (click)="doneButtonClicked()">Done Editing</button>
        </div>
      </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
  this.doneButtonClickedSender.emit();
}
}
