import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import DashBoard from './Dashboard/Dashboard';
import { Route, Switch, Redirect } from 'react-router-dom';

function Root() {
  return (
    <MainTemplate>
      <Switch>
        <Route exact path="/">
          <Redirect to="/recipes/cake" />
        </Route>
        <Route path="/recipes/:type?">
          <DashBoard />
        </Route>
      </Switch>
    </MainTemplate>
  );
}

export default Root;
