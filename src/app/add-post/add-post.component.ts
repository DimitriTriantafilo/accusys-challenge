import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Post } from '../post.model';
import { PostService } from '../services/post.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  @ViewChild('formDirective')
  private formDirective!: NgForm;
  form!: FormGroup;

  constructor(private postService: PostService, public dialog: MatDialog) { }

    
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      body: new FormControl(null, [Validators.required]),

    })
  }

  openDialog(){
    
    
  }

  onSubmit(){
    
    const newObject = this.form.value;
    newObject.userId = Math.floor(Math.random() * (100 - 1)) + 1;;
    this.postService.postPost(newObject)
    .subscribe( data => {this.dialog.open(DialogExampleComponent, {data: {id: data.id}});  
    this.form.reset('');
   this.formDirective.resetForm()
    
  })
    
  }
}
