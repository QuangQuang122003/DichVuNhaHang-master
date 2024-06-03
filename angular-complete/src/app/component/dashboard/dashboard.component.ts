import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/model/menu';
import { AuthService } from 'src/app/shared/auth.service';
import { DatamenuService } from 'src/app/shared/datamenu.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  menusList: Menu[] = [];
  menuObj: Menu = {
    id: '',
    name: '',
    price: 0,
    image: '',
  };
  id: string = '';
  name: string = '';
  price: number = 0;
  image: string = '';

  constructor(private auth: AuthService, private data: DatamenuService) {}

  ngOnInit(): void {
    this.getAllMenus();
  }

  // register() {
  //   this.auth.logout();
  // }

  getAllMenus() {
    this.data.getAllMenu().subscribe(
      (res) => {
        this.menusList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
      },
      (err) => {
        alert('Error while fetching menu data');
      }
    );
  }

  resetForm() {
    this.id = '';
    this.name = '';
    this.price = 0;
    this.image = '';
  }

  addMenu() {
    if (this.name == '' || this.price == 0 || this.image == '') {
      alert('Fill all input fields');
      return;
    }

    this.menuObj.id = '';
    this.menuObj.name = this.name;

    this.menuObj.price = this.price;
    this.menuObj.image = this.image;

    this.data.addMenu(this.menuObj);
    this.resetForm();
  }

  updateMenu() {}

  deleteMenu(menu: Menu) {
    if (window.confirm('Are you sure you want to delete ' + menu.name + '?')) {
      this.data.deleteMenu(menu);
    }
  }
}
