import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InfluencerService } from '../influencer/influencer.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  influencerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private influencerService: InfluencerService,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}

  ngOnInit(): void {
    this.influencerForm = this.formBuilder.group({
      nome: ['', Validators.required],
      canal: ['', Validators.required],
      numero_inscritos: [0, Validators.required],
      plataforma: ['', Validators.required],
      categoria: ['', Validators.required],
    });
  }

  addInfluencer() {
    if (this.influencerForm.valid) {
      console.log('teste');
      this.influencerService
        .postInfluencer(this.influencerForm.value)
        .subscribe({
          next: (res) => {
            alert('Influencer Adicionado com Sucesso');
            this.influencerForm.reset();
            this.dialogRef.close();
          },
          error: () => {
            alert('Erro: Confira os campos preenchidos');
          },
        });
    }
  }
}
