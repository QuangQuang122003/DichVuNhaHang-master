import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Staff } from '../model/staff';
@Injectable({
  providedIn: 'root'
})
export class DatastaffService {

  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) { }
  // add Staff
  addStaff(st : Staff) {
    st.id = this.afs.createId();
    return this.afs.collection('/Staff').add(st);
  }

  // get all Staff
  getAllStaff() {
    return this.afs.collection('/Staff').snapshotChanges();
  }

  // delete Staff
  deleteStaff(st : Staff) {
     this.afs.doc('/Staff/'+st.id).delete();
  }

  // update Staff
  updateStaff(st: Staff): Promise<void> {
    // Cập nhật dữ liệu của document có id là st.id
    return this.afs.collection('/Staff').doc(st.id).update(st);
  }
}
