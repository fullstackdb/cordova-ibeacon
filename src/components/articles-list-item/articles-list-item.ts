import { Component, Input } from '@angular/core';
import { Article } from '../../models/article.interface';
import { NavController } from 'ionic-angular';
import {ArticleDetailsComponent} from '../article-details/article-details';

@Component({
    selector: 'articles-list-item',
    templateUrl: 'articles-list-item.html',
    entryComponents:[ ArticleDetailsComponent ]
})
export class ArticlesListItemComponent {
    @Input() article: Article;

    constructor(public navCtrl: NavController) {}

    pushPage(article) {
        this.navCtrl.push(ArticleDetailsComponent, article);
    }
}

