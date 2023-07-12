import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  influencerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.influencerForm = this.formBuilder.group({
      nome: ['', Validators.required],
      canal: ['', Validators.required],
      numeroInscritos: [0, Validators.required],
      plataforma: ['', Validators.required],
      categoria: ['', Validators.required],
    });
  }
}
