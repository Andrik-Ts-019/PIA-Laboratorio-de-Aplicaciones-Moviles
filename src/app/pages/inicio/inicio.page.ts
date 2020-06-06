import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VideoModalComponent } from 'src/app/components/video-modal/video-modal.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor( private modalCtrl: ModalController ) { }

  public videoUrl: string = 'https://www.youtube.com/embed/2MpUj-Aua48';

  async mostrarvideo(value) {
    const modal = await this.modalCtrl.create({
      component: VideoModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        passurl: value
      }
    });
    return await modal.present();
  }

  ngOnInit() {}

}