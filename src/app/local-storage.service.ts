import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }
  set(key: string, value: string) {
    if (!this.storage) return;
    this.storage.setItem(key, value);
  }

  get(key: string): any {
    if (this.storage) {
      return this.storage.getItem(key);
    }
    return null;
  }
}
