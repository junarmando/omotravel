import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
  title = 'Places to Visit!';
  posts: Post[];
  selectedPost: Post;

  constructor(
    private router: Router,
    private postsService: PostService) { }


  getPosts(): void {
    this.postsService.getPosts().then(posts => this.posts = posts);
    
  }

  onSelect(post: Post): void {
    this.selectedPost = post;
  }

  ngOnInit(): void {
    this.getPosts();

  }

}
