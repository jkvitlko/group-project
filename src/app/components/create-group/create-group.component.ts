import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {
users = [];
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.userService.getListOfUsers().subscribe(res =>{
      if(res){
        console.log(res);
        this.users=res;
      }
    })
  }

}
