import { Component } from '@angular/core';
import { MdbModalRef,MdbModalService } from 'mdb-angular-ui-kit/modal';


@Component({
  selector: 'app-modal3',
  templateUrl: './modal3.component.html',
  styleUrls: ['./modal3.component.css']
})
export class Modal3Component {

  modalRef: MdbModalRef<Modal3Component> | null = null;

  constructor( private modalService: MdbModalService) {}

  
  openModal() {
    this.modalRef = this.modalService.open(Modal3Component)
  }

  close(): void {
    const closeMessage = 'Modal closed';
     
  }
}
