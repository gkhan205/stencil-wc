import { Component, Prop, State, h, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'app-input',
  styleUrl: 'app-input.css',
  shadow: true,
})
export class AppInput {
  @Prop() type: string;
  @Prop() placeholder: string;
  @Prop() field: string;

  @State() value: string;

  @Event({
    eventName: 'inputChanged',
    composed: true,
    bubbles: true,
  })
  inputChanged: EventEmitter<any>;

  handleInputChange = event => {
    this.value = event.target.value;
    this.inputChanged.emit({ value: this.value, field: this.field });
  };

  render() {
    return <input class="form-control my-2" type={this.type} placeholder={this.placeholder} onInput={this.handleInputChange} />;
  }
}
