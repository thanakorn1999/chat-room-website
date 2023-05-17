import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";

// Create the Apollo Client instance
const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <App />
        </Provider>
      </ApolloProvider>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
// const root = ReactDOM.unstable_createRoot(document.getElementById("root"));
// root.render(
//   <>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </>
// );

serviceWorker.unregister();
