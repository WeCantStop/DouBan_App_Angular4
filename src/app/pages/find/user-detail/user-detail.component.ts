import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from './../../../services/userService';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public userInfo;
  constructor(public route: ActivatedRoute,
              public userService: UserService,
              public location: Location
            ) { }

  ngOnInit() {
    this.userInfo = {
      name: '',
      age: 0,
      gender: '',
      homeTown: ''
    };
    // 1.history模式获取参数的方法
    const userId = this.route.snapshot.paramMap.get('id');
    this.userService.getUsers({id: userId}).subscribe(res => {
       this.userInfo = res.data;
    });

    // 2.query模式获取参数的方法
    // this.route.snapshot.queryParamMap.get()

    // 直接拿到参数请求得方式
    // this.route.params
    //     .switchMap((params: ParamMap) => this.userService.getUsers(+params.get('id')))
    //     .subscribe(res => console.log(res));
  }

  // 保存用户信息
  saveUserDetail(userInfo) {
    this.userService.updateUserDeatil(userInfo).subscribe(res => {
      window.alert('save success!')
      this.location.back();
    });
  }

  goBack() {
    this.location.back();
  }

}
