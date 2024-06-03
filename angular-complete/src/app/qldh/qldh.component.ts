import { Component, OnInit } from '@angular/core';
import { Dh } from '../model/dh';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-qldh',
  templateUrl: './qldh.component.html',
  styleUrls: ['./qldh.component.css'],
})
export class QldhComponent implements OnInit {
  isUpdating: boolean = false;
  dhList: Dh[] = [];
  dhObj: Dh={
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    mobile: ''
  };
  id: string = '';
  first_name: string = '';
  last_name: string = '';
  email: string = '';
  mobile: string = '';
  constructor(private data: DataService) {}
  ngOnInit(): void {
    this.getAllDh();
  }
  getAllDh() {
    this.data.getAllDh().subscribe(
      (res) => {
        this.dhList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
      },
      (err) => {
        alert('Error while fetching student data')
      }
    );
  }
  resetForm() {
    this.id = '';
    this.first_name = '';
    this.last_name = '';
    this.email = '';
    this.mobile = '';
    this.isUpdating = false; // Đặt biến cờ isUpdating về false khi reset form
  }

  addDh() {
    if (this.first_name == '' || this.last_name == '' || this.mobile == '' || this.email == '') {
      alert('Fill all input fields');
      return;
    }

    if (this.isUpdating) {
      // Đang ở chế độ cập nhật, thực hiện cập nhật dữ liệu
      const updatedDh: Dh = {
        id: this.id,
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        mobile: this.mobile,
      };

      this.data
        .updateDh(updatedDh)
        .then(() => {
          // Hoàn thành cập nhật, đặt lại biến cờ thành false và reset form
          this.isUpdating = false;
          this.resetForm();
        })
        .catch((error) => {
          // Xử lý lỗi nếu cần
          console.error('Update error:', error);
          alert('Update failed. Please try again.');
        });
    } else {
      // Đang ở chế độ thêm mới, thực hiện thêm dữ liệu
      this.dhObj.email = this.email;
      this.dhObj.first_name = this.first_name;
      this.dhObj.last_name = this.last_name;
      this.dhObj.mobile = this.mobile;

      this.data
        .addDh(this.dhObj)
        .then(() => {
          // Hoàn thành thêm dữ liệu, reset form
          this.resetForm();
        })
        .catch((error) => {
          // Xử lý lỗi nếu cần
          console.error('Add error:', error);
          alert('Add Dh failed. Please try again.');
        });
    }
  }

  updateDh(dh: Dh) {
    // Hiển thị form với dữ liệu cần cập nhật
    this.id = dh.id;
    this.first_name = dh.first_name;
    this.last_name = dh.last_name;
    this.email = dh.email;
    this.mobile = dh.mobile;
    // Đánh dấu là đang ở chế độ cập nhật
    this.isUpdating = true;
  }

  updateDhRecord() {
    // Thực hiện cập nhật dữ liệu tại đây
    // ...
    // Sau khi cập nhật xong, đánh dấu là đang ở chế độ thêm mới
    this.isUpdating = true;
    // Reset các trường nhập liệu
    this.resetForm();
  }

  deleteDh(dh: Dh) {
    if (window.confirm('Are you sure you want to delete ' + dh.first_name + ' ' + dh.last_name + ' ?')) {
      this.data.deleteDh(dh);
    }
  }
}
