import { PostService } from './services/post.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component'
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PostsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
