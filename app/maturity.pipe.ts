import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "maturity",
  pure: false
})

export class MaturityPipe implements PipeTransform {


  transform(input: Animal[], desiredMaturity) {
    var output: Animal[] = [];
    if(desiredMaturity === "immatureAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].mature === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredMaturity === "matureAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].mature === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }


}
