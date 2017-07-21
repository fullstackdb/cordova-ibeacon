import { Component } from '@angular/core';
import { Article } from '../../models/article.interface';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector   : 'article-details',
    templateUrl: 'article-details.html'
})
export class ArticleDetailsComponent {
    article: Article;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.article = this.navParams.data;
        console.log(this.navParams);
    }

    goBack() {
        this.navCtrl.pop();
    }
}
