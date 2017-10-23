import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../../mock/user';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  public userInfo: User;
  public name: string;
  public id: number;

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userService.getUsers({ id: params.id }).subscribe(res => {
        this.userInfo = res.data[0];
        this.name = this.userInfo.name;
        this.id = this.userInfo.id;
      })
    })
  }

}
