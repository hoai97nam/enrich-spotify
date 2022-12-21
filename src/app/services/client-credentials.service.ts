import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Request, Response } from 'express';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClientCredentialsService {

  constructor(private http: HttpClient) { }

  client_id = 'CLIENT_ID'; // Your client id
  client_secret = 'CLIENT_SECRET'; // Your secret

  // authOptions = {
  //   url: 'https://accounts.spotify.com/api/token',
  //   headers: {
  //     'Authorization': 'Basic ' + (new Buffer(this.client_id + ':' + this.client_secret).toString('base64'))
  //   },
  //   form: {
  //     grant_type: 'client_credentials'
  //   },
  //   json: true
  // };
  getAuth() {
    // request.post(authOptions, function(error, response, body) {
    //   if (!error && response.statusCode === 200) {
    //     // use the access token to access the Spotify Web API
    //     token = body.access_token;
    //     options = {
    //       url: 'https://api.spotify.com/v1/users/jmperezperez',
    //       headers: {
    //         'Authorization': 'Bearer ' + token
    //       },
    //       json: true
    //     };
    //     request.get(options, function(error, response, body) {
    //       console.log(body);
    //     });
    //   }
    // });
  }

  getToken() {
    let params = ('grant_type=client_credentials');
    let client_id = 'c75a18f18b034e36a79e3fe19ea15b15'; // Your client id
    let client_secret = 'bad6dc3191c043739c1705f59d46183b'; // Your secret
    let encoded = btoa(client_id + ':' + client_secret);
    let headers = new HttpHeaders();
    headers.append('Authorization', 'Basic ' + encoded);
    headers.append('content-type', 'application/x-www-form-urlencoded');
    let proxy = 'https://accounts.spotify.com/api/token';
    let uurl = '';
    // let uurl = 'https://accounts.spotify.com/api/token';

    return this.http.post(proxy + uurl, params, { headers: headers });
  }
}
