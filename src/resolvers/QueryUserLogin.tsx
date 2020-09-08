import React, { useEffect, useContext } from "react";
import { useLazyQuery } from "react-apollo";
import { userQuery } from "../queries/queries";
import { statusContext, userContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";

interface Props {
  username: string;
  password: string;
}

const QueryUserLogin: React.FC<Props> = (props) => {
  const userId = 35343;
  const { status, setStatus } = useContext(statusContext);
  const { userVal, setUserVal } = useContext(userContext);
  const [getUser, { loading, data }] = useLazyQuery(userQuery);

  function logIn() {
    getUser({
      variables: {
        userId: userId,
      },
    });
  }

  useEffect(() => {
    console.log(data);
    if (data) {
      setUserVal({
        username: data.user.username,
        userId: userId,
        money: data.user.money,
        darkmode: data.user.darkmode,
        invisible: data.user.invisible,
        allowCommentsOnTrades: data.user.allowCommentsOnTrades,
        followers: data.user.followers,
        profileImage: data.user.profileImage,
        trades: data.user.trades,
        watchlist: data.user.watchlist,
        comments: data.user.comments,
        notifications: data.user.notifications,
      });
      setStatus(true);
      browserHist.push("/");
    }
  }, [data]);

  return <button onClick={() => logIn()}>Sign In</button>;
};

export default QueryUserLogin;