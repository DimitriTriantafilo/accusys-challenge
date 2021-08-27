import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from "../post.model";
import { Comment } from "../comment.model"
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NewPost } from '../newPost.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient){}

  listChangedEvent: EventEmitter<Post[]> = new EventEmitter();

  listOfComments: Comment[] = []
  listOfPosts: Post[] = [
    // new Post("titulo", " 1","unouno", "2"),
    // new Post("titulo 2","2", "dosdos", "51"),
    // new Post("titulo 3","3",  "trestres","514")
  ];
  public pageSlice = this.listOfPosts.slice(0,3);

  getPosts(){
    return this.listOfPosts
  }
  setPosts(listOfPosts: Post[]){
    this.listOfPosts = listOfPosts;
    this.listChangedEvent.emit(listOfPosts)   
  }
 
  getComments(index: string): Observable<Comment[]>{
   return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${index}/comments`)
   
  }
  postPost(post: NewPost){
    return this.http.post<Post>(`https://jsonplaceholder.typicode.com/posts`, post)
  }

}
