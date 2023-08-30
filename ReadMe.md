# React-Class

# Parcel

- Dev build
- Local Server
- HMR = HOT MODULE REPLACEMENT
- File watching algorithm (It's written in C++)
- Caching = Faster Builds
- Image optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Diffrential Bundling (support older browsers)
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking (Remove unused code)
- Diffrent dev and prod bundles

# There are 2 types of EXPORT AND IMPORT

- Default EXPORT/IMPORT
  export defalut Component;
  import Component from "path";

- Named EXPORT/IMPORT
  import {Component} from "path";
  export const Component;

# React Hooks

- They are normal JS utility functions.
- Two important HOOKS
- 1. useState() - SuperPowerFull State variables in react.
- 2. useEffect()

# MONOLITH ARCHITECTURE

- Monolith architecture is a traditional software design approach where an entire application is built as a single, self-contained unit. In this architecture, all components and functionalities of the application are tightly integrated into a single codebase, typically deployed as a single executable or a deployable unit.

# MICRO-SERVICE ARCHITECTURE

- Microservice architecture is a modern software design approach where an application is broken down into small, loosely coupled services that are independently deployable and maintainable. This architecture promotes scalability, agility, and fault isolation, allowing teams to develop, deploy, and scale individual services independently, making it easier to adapt to changes and manage complex applications.

# WHEN TO MAKE AN API CALL - 2 TYPES (IN REACT WE WILL BE USING THE 2ND APPROACH.)

- LOADS -> API -> RENDER
- As soon as our page loads we can make an API call and when we get the data then we can render it on to the UI.

- LOADS -> RENDER -> API -> RENDER
- As soon as the page loads we will just render our UI. After we should make a API call and as soon as we get result back from API we will now re-render our application with new data.
