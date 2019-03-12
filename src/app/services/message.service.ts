import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {config} from '../config';

@Injectable()
export class MessageService {
  public url: string;
  constructor(private _http: HttpClient) {
    this.url = config.url;
  }

  sendMessage(body) {
    return this._http.post(this.url + 'titulo/formulario', body, {withCredentials: true});
    return this._http.post(this.url + 'formularionuevo/formulario', body, {withCredentials: true});
    return this._http.post(this.url + 'subscribe', body, {withCredentials: true});
  }
}
