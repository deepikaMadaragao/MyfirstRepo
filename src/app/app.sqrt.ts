import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";
@Pipe({
    name : 'sqrt'
})
export class SqrtPipe implements PipeTransform {
    transform(val : number) : number {
       return Math.sqrt(val);
    }
 }
 