import { Dh } from './../model/dh';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
//import { AngularFireStorage } from '@angular/fire/compat/store';
//import { FileMetaData } from '../model/file-meta-data';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore) { }


  // add 
  addDh(dh : Dh) {
    dh.id = this.afs.createId();
    return this.afs.collection('/Dh').add(dh);
  }

  // get all 
  getAllDh() {
    return this.afs.collection('/Dh').snapshotChanges();
  }

  // delete 
  deleteDh(dh : Dh) {
     this.afs.doc('/Dh/'+dh.id).delete();
  }

  // update 
  updateDh(dh: Dh) {
    // Cập nhật dữ liệu của document có id là dh.id
    return this.afs.collection('/Dh').doc(dh.id).update(dh);
  }
    
}
