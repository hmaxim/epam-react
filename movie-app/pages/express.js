// import Express from 'express';
// import React from 'react';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import { renderToString } from 'react-dom/server';
// import configureStore from '../src/redux/rootStore';
// import App from '../src/containers/app/App';
// import { PersistGate } from 'redux-persist/integration/react';
// import { StaticRouter } from 'react-router';

// const app = Express();
// const port = 3000;

// //Serve static files
// app.use('/static', Express.static('static'));

// function renderFullPage(html, preloadedState) {
//   return `
//   <html>
//     <head>
//       <title>Redux Universal Example</title>
//     </head>
//     <body>
//       <div id="root">${html}</div>  
//       <script>
//         // WARNING: See the following for security issues around embedding JSON in HTML:
//         // https://redux.js.org/recipes/server-rendering/#security-considerations
//         window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
//       </script>
//       <script src="/static/bundle.js"></script>
//     </body>
//   </html>
//   `;
// }

// function handleRender(req, res) {
//   const store = configureStore().store;
//   // Create a new Redux store instance

//   // Render the component to a string
//   const html = renderToString(
//     // <PersistGate loading={null} persistor={configureStore().persistor}>
//     <StaticRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </StaticRouter>
//     // </PersistGate>
//   );

//   // Grab the initial state from our Redux store
//   const preloadedState = configureStore().store.getState();

//   // Send the rendered page back to the client
//   res.send(renderFullPage(html, preloadedState));
// }

// // This is fired every time the server side receives a request
// app.use(handleRender);

// app.listen(port);
