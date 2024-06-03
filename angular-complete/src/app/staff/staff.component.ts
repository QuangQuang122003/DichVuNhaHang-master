import { Staff } from './../model/staff';
import { Component, OnInit } from '@angular/core';
import { DatastaffService } from '../shared/datastaff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
})
export class StaffComponent implements OnInit {
  isUpdating: boolean = false;
  stList: Staff[] = [];
  stObj: Staff = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    role: '',
    mobile: '',
  };
  id: string = '';
  first_name: string = '';
  last_name: string = '';
  email: string = '';
  role:string ='';
  mobile: string = '';
  constructor(private data: DatastaffService) {}
  ngOnInit(): void {
    this.getAllStaff();
  }
  getAllStaff() {
    this.data.getAllStaff().subscribe(
      (res) => {
        this.stList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
      },
      (err) => {
        alert('Error while fetching Staff data');
      }
    );
  }
  resetForm() {
    this.id = '';
    this.first_name = '';
    this.last_name = '';
    this.email = '';
    this.role='';
    this.mobile = '';
    this.isUpdating = false; // Đặt biến cờ isUpdating về false khi reset form
  }

  addStaff() {
    if (
      this.first_name == '' ||
      this.last_name == '' ||
      this.mobile == '' ||
      this.role==''||
      this.email == ''
    ) {
      alert('Fill all input fields');
      return;
    }

    if (this.isUpdating) {
      // Đang ở chế độ cập nhật, thực hiện cập nhật dữ liệu
      const updatedStaff: Staff = {
        id: this.id,
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        role:this.role,
        mobile: this.mobile,
      };

      this.data
        .updateStaff(updatedStaff)
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
      this.stObj.email = this.email;
      this.stObj.first_name = this.first_name;
      this.stObj.last_name = this.last_name;
      this.stObj.role = this.role
      this.stObj.mobile = this.mobile;

      this.data
        .addStaff(this.stObj)
        .then(() => {
          // Hoàn thành thêm dữ liệu, reset form
          this.resetForm();
        })
        .catch((error) => {
          // Xử lý lỗi nếu cần
          console.error('Add error:', error);
          alert('Add Staff failed. Please try again.');
        });
    }
  }

  updateStaff(st: Staff) {
    // Hiển thị form với dữ liệu cần cập nhật
    this.id = st.id;
    this.first_name = st.first_name;
    this.last_name = st.last_name;
    this.email = st.email;
    this.role = st.role;
    this.mobile = st.mobile;
    // Đánh dấu là đang ở chế độ cập nhật
    this.isUpdating = true;
  }

  updateStaffRecord() {
    // Thực hiện cập nhật dữ liệu tại đây
    // ...
    // Sau khi cập nhật xong, đánh dấu là đang ở chế độ thêm mới
    this.isUpdating = true;
    // Reset các trường nhập liệu
    this.resetForm();
  }

  deleteStaff(st: Staff) {
    if (
      window.confirm(
        'Are you sure you want to delete ' +
          st.first_name +
          ' ' +
          st.last_name +
          ' ?'
      )
    ) {
      this.data.deleteStaff(st);
    }
  }
}
