import './App.css';
import { Form } from './componets/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import ClassComponent from './componets/ClassComponent';
import { FunctionComponent } from './componets/FunctionComponent';
import { Navbar } from './componets/Navbar';
import { Practice } from './componets/Practice';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DataOption } from './componets/DataOption';
import ClassCounter from './componets/ClassCounter';
import { FunctionCounter } from './componets/FunctionCounter';

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
        <Route exact path="/class-component-counter">
          <ClassCounter/>
        </Route>
        <Route exact path="/function-component-addition">
          <FunctionComponent/>
        </Route>
        <Route exact path="/function-component-counter">
          <FunctionCounter/>
        </Route>
        <Route exact path="/user-data-radio">
          <Practice/>
        </Route>
        <Route exact path="/user-data-option">
          <DataOption/>
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
