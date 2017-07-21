import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../models/article.interface';
import { ArticlesApiServiceProvider } from './articles-api.service';


@Injectable()
export class ArticlesServiceProvider {

    constructor(private articlesApiServiceProvider: ArticlesApiServiceProvider) {
    }

    getArticles(): Observable<Article[]> {
        return this.articlesApiServiceProvider.getArticles();
    }

    getArticleDetails(Article) {
        return this.articlesApiServiceProvider.getArticleDetails(Article);
    }
}
