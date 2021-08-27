import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../post.model';

@Pipe({
  name: 'paginado'
})
export class PaginadoPipe implements PipeTransform {

  transform(listOfPosts: Post[], page: number = 0, search: string = ""): Post[] {
    if ( search.length === 0 ){
      return listOfPosts.slice(page, page+5);
    }
    
    else {
      const filteredPosts = listOfPosts.filter(p => p.id == search)
    return filteredPosts.slice(page, page+5)
    }
    
  }

}
