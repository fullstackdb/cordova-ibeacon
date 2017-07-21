import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutInfoProvider } from "../../providers/about-info/about-info";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {
  public groupInfoList: any[];

  constructor(public navCtrl: NavController, 
              private aboutInfoProvider: AboutInfoProvider) {
  }

  public ngOnInit(): void {
    this.aboutInfoProvider.getInformationGroupList()
        .subscribe((groupInfoList: any[]) => {
          this.groupInfoList = groupInfoList;
        })
  }
}
