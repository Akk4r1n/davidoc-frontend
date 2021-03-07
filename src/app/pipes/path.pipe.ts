import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'path'
})
export class PathPipe implements PipeTransform {

  transform(value: string): string {
    //return "assets/doc/" + value + ".md";
    let temp = value.split('/');
    let newPath: string = "";
    temp.forEach((item, index) => {
      if (index != 1) {
        newPath += item + "/";
      }
    });
    newPath = newPath.substring(0, newPath.length - 1);
    return "doc/" + newPath.slice(0, -3);
  }

}
