import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals">All Animals</option>
    <option value="matureAnimals">Animals over age 2</option>
    <option value="immatureAnimals">Animals age 2 and under</option>
  </select>

    <ul *ngFor="let currentAnimal of childAnimalList | maturity:filterByMaturity">
      <li>Species: {{currentAnimal.species}}</li>
      <li>Name: {{currentAnimal.name}}</li>
      <li>Age: {{currentAnimal.age}}</li>
      <li>Diet: {{currentAnimal.diet}}</li>
      <li>Location: {{currentAnimal.zooLocation}}</li>
      <li>Caretakers: {{currentAnimal.caretakers}}</li>
      <li>Sex: {{currentAnimal.sex}}</li>
      <li>Likes: {{currentAnimal.likes}}</li>
      <li>Dislikes: {{currentAnimal.dislikes}}</li>


      <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit {{currentAnimal.species}}</button>
    </ul>

  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal [];
  @Output() clickSender = new EventEmitter();

  filterByMaturity: string = "allAnimals";

    editButtonHasBeenClicked(animalToEdit: Animal) {
      this.clickSender.emit(animalToEdit);
    }



    onChange(optionFromMenu){
      this.filterByMaturity = optionFromMenu;
    }

    // toggleMaturity(clickedAnimal: Animal, setMaturity: boolean) {
    //   clickedAnimal.mature = setMaturity;
    // }

}
