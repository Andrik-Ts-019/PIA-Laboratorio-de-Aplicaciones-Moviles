import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss'],
})
export class VideoModalComponent implements OnInit {

  @Input()
  urlSafe: SafeResourceUrl;

  constructor( private modalController: ModalController, public sanitizer: DomSanitizer ) { }

  passurl: string;

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.passurl);
  }

  async close(){
    await this.modalController.dismiss();
  }

}
