import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../modal/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum-builder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forum-builder.component.html',
  styleUrl: './forum-builder.component.css'
})
export class ForumBuilderComponent implements OnInit{

constructor(private DialogRef: MatDialog, 
  private shareService: ModalService,
  private router: Router) {}
optionList: any = [{
  question: "Please tell us about yourself *",
  options: [
    { option: "A", status: true },
    { option: "B", status: false },
    { option: "C", status: false },
    { option: 'D', status: false}
  ]
}];
userInfo: string = '';
ngOnInit(): void {
  
}
getTextValue(event:any){
  this.userInfo = event.target.value;
}

addQuestions(list: any): void {
return list;
}

openDialog(){
  let modal = this.DialogRef.open(ModalComponent, {
    data: {
      list: this.optionList
    }
  });
  modal.afterClosed().subscribe((data) => {
    this.optionList.push(data);
  })
}

closeDialog() {
  this.DialogRef.closeAll();
}
gotoPreviewPage(){
  this.shareService.setData({list: JSON.stringify(this.optionList), userInfo: this.userInfo});
  this.router.navigate(['forum/answer']);
}
}
