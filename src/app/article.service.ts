import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ArticleService {
  articles: FirebaseListObservable<any[]>;

constructor(private database: AngularFireDatabase) {
  this.articles = database.list('articles');
}

getArticles() {
  return this.articles;
}

addArticle(newArticle: Article) {
  this.articles.push(newArticle);
}

getArticlesById(id: string){
    // for (var i = 0; i <= ALBUMS.length - 1; i++) {
    //   if (ALBUMS[i].id === albumId) {
    //     return ALBUMS[i];
    //   }
    // }
  }

}
