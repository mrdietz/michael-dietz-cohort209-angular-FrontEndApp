import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @Input() title: string;
  @Input() body: string;

  @ViewChild('truncator') truncator: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit(): void {

  }

}
