import {Component, HostListener, Input} from '@angular/core';
import {AbstractFormControl, createControlValueAccessor} from "../form-control.directive";

@Component({
  selector: 'dev-radio',
  templateUrl: 'radio.component.html',
  styleUrls: ['./radio.component.scss', '../control.scss'],
  providers: [createControlValueAccessor(RadioComponent)]
})
export class RadioComponent extends AbstractFormControl<boolean | null> {

  @Input() value: any;

  @HostListener('keydown.space')
  onKeyDownSpace() {
    this.toggle();
  }

  override onClick(e: MouseEvent) {
    this.toggle();
    super.onClick(e);
  }

  override render() {
    super.render();
    this.classes['checked'] = this.formControl.value == this.value;
  }

  toggle() {
    this.formControl.setValue(this.value);
  }
}
