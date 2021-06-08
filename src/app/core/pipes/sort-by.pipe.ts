import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

    transform(value: any[], propertyName: string): any[] {
        if (propertyName) {
            return value.sort((a: any, b: any) => b[propertyName] > a[propertyName] ? -1 : 1);
        }
        else {
            return value;
        }
    }

}
