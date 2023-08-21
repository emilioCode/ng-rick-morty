import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-span',
  templateUrl: './ui-span.component.html',
  styleUrls: ['./ui-span.component.scss']
})
export class UiSpanComponent {
  @Input() text: string = '';
  @Input() style: string = '';
}
