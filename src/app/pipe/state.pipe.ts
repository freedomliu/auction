import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  transform(value: string, args?: any[]): any {
    console.log(args);
    if (value === '0') {
      return '已生成';
    } else {
      return '未生成';
    }
  }

}
