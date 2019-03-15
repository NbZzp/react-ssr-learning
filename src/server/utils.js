import {renderToString} from 'react-dom/server';
import React from 'react';
import {StaticRouter,Route} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'


import {Provider} from 'react-redux'

export const render = (store,routes,req,context)=>{
    const content = renderToString((
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    ))
    console.log('store.getState',store.getState())
    return (
          `<div id='root'>${content}</div>
          <script>
            window.context={
              state:${JSON.stringify(store.getState())}
            }
          </script>
          <script src='/index.js'></script>
          `
    );
  
}