import React, { useState, useEffect, useContext } from "react";
import AboutUs from "./../AboutUs";
import Learn from "./../Learn";
import NavBar from "../../navigation/NavBar";
import { LoadingUser } from "../login/LoadingUser";
import UserLoginAuthSubresolver from "../../resolvers/UserLoginAuthSubresolver";
import {
  PostItem,
  FollowerItem,
  FollowingItem,
  NotificationItem,
  WatchListItem,
} from "../../types/types";
import { statusContext } from "../../AppMain/App";
import { browserHist } from "../../AppMain/history";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../actions/actions";
import { queryToken, nonTokenModifyUserQuery } from "../../queries/queries";
import { useLazyQuery } from "react-apollo";

interface Redux {
  onInitialPostsSet: (posts: PostItem[]) => void;
  onInitialFollowerSet: (followers: FollowerItem[]) => void;
  onInitialFollowingSet: (following: FollowingItem[]) => void;
  onInitialNotificationsSet: (notifications: NotificationItem[]) => void;
  onWatchlistSet: (watchlist: WatchListItem[]) => void;
}

const AboutPageRender: React.FC<Redux> = (props) => {
  const [loadingInUser, setLoadingInUser] = useState(false);
  const [progress, setProgress] = useState([] as any);
  const [token, setToken] = useState();
  const { status, setStatus } = useContext(statusContext);
  const [passToken, { data }] = useLazyQuery(queryToken);
  const [getUser, { data: getUserData }] = useLazyQuery(
    nonTokenModifyUserQuery,
    {
      pollInterval: 500,
    }
  );

  useEffect(() => {
    if (status === false) {
      let sessionToken = sessionStorage.getItem("Token");
      if (sessionToken) {
        passToken({
          variables: {
            token: sessionToken,
          },
        });
      } else {
        browserHist.push("/login");
      }
    } else {
      let sessionToken = sessionStorage.getItem("Token");
      if (sessionToken) {
        getUser({
          variables: {
            token: sessionToken,
          },
        });
      }
    }
  }, []);

  useEffect(() => {
    if (getUserData) {
      props.onInitialPostsSet(getUserData.noTokenMod.posts);
      props.onInitialFollowerSet(getUserData.noTokenMod.followers);
      props.onInitialFollowingSet(getUserData.noTokenMod.following);
      props.onInitialNotificationsSet(getUserData.noTokenMod.notifications);
      props.onWatchlistSet(getUserData.noTokenMod.watchlist);
      setProgress(getUserData.noTokenMod.progress);
    }
  }, [getUserData]);

  useEffect(() => {
    if (status === false) {
      if (data && data.token) {
        setToken(data.token.token);
        setLoadingInUser(true);
      }
    }
  }, data);

  function loggedIn() {
    setStatus(true);
    setLoadingInUser(false);
  }

  function renderLoading() {
    if (status === true && progress.length > 0) {
      return (
        <div>
          <NavBar />
          <AboutUs />
          <Learn progress={progress} />
        </div>
      );
    }
  }

  function returnLoadingInUser() {
    if (loadingInUser === true) {
      return (
        <div className="render_loading">
          <div className="drop_loading_block">
            <LoadingUser />
            <UserLoginAuthSubresolver token={token} loggedIn={loggedIn} />
          </div>
        </div>
      );
    } else {
      return <div>{renderLoading()}</div>;
    }
  }

  return <div>{returnLoadingInUser()}</div>;
};

export const AboutPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPageRender);
