import { Component, Prop, State, h, EventEmitter, Event, Host } from '@stencil/core';

@Component({
  tag: 'app-filter',
  styleUrl: 'app-filter.css',
  shadow: true,
})
export class AppFilter {
  @Prop() data: any[];
  @Prop() theme: string = 'standard';
  @State() filteredData: any[];
  @State() isPanelOpen: boolean = false;
  selectedFilters = { name: '', age: 0, item: '' };

  componentDidLoad() {
    this.filteredData = this.data;
  }

  @Event({
    eventName: 'filterApplied',
    composed: true,
    bubbles: true,
  })
  filterApplied: EventEmitter;

  handleInputChange = (event: CustomEvent) => {
    const { value, field } = event.detail;

    const data = {
      ...this.selectedFilters,
      [field]: value,
    };

    this.selectedFilters = data;
  };

  handleFilter = () => {
    this.filterApplied.emit(this.selectedFilters);
  };

  toggleFilterPanel = () => {
    this.isPanelOpen = !this.isPanelOpen;
  };

  render() {
    return (
      <Host>
        <div class="filter">
          <ion-icon class="filter-icon btn" name="filter-outline" onClick={this.toggleFilterPanel}></ion-icon>

          <div class={`filter-container ${this.isPanelOpen ? 'open' : ''}`}>
            <div class="card w-100">
              <div class="card-body">
                <app-input type="text" placeholder="Search" field="name" onInputChanged={this.handleInputChange} />

                <app-input type="number" placeholder="Age" field="age" onInputChanged={this.handleInputChange} />

                <app-select-input dropdownData={[1, 2, 3, 4, 5]} field="item" onSelectChanged={this.handleInputChange} />

                <button class="btn btn-primary mt-3" onClick={this.handleFilter}>
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
