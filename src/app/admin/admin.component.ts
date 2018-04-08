import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ArticleService]
})
export class AdminComponent implements OnInit {
  articleId: string;
  articleToDisplay;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
    this.articleId = urlParameters['id'];
  });
    this.articleToDisplay = this.articleService.getArticleById(this.articleId);
  }

  submitForm(title: string, description: string, source: string, published: string, imagePath: string) {
    let newArticle: Article = new Article(title, description, source, published, imagePath);
    this.articleService.addArticle(newArticle);
  }

}
