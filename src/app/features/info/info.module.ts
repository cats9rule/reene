import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe, SlicePipe } from '@angular/common';
import { NgxSpinner, NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BlogService } from './blog/services/blog.service';
import { PostsComponent } from './blog/components/posts/posts.component';
import { SinglePostComponent } from './blog/components/single-post/single-post.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideRouter, RouterModule, ROUTES } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [PostsComponent, SinglePostComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    DatePipe,
    SlicePipe,
    FormsModule,
    MatButtonModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [NgxSpinnerModule, PostsComponent, SinglePostComponent],
  providers: [BlogService]
})
export class InfoModule { }
