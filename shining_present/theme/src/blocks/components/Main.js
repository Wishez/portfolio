import React, { Component } from 'react'; 
import { Route, Switch, Redirect } from 'react-router-dom'
import { RouteTransition } from 'react-router-transition';

import NotFound from './../components/NotFound';
import MyRoute from './../components/MyRoute';

const Main = ({
}) => (
    <main className='main'>
    <Route render={({ location }) => (
        <RouteTransition 
            pathname={location.pathname}
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
        >
            <Switch style={{opacity: 0}}
             key={location.key} 
             location={location}>
                <Route exact path='/' render={props => (
                       <section>Hello world!</section>                 
                )} />   
                <MyRoute path='/registration'
                    component={({}) => ( <section>It is second section!</section> )} />
                <MyRoute path='/contacts'
                    component={({}) => ( <section>It is third section!</section> )} />
                <MyRoute path='/rules'
                    component={({}) => ( <section>It is fourth section!</section> )} />   
                <MyRoute path='/another_one'
                    component={({}) => ( <section>It is fifth section!</section> )} /> 
                <Route render={() => (

                    <Redirect to="/not_found" />
                )}  />
                <MyRoute path='/not_found'
                    component={NotFound} />
            </Switch>
      </RouteTransition>
    )} />
    </main>
);

export default Main;
