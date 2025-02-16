import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  providers: [HttpClient]
})
export class ContactComponent {
  contactForm: FormGroup;
  resultMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    
    if (this.contactForm.valid) {
      const formData = { 
        ...this.contactForm.value, 
        subject: `${this.contactForm.value.name} sent a message from portfolio website`, 
        access_key: '7003ffb2-3867-49bb-87d7-c00fef0bc29f',
        from_name: 'Contact Form Portfolio',
        redirect: '/',
      };

      this.resultMessage = "Please wait...";

      this.http.post('https://api.web3forms.com/submit', formData)
        .subscribe(
          (response: any) => {
            this.resultMessage = response.message;
            this.contactForm.reset();
            setTimeout(() => {
              this.resultMessage = '';
            }, 3000);
          },
          (error) => {
            console.error(error);
            this.resultMessage = "Something went wrong!";
          }
        );
    }
  }
}
