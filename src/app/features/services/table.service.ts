import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class TableService {
  pageIndex = 1

  private _pageSize = 10

  get pageSize() {
    return this._pageSize
  }
}
