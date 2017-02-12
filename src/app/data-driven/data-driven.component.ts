import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'data-driven',
  templateUrl: './data-driven.component.html'
})
export class DataDrivenComponent {
  myForm: FormGroup;
  validEmailRegExp: string = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

  genders = ['male', 'female'];

  constructor(private formBuilder: FormBuilder) {

    this.myForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('Marvin', [Validators.required, this.exampleValidator]),
        'email': new FormControl('', [Validators.required, Validators.pattern(this.validEmailRegExp)])
      }),
      'password': new FormControl('', Validators.required),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([
        new FormControl('Cooking', Validators.required, this.asyncExampleValidator)
      ])
    });

    //    this.myForm = formBuilder.group({
    //      'userData': formBuilder.group({
    //        'username': ['Marvin', Validators.required],
    //        'email': ['', [Validators.required, Validators.pattern(this.validEmailRegExp)]]
    //      }),
    //      'password': [('', Validators.required)],
    //      'gender': [('male')],
    //      'hobbies': formBuilder.array([
    //        ['Cooking', Validators.required, this.asyncExampleValidator]
    //      ])
    //    });

    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
  }

  onAddHobby() {
    (<FormArray>this.myForm.get('hobbies')).push(new FormControl('', Validators.required));
  }

  onsubmit() {
    console.log(this.myForm);
  }

  onResetForm() {
    this.myForm.reset();  // will reset to null
    // this.myForm.reset({first: 'Nancy', last: 'Drew'});   -- will reset to value specified  }
  }
  
  exampleValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Example') {
      return { example: true };
    }
    return null;
  }

  asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Example') {
            resolve({ 'invalid': true });
          } else {
            resolve(null);
          }
        }, 1500);
      }
    );

    return promise;
  }


}
