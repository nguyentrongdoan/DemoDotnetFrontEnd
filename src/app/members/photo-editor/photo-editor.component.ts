import {Component, Input, OnInit} from '@angular/core';
import {Photo} from '../../model/photo';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.scss']
})
export class PhotoEditorComponent implements OnInit {
  @Input() photos: Photo[];

  constructor() { }

  ngOnInit(): void {
  }

}
