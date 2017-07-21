import { Component, Input } from '@angular/core';
import { Article } from '../../models/article.interface';
import { IonicPage, NavController } from 'ionic-angular';
import {ArticleDetailsComponent} from '../article-details/article-details';

//@IonicPage({
//    name: 'articles-list-item'
//})

@Component({
    selector: 'articles-list-item',
    templateUrl: 'articles-list-item.html',
    entryComponents:[ ArticleDetailsComponent ]

})
export class ArticlesListItemComponent {
    @Input() article: Article;

    constructor(public navCtrl: NavController) {}

    pushPage(article) {
        // Push an `id` to the `'detail-page'`
        this.navCtrl.push(ArticleDetailsComponent, article);
        console.log("navigattttted")

    }

}

