# app-filter



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type    | Default     |
| -------- | --------- | ----------- | ------- | ----------- |
| `data`   | --        |             | `any[]` | `undefined` |


## Events

| Event           | Description | Type               |
| --------------- | ----------- | ------------------ |
| `filterApplied` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [app-input](../app-input)
- [app-list](../app-list)

### Graph
```mermaid
graph TD;
  app-filter --> app-input
  app-filter --> app-list
  style app-filter fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
