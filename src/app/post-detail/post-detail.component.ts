import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post';
import { PostService } from '../post.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.sass']
})
export class PostDetailComponent implements OnInit {

  @Input() post: Post;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.postService.getPost(+params['id']))
      .subscribe(post => this.post = post);
  }

}
