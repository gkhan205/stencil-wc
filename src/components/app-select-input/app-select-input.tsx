import { Component, Prop, State, h, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'app-select-input',
  styleUrl: '../app-input/app-input.css',
  shadow: true,
})
export class AppSelectInput {
  @Prop() type: string;
  @Prop() placeholder: string;
  @Prop() field: string;
  @Prop() dropdownData: any[] = [];

  @State() value: string;

  @Event({
    eventName: 'selectChanged',
    composed: true,
    bubbles: true,
  })
  inputChanged: EventEmitter<any>;

  handleInputChange = event => {
    this.value = event.target.value;
    this.inputChanged.emit({ value: this.value, field: this.field });
  };

  render() {
    return (
      <div class="input-group my-2">
        <select class="form-control" onInput={this.handleInputChange}>
          <option value="">Select</option>
          {this.dropdownData.map(item => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
    );
  }
}
