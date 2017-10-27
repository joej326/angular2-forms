import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  submitted = false;

  userData = {
    name: '',
    gender: '',
    answer: '',
    email: ''
  }


  defaultQuestion = 'pet';
  answer = '';
  genders = [] = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(formData){
    console.log(formData);
    this.submitted = true;
    this.userData.name = formData.value.userData.username;
    this.userData.gender = formData.value.gender;
    this.userData.email = formData.value.userData.email;
    this.userData.answer = formData.value.questionAnswer;

    formData.reset();
  }
}
