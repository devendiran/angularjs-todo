import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import * as _ from 'lodash';

@Injectable()
export class HttpClient {
  private defaultOptions: any = {};

  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers){
    var accessToken = window.localStorage.getItem('authToken');
    if (accessToken) {
      headers.append('Authorization', accessToken); 
    }
    headers;
  }

  get(url:string, option: any) {
    let headers = new Headers();
    _.extend(this.defaultOptions, option || {
      headers: headers
    });
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url: string, data: any, option: any) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    _.extend(this.defaultOptions, option || {
      headers: headers
    });
    console.log('.........test', url, data, this.defaultOptions);
    return this.http.post(url, data, this.defaultOptions);
  }
}