import React, { useEffect, useState, useContext } from "react";
import { GlossaryPage, Basics, Options, Protection } from "../about/LearnPage";
import Portfolio from "../portfolio/Portfolio";
import AboutPage from "../about/AboutPage";
import Homepage from "../Homepage/Homepage";
import NewAccountRender from "../NewAccountRender/NewAccountRender";
import NotificationsPage from "../notifications/NotificationsPage";
import { Route, Switch } from "react-router-dom";
import User from "../User/User";
import { statusContext } from "./App";
import { browserHist } from "./history.js";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";

interface TradeData {
  user: string;
  userId: number;
  title: string;
  ticker: string;
  type: string;
  tradeId: number;
  shares: number;
  price: number;
  gain: number;
  timestamp: number;
}

interface User {
  user: string;
  userId: number;
  netWorth: number;
  timeInMarket: number;
}

interface Props {
  newaccount: any;
}

const MainRender: React.FC<Props> = (props) => {
  const { status, setStatus } = useContext(statusContext);
  const [tradeMap, setTradeMap] = useState();
  const [userMap, setUserMap] = useState();
  const [constantActivity, setConstantActivity] = useState();
  const [tradeId, setTradeId] = useState(0);
  const [newacc, setNewacc] = useState(true);

  useEffect(() => {
    if (status === false) {
      browserHist.push("/login");
    }
  }, []);

  useEffect(() => {
    setNewacc(props.newaccount);
  }, []);

  function submit() {
    setNewacc(false);
  }

  function updateTradeMap(passInTradeMap: TradeData[]) {
    setTradeMap(passInTradeMap);
  }

  function updateUserMap(passInUserMap: User[]) {
    setUserMap(passInUserMap);
  }

  function updateConstantActivity(passInActivity: any) {
    setConstantActivity(passInActivity);
  }

  function returnTradePath() {
    if (tradeMap && userMap) {
      return (
        <div>
          {userMap.map((el: User) => (
            <Route path={`/user/${el.userId}`}>
              <User
                user={el.user}
                userId={el.userId}
                netWorth={el.netWorth}
                timeInMarket={el.timeInMarket}
              />
            </Route>
          ))}
        </div>
      );
    } else return null;
  }
  function returnRenderPath() {
    if (newacc === true) {
      return (
        <div>
          <NewAccountRender submit={submit} />
        </div>
      );
    } else if (newacc === false) {
      return (
        <div>
          <div id="push_under_navbar">
            <Switch>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/home">
                <Homepage updateConstantActivity={updateConstantActivity} />
              </Route>
              <Route exact path="/about">
                <AboutPage />
              </Route>
              <Route exact path="/notifications">
                <NotificationsPage />
              </Route>
            </Switch>
            {returnTradePath()}
            <Switch>
              <Route path="/about/glossary">
                <GlossaryPage />
              </Route>
              <Route path="/about/learn/general">
                <Basics />
              </Route>
              <Route path="/about/learn/options">
                <Options />
              </Route>
              <Route path="/about/learn/protection">
                <Protection />
              </Route>
            </Switch>
          </div>
        </div>
      );
    }
  }

  return <div>{returnRenderPath()}</div>;
};

export default connect(mapStateToProps)(MainRender);
