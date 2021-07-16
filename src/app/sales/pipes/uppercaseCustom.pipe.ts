import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"uppercaseCustom"
})
export class UppercaseCustom implements PipeTransform {
    
    transform( value: string, isUpperCase: boolean = true): string  {

        return ( isUpperCase ) ? value.toUpperCase() : value.toLowerCase();

    }
}