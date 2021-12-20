import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-list',
  styleUrl: 'app-list.css',
  shadow: true,
})
export class AppFilter {
  @Prop() data: any[];

  render() {
    return (
      <div>
        <ul>
          {this.data?.map(item => (
            <li>
              {item.name} is {item.age} years old
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
