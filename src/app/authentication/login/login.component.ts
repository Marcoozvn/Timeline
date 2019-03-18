import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private service: AuthService,
              private router: Router,
              private toast: ToastrService) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      login: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    const user = this.service.authenticate(this.formulario.value);

    if (user) {
      this.toast.success('Login feito com sucesso!');
      this.router.navigate(['/dashboard']);
    } else {
      this.toast.error('Credenciais inválidas!');
    }
  }
}
