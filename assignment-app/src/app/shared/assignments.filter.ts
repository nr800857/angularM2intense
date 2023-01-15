import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
  })
  export class FilterPipe implements PipeTransform {
  
    transform(items: any[], searchTerm: string): any[] {
      // return empty array if array is falsy
        if (!items) { return []; }

        // return the original array if search text is empty
        if (!searchTerm) { return items; }

        // convert the searchText to lower case
        searchTerm = searchTerm.toLowerCase();

        // retrun the filtered array
        return items.filter(item => {
        if (item && item["nom"]) {
            return item["nom"].toLowerCase().includes(searchTerm);
        }
        return false;
        });
     }
  }
  