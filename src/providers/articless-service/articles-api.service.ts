import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Article } from '../../models/article.interface';

@Injectable()
export class ArticlesApiServiceProvider {

    constructor(public http: Http) {
    }

    getArticles(): Observable<Article[]> {
        return Observable.of<Article[]>([
            {
                id              : 1,
                title           : 'Cayenne Diesel Platinum Edition on Finance.',
                image           : 'http://files3.porsche.com/filestore/image/multimedia/none/rd-2017-homepage-teaser-pcgb-cayennedieselplatinumeditionfinance-kw07/normal/fb9e791c-ed22-11e6-8503-0019999cd470;s4/porsche-normal.jpg',
                shortDescription: 'Porsche - Cayenne Diesel Platinum Edition on Finance.',
                text            : 'Porsche Cars North America Media Central provides the the most authoritative and up-to-date news on the world of Porsche activities in North America. Whether interested in new Porsche models, Porsche technology, the illustrious Porsche heritage, Porsche business developments, or the backgrounds of the executives of PCNA, youl find it all here at PCNA Media Central. '
            },
            {
                id              : 2,
                title           : 'Cayenne Diesel Platinum Edition on Finance.',
                image           : 'http://files3.porsche.com/filestore/image/multimedia/none/rd-2017-homepage-teaser-pcgb-cayennedieselplatinumeditionfinance-kw07/normal/fb9e791c-ed22-11e6-8503-0019999cd470;s4/porsche-normal.jpg',
                shortDescription: 'Porsche - Cayenne Diesel Platinum Edition on Finance.',
                text            : 'Porsche Cars North America Media Central provides the the most authoritative and up-to-date news on the world of Porsche activities in North America. Whether interested in new Porsche models, Porsche technology, the illustrious Porsche heritage, Porsche business developments, or the backgrounds of the executives of PCNA, youl find it all here at PCNA Media Central. '
            }
        ]);
    }

    getArticleDetails(Article) {
        return Observable.of<Article>(
            {
                id              : 1,
                title           : 'Cayenne Diesel Platinum Edition on Finance.',
                image           : 'http://files3.porsche.com/filestore/image/multimedia/none/rd-2017-homepage-teaser-pcgb-cayennedieselplatinumeditionfinance-kw07/normal/fb9e791c-ed22-11e6-8503-0019999cd470;s4/porsche-normal.jpg',
                shortDescription: 'Porsche - Cayenne Diesel Platinum Edition on Finance.',
                text            : 'Porsche Cars North America Media Central provides the the most authoritative and up-to-date news on the world of Porsche activities in North America. Whether interested in new Porsche models, Porsche technology, the illustrious Porsche heritage, Porsche business developments, or the backgrounds of the executives of PCNA, youl find it all here at PCNA Media Central. '
            }
        );
    }

}
