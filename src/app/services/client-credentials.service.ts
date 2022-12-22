import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Request, Response } from 'express';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClientCredentialsService {
  SPOTIFY_AUTHORIZE_URL = 'https://accounts.spotify.com/authorize';
  CLIENT_ID = 'd06c09470bb646ebb33f27616fb151fb';
  SCOPES = [
    //Listening History
    'user-read-recently-played',
    'user-top-read',
    'user-read-playback-position',
    //Spotify Connect
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    //Playback - For SDK Playback //https://developer.spotify.com/documentation/web-playback-sdk/quick-start/
    'streaming',
    //Playlists
    'playlist-modify-public',
    'playlist-modify-private',
    'playlist-read-private',
    'playlist-read-collaborative',
    //Library
    'user-library-modify',
    'user-library-read',
    //Users - For SDK Playback //https://developer.spotify.com/documentation/web-playback-sdk/quick-start/
    'user-read-email',
    'user-read-private'
  ];

  constructor() { }

  createAuthorizeURL() {
    const params = new URLSearchParams({
      client_id: this.CLIENT_ID,
      redirect_uri: `${window.location.origin}/`,
      scope: encodeURIComponent(this.SCOPES.join(' ')),
      response_type: 'token'
    });
    window.location.href = `${this.SPOTIFY_AUTHORIZE_URL}?${params.toString()}`;
  }
}
