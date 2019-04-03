import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjetacdc',
  templateUrl: './tarjetacdc.component.html',
  styles: []
})
export class TarjetacdcComponent implements OnInit {

  @Input() items: any [] = [];

  constructor() { }

  ngOnInit() {
  }

}
