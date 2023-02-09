import { Injectable } from '@angular/core';

import { collection, doc, Firestore, setDoc, deleteDoc } from '@angular/fire/firestore';
import { Sus } from '../modal/test';

@Injectable({
  providedIn: 'root'
})
export class MapDatabaseService {

  constructor(private firestore: Firestore) { }

  userSignUp(data: Sus) {
    const document = doc (collection(this.firestore, 'sus'));
    return setDoc(document, data);    
  }


}
