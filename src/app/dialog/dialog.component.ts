import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InfluencerService } from '../influencer/influencer.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Influencer } from '../Influencer';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  influencerForm!: FormGroup;
  acaoBotao: string = 'Salvar';
  constructor(
    private formBuilder: FormBuilder,
    private influencerService: InfluencerService,
    @Inject(MAT_DIALOG_DATA) public editData: Influencer,
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
    if (this.editData) {
      this.acaoBotao = 'Atualizar';
      this.influencerForm.controls['nome'].setValue(this.editData.nome);
      this.influencerForm.controls['canal'].setValue(this.editData.canal);
      this.influencerForm.controls['numero_inscritos'].setValue(
        this.editData.numero_inscritos
      );
      this.influencerForm.controls['plataforma'].setValue(
        this.editData.plataforma
      );
      this.influencerForm.controls['categoria'].setValue(
        this.editData.categoria
      );
    }
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
