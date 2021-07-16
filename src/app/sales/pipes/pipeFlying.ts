import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"pipeFlying"
})
export class FlyingPipe implements PipeTransform {
    
    transform( value: boolean ): string  {

        return ( value ) ? 'it is flying' : 'it is not flying';

    }
}