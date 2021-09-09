//Suspense is for lazy loading because it take time to load that code so we have to use fallback
import React, { Suspense } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
// import NewQuote from './pages/NewQuote';
// import QuoteDetail from './pages/QuoteDetail';
import Layout from './components/layout/Layout';
// import NotFound from './pages/NotFound';
import LoadingSpinner from './components/UI/LoadingSpinner';

//for lazy loading - download code when its needed.
const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Layout >
  
      <Suspense fallback={<div className="centered"><LoadingSpinner /></div>}>

        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes"/>
          </Route>

          <Route exact path="/quotes">
            <AllQuotes />
          </Route>

          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>

          <Route path="/new-quote">
            <NewQuote />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

      </Suspense>

    </Layout>
  );
}

export default App;
