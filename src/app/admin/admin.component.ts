import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ArticleService]
})
export class AdminComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

  submitForm(title: string, description: string, source: string, published: string, imagePath: string, id: string) {
    let newArticle: Article = new Article(title, description, source, published, imagePath, id);
    console.log(newArticle);
    this.articleService.addArticle(newArticle);
  }

}
