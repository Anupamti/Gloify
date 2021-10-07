import { AppPage, ContainerLeft, ContainerRight, MobileView } from "./AppStyles";
import Navbar from "./components/navbar/navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Tasklist from "./components/tasklist/tasklist";
import Statusbar from "./components/statusbar/statusbar";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
function App() {

  const [click, setclick] = useState(false)

  return (
    <Router>
      <AppPage>
        <ContainerLeft click={click}>
          <MobileView>
            {
              click ? (<CloseIcon sx={{ fontSize: 40 }} onClick={() => setclick(!click)} />) : (<MenuIcon sx={{ fontSize: 40 }} onClick={() => setclick(!click)} />)
            }
          </MobileView>
          <Navbar />
        </ContainerLeft>
        <ContainerRight>
          <Statusbar />
          <Switch>
            <Route path='/dashboard' exact component={Dashboard} />
            <Route path='/' exact component={Tasklist} />
          </Switch>
        </ContainerRight>
      </AppPage>
    </Router>
  );
}

export default App;
