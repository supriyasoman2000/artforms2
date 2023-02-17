import { Component } from '@angular/core';
import { image } from 'src/assets/image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  gallery=image
  ngOninit():void{
    this.gallery=image;

}
}
