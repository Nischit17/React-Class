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
- Two important HOOKS:-

- 1. useState()
- SuperPowerFull State variables in react.
- When we use useState, we should never use useState or create the state variables outside of our Component. Because it is used for creating local state variables inside our functional component.
- Never use our useState HOOK inside a if-else, functions because this can create inconsistency in our program.

- 2. useEffect()
- If no dependency array => useEffect is called on every render.

```
Component render + useEffect called.

```

- If dependency array is empty [] => useEffect is called on initial render(JUST ONCE)

```
1st time - Component render + useEffect called.
2nd time - Component render.

```

- If dependency array is [btnNameReact] => called everytime btnNameReact is updated.

```
1st time - Component render + useEffect called.
2nd time - By clicking on login/out it renders.

```

# MONOLITH ARCHITECTURE

- Monolith architecture is a traditional software design approach where an entire application is built as a single, self-contained unit. In this architecture, all components and functionalities of the application are tightly integrated into a single codebase, typically deployed as a single executable or a deployable unit.

# MICRO-SERVICE ARCHITECTURE

- Microservice architecture is a modern software design approach where an application is broken down into small, loosely coupled services that are independently deployable and maintainable. This architecture promotes scalability, agility, and fault isolation, allowing teams to develop, deploy, and scale individual services independently, making it easier to adapt to changes and manage complex applications.

# WHEN TO MAKE AN API CALL - 2 TYPES (IN REACT WE WILL BE USING THE 2ND APPROACH.)

- LOADS -> API -> RENDER
- As soon as our page loads we can make an API call and when we get the data then we can render it on to the UI.

- LOADS -> RENDER -> API -> RENDER
- As soon as the page loads we will just render our UI. After we should make a API call and as soon as we get result back from API we will now re-render our application with new data.

# CORS [CROSS ORIGIN RESOURCE SHARING]

- Cross-Origin Resource Sharing (CORS) is a security feature implemented in web browsers to control and manage how web pages from one domain can request and access resources (like data or scripts) from another domain. Browsers enforce CORS to prevent potentially malicious websites from making unauthorized requests to different domains on behalf of users.

# WORKING

- Origin Determination: Browsers use the "origin" to identify where a web request comes from. An origin consists of the protocol (e.g., "http" or "https"), domain, and port number.

- Same-Origin Policy: Browsers follow the same-origin policy by default, which restricts web pages from making requests to different origins. This prevents potential security risks by isolating websites from each other.

- Cross-Origin Requests: If a web page wants to make a request to a different origin (e.g., a different domain), it's considered a cross-origin request. Browsers enforce CORS for these requests.

- CORS Headers: When a cross-origin request is made, the browser adds an "Origin" header to the request. The server, in turn, responds with CORS-related headers in its response. The key headers are:

* Access-Control-Allow-Origin: Specifies which origins are allowed to access the resource. It can be a specific origin or a wildcard "\*".

* Access-Control-Allow-Methods: Indicates which HTTP methods (like GET, POST, etc.) are permitted for the request.

* Access-Control-Allow-Headers: Lists the HTTP headers that can be included in the actual request.

* Access-Control-Allow-Credentials: If true, indicates that the browser can include credentials (like cookies) in the request.

* Access-Control-Expose-Headers: Lists the headers that the browser can access in the response.

- Preflight Requests: For certain types of cross-origin requests (such as those with non-simple HTTP methods or custom headers), browsers send a preflight request with an HTTP OPTIONS method to the server. The server responds with appropriate CORS headers, indicating whether the actual request can proceed.

- Server Configuration: The server hosting the resource should be configured to send the appropriate CORS headers. These headers define which origins are allowed, what methods are permitted, and other relevant details. This configuration is essential for CORS to work effectively.

# CONDITIONAL RENDERING

- Rendering on the basis of some condition is known as conditional rendering.

# 2 types of Routing in WEB APPS

- Client side routing.
- Server side routing.

# REACT LIFE CYCLE METHOD

```
- URL :- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
```

# REDUX Toolkit

- Install @reduxjs/toolkit and react-redux.
- Build our store.
- Connect our store to our app.
- Slice (cartSlice).
- Dispatch(action).
  -Selector.

- React and Redux are different libraries.

- Advantages

- 1. While building large applications redux offers great solution for it like, Handling data, Managing the store, etc...
- 2. It is primarily used for handling state for application.
- 3. Application becomes easier to debug.

- There are 2 Libraries redux offers

- 1. REACT-REDUX :- It is like a bridge between react and redux.
- 2. REDUX TOOLKIT :- It is a newer way of writing redux.

- REDUX TOOLKIT (RTK).

# ARCHITECTURE OF REDUX [CART UPDATE]

- ADD -> A (dispatch (action)) -> Fn() (reducer) -> STORE(slice) -> selector (subscribed to the store) -> CART.

- Explanation (WRITE) :- when we click on the add btn it dispatches an action and calls a reducer function and this reducer function updates the slice of redux store and data gets updated, so this is how we write the data.

- Explanation (READ) :- We will use the SELECTOR to read the data from the store and this selector will modify our react component magically, so this is how we read the data. When we say subscribing to the store it means it is in SYNC with the store. If our data inside our store changes our component will update automagically.

# types of testing

- Unit Testing.
- Integration Testing
- End to End Testing - e2e testing

# Setting up Testing in our app

- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable babel transpilation
- Jest Configuration -> npx jest --init
- Install jsDOM library
