import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comment } from '../comment.model'
import { Post } from '../post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post?: Post;
  constructor(private postService: PostService) { }
  listOfComments: Comment[] = []
  panelOpenState: boolean = false;

  ngOnInit(): void {
  }

  viewComments(){
    if(this.post){
      this.postService.getComments(this.post.id)
    .subscribe( data => this.listOfComments = data)
    }
    
  }
 
}
