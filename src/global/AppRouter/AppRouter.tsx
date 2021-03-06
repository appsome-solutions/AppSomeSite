import { TermOfService } from 'pages/TermOfService/TermOfService';
import React, { FunctionComponent, useEffect } from 'react';
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { PrivacyPolicy } from 'pages/PrivatePolicy/PrivatePolicy';
import { NotFound } from 'pages/404/NotFound';
import { Offer } from 'pages/Offer/Offer';
import { Dashboard } from 'pages/Dashboard/Dashboard';
import { BasicForm } from '../../pages/BasicForm/BasicForm';

export const AppRouter: FunctionComponent = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/privacy-policy"
          exact
          component={() => (
            <PrivacyPolicy
              name="Appsome Solutions"
              abbreviation="AS"
              nameOfBusiness="Software Home Patryk Janik"
              officeCity=" office in Szczecin, ul. Monte Cassino 38b/2"
              webPage="www.appsome-solutions.com"
              personalData="The controller of your Personal data: Software Home Patryk Janik
          with registered office in Szczecin (hereinafter referred to as “Appsome Solutions” or “we”) at ul. Monte Cassino 38b/2."
              email="patryk.janik@appsome-solutions.com"
              lastVersionPolicy="17.04.2020"
              personalDataOffice=" ul. Monte Cassino 38b/2, 70-464 Szczecin)."
            />
          )}
        />
        <Route
          path="/term-of-service"
          exact
          component={() => <TermOfService name="AppSome Solutions" nameOfBusiness="AppSome Solutions" />}
        />
        <Route path="/basic-form" exact component={BasicForm} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/partnership-offer/:offerId" component={Offer} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </>
  );
};
