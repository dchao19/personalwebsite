import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {match, RouterContext} from 'react-router'
import createMemoryHistory from 'history/lib/createMemoryHistory'
import Index from './index.jsx'
import routes from './routes/allRoutes'

module.exports = function (locals, callback) {
    const history = createMemoryHistory();    
    match({ routes, location: locals.path }, (error, redirectLocation, renderProps) => {
       callback(null, ReactDOMServer.renderToString(<RouterContext {...renderProps}/>)) 
    });
}