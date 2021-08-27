import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Post } from '../post.model';
import { PostService } from './post.service';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class BackEndService{
    constructor(private postService: PostService, private http: HttpClient){}
    fetchData(){
        this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts"
        )
        .pipe(
            tap((listOfPosts: Post[]) => {
                this.postService.setPosts(listOfPosts)
            })
        )
        .subscribe();
    }
}