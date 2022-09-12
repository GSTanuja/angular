import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(input: string, args: string): string {
    if(args=='m'){
      return `Mr.${input.toUpperCase()} `;
    }else if(args=='f'){
      return `Mrs.${input.toUpperCase()}`;
    }
    return `MR`;
  }

}
