import { BannerAds } from './../../interface/bannersAds';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BannersadsService } from '../../service/bannersads.service';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  bannerAds: BannerAds[] = [];

  constructor(
    private bannerAdsService: BannersadsService,
  ) { }


  ngOnInit(): void {
    this.obtenerBannerAds();
  }


  obtenerBannerAds() {
    this.bannerAdsService.getBannerAds().subscribe(
        (data: BannerAds[]) => {
            console.log("Banners recibidos:", data);
            this.bannerAds = data;
        },
        error => {
            console.error("Error al obtener banners", error);
        }
    );
}


}
