import { registerLocaleData } from '@angular/common'
import { provideHttpClient, withFetch } from '@angular/common/http'
import en from '@angular/common/locales/en'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'

import { NZ_I18N } from 'ng-zorro-antd/i18n'
import { en_US } from 'ng-zorro-antd/i18n'
import { NzLayoutModule } from 'ng-zorro-antd/layout'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

registerLocaleData(en)

@NgModule({
  providers: [
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    { provide: NZ_I18N, useValue: en_US }
  ],
  declarations: [AppComponent],
  imports: [FormsModule, BrowserModule, NzLayoutModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
