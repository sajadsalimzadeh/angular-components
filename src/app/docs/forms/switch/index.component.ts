import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'doc-switch',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  loadings: any = {};
  formControl = new FormControl(true);

  constructor() {
  }

  ngOnInit(): void {

  }

  startLoading(name: string) {
    this.loadings[name] = true;
    setTimeout(() => {
      // this.loadings[name] = false;
    }, 1000)
  }
}
