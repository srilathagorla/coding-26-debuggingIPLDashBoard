// fix 1//
import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
  // fix 2//
  <Switch>
    {/* fix3 */}
    <Route exact path="/" component={Home} />
    {/* fix4 */}
    {/* fix5 */}
    <Route path="/team-matches/:id" component={TeamMatches} />
    <Route component={NotFound} />
  </Switch>
)

export default App
