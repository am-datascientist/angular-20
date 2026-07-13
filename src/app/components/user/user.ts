import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

  userList: any[] = [];
  userObj: any = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
  };
  
  
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getUsers()

  }


  getUsers() {
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res: any) => {
      this.userList = res;

    });
  }

  onSaveUser() {
    debugger;
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register",this.userObj).subscribe({
      next:(resultt)=>{
        debugger;
        alert("User Created Success");
         this.getUsers()

      },
      error:(error) =>{
        debugger;
        alert("Erro -" + error.error)

      }}
    )
  }

  onReset() {
    this.userObj = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
  };
  }
  onUpdateUser() {
    //this.userObj.CreatedDate = new Date();
    this.http.put("https://api.freeprojectapi.com/GoalTracker/updateUser?id=" + this.userObj.userId,this.userObj).subscribe({
      next:() =>{
        alert("User updated Success");
         this.getUsers()
        },
      error:(error)=>{
        alert("Erro -" + error.error)

      }
    });

  }

  onDeleteUser(id: number) {
   debugger;
   const isDelet = confirm("Are you sure want to Delete");
   if(isDelet) {
     this.http.delete("https://api.freeprojectapi.com/GoalTracker/deleteUserById?id=" + id).subscribe({
      next:() =>{
        alert("User Delet Success");
        this.getUsers()
      },
      error:(error)=>{
        alert("Erro -" + error.error)
      }
     })
  

    }
  }

  onEdit(item: any){
    this.userObj = item;
  }

}
