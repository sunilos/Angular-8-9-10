import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
   name : 'rs'
})
export class RsPipe implements PipeTransform {
   transform(val) : string {
      return "Rs" + val;
   }
}