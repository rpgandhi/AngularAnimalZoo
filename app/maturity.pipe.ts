import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "maturity",
  pure: false
})

export class MaturityPipe implements PipeTransform {

  transform(input: Animal[], desiredMaturity) {
    let output: Animal[] = [];
    if(desiredMaturity === "immatureAnimals") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].age <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredMaturity === "matureAnimals") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].age > 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }


}
