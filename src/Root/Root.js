import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';
import { MainStyled } from './RootElements';
import { GlobalStyle } from '../globalStyle';
import Home from '../Home/Home';
import Header from '../shared/Header/Header';

function App() {
  const [data, setData] = useState({
    basket: {
      item1: 0,
      item2: 0,
      item3: 0,
      item4: 0,
    },
    itemCount: 0,
  });
  const addItem = () => {
    setData({ itemCount: data.itemCount + 1 })
  }
  return (
    <Router>
      <GlobalStyle />
      <Header itemCount={data.itemCount} />
      <MainStyled>
        <Switch>
          <Route path="/" exact>
            <Home itemCount={data.itemCount} fn={addItem} />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </MainStyled>
    </Router>
  )
}
export default App;
