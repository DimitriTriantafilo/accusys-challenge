import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  public listOfPosts: Post[] = [
  ]
  public actualPage: number = 1;
  public page: number = 0;
  public search: string = "";
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.listOfPosts = this.postService.getPosts()
    this.postService.listChangedEvent.subscribe((listOfPosts: Post[]) => {
      this.listOfPosts = this.postService.getPosts()
    });
    
  }

  onSiguiente(){
    if(this.actualPage  !== this.listOfPosts.length/5){
      this.page += 5
      this.actualPage +=1
      window.scrollTo({top:0, behavior: 'smooth'})
    }
  }
  onAnterior(){
    if (this.page > 0){
      this.page -= 5;
      this.actualPage -=1
      window.scrollTo({top:0, behavior: 'smooth'})
    }
  }
  onSearchPost( search: string){
    this.page = 0;
    this.search = search;
  }
}
