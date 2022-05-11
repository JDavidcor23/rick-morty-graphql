import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from "./styles/GlobalStyles";
import Home from './Pages/Home';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://rickandmortyapi.com/graphql",
  }),
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <GlobalStyle/>
    <Home />
  </ApolloProvider>
);

