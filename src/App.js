import './App.css';
import { Form } from './componets/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import ClassComponent from './componets/ClassComponent';
import { FunctionComponent } from './componets/FunctionComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar } from './componets/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Form/>
        </Route>
        <Route exact path="/class-component">
          <ClassComponent/>
        </Route>
        <Route exact path="/function-component">
          <FunctionComponent/>
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
