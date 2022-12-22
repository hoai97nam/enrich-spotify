import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobalService } from 'src/app/services/global.service';
import { ClientCredentialsService } from 'src/app/services/client-credentials.service';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public openSideBar: boolean = false;
  public activeLanguage: string = 'en';
  public moreLanguages: boolean = false;

  public id: any;
  constructor(private translate: TranslateService,
    private route: ActivatedRoute,
    private router: Router,
    private clientCredentialsService: ClientCredentialsService) {
    // set default language 
    this.translate.setDefaultLang(this.activeLanguage);
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.getToken();
    }
  }

  getToken() {
    if (!window.location.hash) {
      this.clientCredentialsService.createAuthorizeURL();
    }
    return this.route.fragment.pipe(
      filter((fragment: any) => !!fragment),
      map((fragment: string) => new URLSearchParams(fragment as string)),
      map((params: any) => ({
        accessToken: params.get('access_token'),
        tokenType: params.get('token_type'),
        expiresIn: Number(params.get('expires_in')),
        state: params.get('state')
      })),
      tap((params: any) => {
        console.log('[Angular Spotify] Authenticated!', params);
        this.router.navigate(['home']);
      })
    ).subscribe(res => {
      localStorage.setItem('token', res['accessToken']);
    })
  }


  // update variable which controls side bar visibility
  public openOrCloseNav(): void {
    this.openSideBar = !this.openSideBar;
  }

  // switch language
  public switchLanguage(language: string) {
    this.activeLanguage = language;
    this.translate.use(language);
  }

  public seeLanguages(): void {
    this.moreLanguages = !this.moreLanguages;
  }
}
