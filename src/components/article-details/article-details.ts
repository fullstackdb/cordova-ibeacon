import { Component, Input } from '@angular/core';
import { Article } from '../../models/article.interface';
import { NavController, NavParams } from 'ionic-angular';

//@IonicPage({
//    name: 'article-detail',
//    segment: 'article-detail/:id'
//})

@Component({
  selector: 'article-details',
  templateUrl: 'article-details.html'
})
export class ArticleDetailsComponent {
   article: Article;

    constructor(public navCtrl: NavController, public navParams: NavParams){
        this.article = this.navParams.data;
        console.log(this.navParams);
    }

    //this.navParams.get('thing1');
}
