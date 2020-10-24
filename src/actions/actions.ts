export const mapStateToProps = (state: any) => {
  return {
    username: state.username,
    userId: state.userId,
    money: state.money,
    progress: state.progress,
    newaccount: state.newaccount,
    watchlist: state.watchlist,
    stocks: state.stocks,
    posts: state.posts,
    progressElements: state.progressElements,
    trades: state.trades,
    followers: state.followers,
    following: state.following,
    notifications: state.notifications,
    darkmode: state.darkmode,
  };
};

export const mapDispatchToProps = (dispatch: any) => {
  return {
    onUsernameSet: (username: string) =>
      dispatch({ type: "SET_USERNAME", payload: username }),
    onUserIDSet: (userId: string) =>
      dispatch({ type: "SET_USERID", payload: userId }),
    onMoneySet: (money: number) =>
      dispatch({ type: "SET_MONEY", payload: money }),
    onNewAccountSet: (newacc: boolean) =>
      dispatch({ type: "SET_NEW_ACCOUNT", payload: newacc }),
    onWatchlistSet: (watchlist: any) =>
      dispatch({ type: "SET_INITIAL_WATCHLIST", payload: watchlist }),
    onInitialPostsSet: (posts: any) =>
      dispatch({ type: "SET_INITIAL_POSTS", payload: posts }),
    onInitialTradeSet: (trades: any) =>
      dispatch({ type: "SET_INITIAL_TRADES", payload: trades }),
    onInitialFollowerSet: (followers: any) =>
      dispatch({ type: "SET_INITIAL_FOLLOWERS", payload: followers }),
    onInitialFollowingSet: (following: any) =>
      dispatch({ type: "SET_INITIAL_FOLLOWING", payload: following }),
    onInitialNotificationsSet: (notifications: any) =>
      dispatch({ type: "SET_INITIAL_NOTIFICATIONS", payload: notifications }),
    onInitialProgressSet: (progress: any) =>
      dispatch({ type: "SET_INITIAL_PROGRESS", payload: progress }),
    onInitialProgressElementsSet: (progressElements: any) =>
      dispatch({
        type: "SET_INITIAL_PROGRESS_ELEMENTS",
        payload: progressElements,
      }),
    onInitialCommentsSet: (comments: any) =>
      dispatch({ type: "SET_INITIAL_COMMENTS", payload: comments }),
    onDarkmodeSet: (darkmode: boolean) =>
      dispatch({ type: "SET_DARKMODE", payload: darkmode }),
    onInvisibleSet: (invisible: boolean) =>
      dispatch({ type: "SET_INVISIBLE", payload: invisible }),
    onAllowCommentsSet: (allowCommentsOnTrades: boolean) =>
      dispatch({
        type: "SET_ALLOW_COMMENTS_ON_TRADES",
        payload: allowCommentsOnTrades,
      }),
    onStocksSet: (stocks: any) =>
      dispatch({ type: "SET_STOCKS", payload: stocks }),
    onProfileImageSet: (profileImage: any) =>
      dispatch({ type: "SET_PROFILE_IMAGE", payload: profileImage }),
  };
};