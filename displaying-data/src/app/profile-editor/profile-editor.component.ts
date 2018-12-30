import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
  });


  onSubmit(){
    console.warn(this.profileForm.value);
  }


  ngOnInit() {
  }

}
