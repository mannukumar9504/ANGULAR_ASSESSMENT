import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatCardModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  list: any = [];;


  constructor(
  @Inject (MAT_DIALOG_DATA) public data: any,
  private matdialogef: MatDialogRef<ModalComponent>,
  private shareService: ModalService,
   private fb: FormBuilder) {
    this.list = data.list
  }
  question_section = this.fb.group({
  question : [''],
  answer: [''],
  options: this.fb.array([
    this.fb.group({
      option: [''],
      status: ['']
    })
  ])
  });
  
  get options() {
    return this.question_section.get('options') as FormArray;
  }
  addNewOption(){
    this.options.push(
      this.fb.group({
      option: [''],
      status: false
    }))
  }
  onSubmit() {
    this.shareService.setData(this.question_section.value);
    this.matdialogef.close(this.question_section.value);
  }

}
