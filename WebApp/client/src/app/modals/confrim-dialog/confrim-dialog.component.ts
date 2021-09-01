import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confrim-dialog',
  templateUrl: './confrim-dialog.component.html',
  styleUrls: ['./confrim-dialog.component.css']
})
export class ConfrimDialogComponent implements OnInit {
  title!: string;
  message!: string;
  btnOkText!: string
  btnCancelText!: string;
  result!: boolean;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  confirm() {
    this.result = true;
    this.bsModalRef.hide();
  }

  decline() {
    this.result = false;
    this.bsModalRef.hide();
  }
}
