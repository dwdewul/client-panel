import { Injectable } from '@angular/core';
import { 
  AngularFireDatabase, 
  AngularFireList, 
  AngularFireObject 
} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/client.model';

@Injectable()
export class ClientService {
  clientsRef: AngularFireList<any>;
  clients: Observable<any[]>;
  client: Observable<any>;

  constructor(private db: AngularFireDatabase) { 
    this.clientsRef = this.db.list('clients');
  }

}
