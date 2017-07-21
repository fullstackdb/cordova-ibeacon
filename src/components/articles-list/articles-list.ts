import { Component, OnInit } from '@angular/core';
import { ArticlesServiceProvider } from "../../providers/articless-service/articles-service";
import { Article } from '../../models/article.interface';


@Component({
    selector: 'articles-list',
    templateUrl: 'articles-list.html'
})
export class ArticlesListComponent implements OnInit {

    private articles: any;

    constructor(private articlesServiceProvider: ArticlesServiceProvider) {
    }

    public ngOnInit(): void {
        this.articlesServiceProvider.getArticles()
            .subscribe((articles: Article[]) => {
                this.articles = articles;
            })
    }

}
