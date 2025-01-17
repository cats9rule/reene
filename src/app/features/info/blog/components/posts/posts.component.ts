import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  blogPosts: any;
  id!: string;
  errorMessage: any;
  constructor(
    private blogService: BlogService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.spinner.show();

    this.blogService.getPosts().subscribe(
      (data) => {
        this.blogPosts = data;
        console.log(this.blogPosts);
        this.spinner.hide();
      },
      (error) => {
        // if any error, Code throws the error
        this.errorMessage = error.error.message;
        console.log(error.error.message, 'error');
        this.spinner.hide();
      }
    );
  }

  loadPost(p: any) {
    this.router.navigate(['post', p]);
  }
}
