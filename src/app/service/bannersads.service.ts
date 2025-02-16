import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { BannerAds } from '../interface/bannersAds';


@Injectable({
  providedIn: 'root'
})
export class BannersadsService {

  private urlAPi = "http://localhost:9090/shophub/bannersads"

  constructor(
    private http: HttpClient
  ) { }



  getBannerAds():Observable<BannerAds[]>{
    return this.http.get<BannerAds[]>(`${this.urlAPi}`);
  }

}
