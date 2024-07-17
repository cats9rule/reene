import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { CalculatorComponent } from './features/calculator/components/calculator/calculator.component';
import { PostsComponent } from './features/info/blog/components/posts/posts.component';
import { SinglePostComponent } from './features/info/blog/components/single-post/single-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'info', component: PostsComponent },
  { path: 'post/:id', component: SinglePostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
