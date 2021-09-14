import './App.css';
import { Form } from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import ClassComponent from './components/ClassComponent';
import { FunctionComponent } from './components/FunctionComponent';
import { Navbar } from './components/Navbar';
import { Practice } from './components/Practice';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DataOption } from './components/DataOption';
import ClassCounter from './components/ClassCounter';
import { FunctionCounter } from './components/FunctionCounter';
import UserData from './components/UserData';
import ClassState from './components/ClassState';
import FunctionState from './components/FunctionState';
import TableSearch from './components/TableSearch';
import ClassForm from './components/ClassForm';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Form/>
        </Route>
        <Route exact path="/class-component-addition">
          <ClassComponent/>
        </Route>
        <Route exact path="/class-component-form">
          <ClassForm/>
        </Route>
        <Route exact path="/class-component-counter">
          <ClassCounter/>
        </Route>
        <Route exact path="/class-component-state">
          <ClassState/>
        </Route>
        <Route exact path="/function-component-addition">
          <FunctionComponent/>
        </Route>
        <Route exact path="/function-component-counter">
          <FunctionCounter/>
        </Route>
        <Route exact path="/function-component-state">
          <FunctionState/>
        </Route>
        <Route exact path="/table-search">
          <TableSearch/>
        </Route>
        <Route exact path="/user-data-radio">
          <Practice/>
        </Route>
        <Route exact path="/user-data-option">
          <DataOption/>
        </Route>
        <Route exact path="/user/:id">
          <UserData/>
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
