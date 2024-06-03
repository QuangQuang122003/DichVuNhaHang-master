import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Menu } from '../model/menu';

@Injectable({
  providedIn: 'root',
})
export class DatamenuService {
  constructor(
    private afs: AngularFirestore,
    private fireStorage: AngularFireStorage
  ) {}
  // Hàm tải lên hình ảnh lên Firebase Storage và trả về đường dẫn URL
  uploadImage(image: File, uploadPath: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const fileRef = this.fireStorage.ref(uploadPath);
      const uploadTask = this.fireStorage.upload(uploadPath, image);

      uploadTask.then(() => {
        fileRef.getDownloadURL().subscribe(
          (url) => resolve(url),
          (error) => reject(error)
        );
      });
    });
  }

  // add
  addMenu(mn: Menu) {
    mn.id = this.afs.createId();
    return this.afs.collection('/Menu').add(mn);
  }

  // get all
  getAllMenu() {
    return this.afs.collection('/Menu').snapshotChanges();
  }

  // delete
  deleteMenu(mn: Menu) {
    this.afs.doc('/Menu/' + mn.id).delete();
  }

  // update
  updateMenu(mn: Menu) {
    // Cập nhật dữ liệu của document có id là mn.id
    return this.afs.collection('/Menu').doc(mn.id).update(mn);
  }
}
