import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";


@Injectable()
export class AboutInfoProvider {

  constructor(public http: Http) {
  }

  getInformationGroupList(): Observable<any> {
    return Observable.of([
      {
        type: "address",
        title: "Contact",
        description: 'Please feel free to contact us with any questions or to arrange an appoitment',
        addresses: [
          {
            title: 'Porsche Centre Dubai Al Nabooda Automobiles LLC',
            location: 'Shk. Zayed Road - Close to 3rd Interchange Dubai',
            phone: '+971 4 3058555'
          },
          {
            title: 'Porsche Service Centre - AI Qouz',
            location: 'Shk. Zayed Road - Close to 3rd Interchange Dubai',
            phone: '+971 4 3716700',
            fax: '+971 4 3474669'
          }
        ]
      },
      {
        type: "working_hours",
        title: "Working Hours",
        tables: [
          {
            title: "Showroom",
            hours: '09:00 - 20:00',
            description: 'Saturday to Thursday'
          },
          {
            title: "Service Centre",
            hours: '08:00 - 18:30',
            description: 'Saturday to Thursday'
          }
        ]
      },
      {
        type: "about",
        title: "About",
        version: "Version: 0.3"
      }
    ]);
  }
}
