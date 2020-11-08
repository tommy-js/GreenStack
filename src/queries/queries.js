import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const createUserMutation = gql`
  mutation($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      userId
      username
      money
      token
    }
  }
`;

// May not be needed
const updateNewAccountMutation = gql`
  mutation($token: String!, $newaccount: Boolean!) {
    updateNewAccount(token: $token, newaccount: $newaccount) {
      newaccount
    }
  }
`;

const updateUserProgressMutation = gql`
  mutation($id: ID!, $specId: ID!, $increment: Int!) {
    updateUserProgress(id: $id, specId: $specId, increment: $increment) {
      id
    }
  }
`;

const setProfileImageMutation = gql`
  mutation($token: String!, $profileImage: String!) {
    setProfileImage(token: $token, profileImage: $profileImage) {
      profileImage
    }
  }
`;

const updateDarkModeMutation = gql`
  mutation($token: String!) {
    updateDarkMode(token: $token) {
      token
    }
  }
`;

const updateAllowCommentsMutation = gql`
  mutation($token: String!) {
    updateAllowComments(token: $token) {
      token
    }
  }
`;

const updateInvisibleMutation = gql`
  mutation($token: String!) {
    updateInvisible(token: $token) {
      token
    }
  }
`;

const saveSettingsMutation = gql`
  mutation(
    $token: String!
    $experience: Int!
    $education: Int!
    $motivations: Int!
  ) {
    saveSettings(
      token: $token
      experience: $experience
      education: $education
      motivations: $motivations
    ) {
      experience
    }
  }
`;

const savePreferredCommentaryMutation = gql`
  mutation($token: String!, $commentaryStyle: Int!) {
    savePreferredCommentary(token: $token, commentaryStyle: $commentaryStyle) {
      username
    }
    saveUserAsOld(token: $token) {
      username
    }
  }
`;

const pushTradeMutation = gql`
  mutation(
    $token: String!
    $tradeId: ID!
    $price: Float!
    $title: String!
    $ticker: String!
    $shares: Int!
    $gain: Float!
  ) {
    pushTrade(
      token: $token
      tradeId: $tradeId
      price: $price
      title: $title
      ticker: $ticker
      shares: $shares
      gain: $gain
    ) {
      shares
    }
  }
`;

// Replace
const pushSharesToUserMutation = gql`
  mutation(
    $shareId: ID!
    $token: ID!
    $shares: Int!
    $stockTitle: String!
    $stockId: ID!
  ) {
    pushSharesToUser(
      shareId: $shareId
      shares: $shares
      stockTitle: $stockTitle
      stockId: $stockId
      token: $token
    ) {
      stocks {
        stockId
      }
    }
  }
`;

const setBioMutation = gql`
  mutation($token: ID!, $bio: String!) {
    setBio(token: $token, bio: $bio) {
      bio
    }
  }
`;

const queryTradeQuery = gql`
  query($tradeId: ID!) {
    getTrade(tradeId: $tradeId) {
      tradeId
      ticker
      title
      userId
      username
      price
      type
      timestamp
      shares
      gain
      comments {
        userId
        username
        timestamp
        text
        likes
        dislikes
      }
    }
  }
`;

const updateLikesMutation = gql`
  mutation($commentId: ID!, $likes: ID!) {
    updateLikesComment(commentId: $commentId, likes: $likes) {
      commentId
      likes
    }
  }
`;

const updateDislikesMutation = gql`
  mutation($commentId: ID!, $likes: ID!) {
    updateDislikesComment(commentId: $commentId, dislikes: $dislikes) {
      commentId
      dislikes
    }
  }
`;

// Replace
const deleteCommentUserMutation = gql`
  mutation($token: String!, $commentId: ID!) {
    deleteCommentUser(token: $token, commentId: $commentId) {
      commentId
    }
  }
`;

const pushCommentPostMutation = gql`
  mutation($token: String!, $text: String!, $postId: ID!) {
    pushCommentPost(token: $token, text: $text, postId: $postId) {
      text
    }
  }
`;

const pushCommentTutorialMutation = gql`
  mutation($id: ID!, $text: String!, $token: String!) {
    pushCommentTutorial(id: $id, text: $text, token: $token) {
      id
    }
  }
`;

const pushCommentStockMutation = gql`
  mutation($token: String!, $text: String!, $stockId: ID!) {
    pushCommentStock(token: $token, text: $text, stockId: $stockId) {
      text
    }
    pushCommentUser(token: $token, text: $text) {
      text
    }
  }
`;

const pushCommentTradeMutation = gql`
  mutation($token: String!, $text: String!, $stockId: ID!) {
    pushCommentTrade(token: $token, text: $text, stockId: $stockId) {
      text
    }
    pushCommentUser(token: $token, text: $text) {
      text
    }
  }
`;

const dropNotificationMutation = gql`
  mutation($token: String!, $id: ID!) {
    dropNotification(token: $token, id: $id) {
      id
    }
  }
`;

const deleteCommentStockMutation = gql`
  mutation($stockId: ID!, $commentId: ID!) {
    deleteCommentStock(stockId: $stockId, commentId: $commentId) {
      stockId
      commentId
    }
  }
`;

const updateUserSettingsMutation = gql`
  mutation(
    $userId: ID!
    $darkmode: Boolean!
    $invisible: Boolean!
    $allowCommentsOnTrades: Boolean!
  ) {
    updateUserSettings(
      userId: $userId
      darkmode: $darkmode
      invisible: $invisible
      allowCommentsOnTrades: $allowCommentsOnTrades
    ) {
      darkmode
      invisible
      allowCommentsOnTrades
    }
  }
`;

const pushFollowerToUserMutation = gql`
  mutation($token: String!, $followId: ID!, $followName: String!) {
    followUser(token: $token, followId: $followId, followName: $followName) {
      username
    }
  }
`;

const unfollowUserMutation = gql`
  mutation($token: String!, $followerId: ID!) {
    unfollowUser(token: $token, followerId: $followerId) {
      userId
    }
  }
`;

const pushStockToWatchlistMutation = gql`
  mutation($stockId: ID!, $token: String!, $title: String!, $ticker: String!) {
    pushStockToWatchlist(
      stockId: $stockId
      ticker: $ticker
      title: $title
      token: $token
    ) {
      ticker
    }
  }
`;

const removeStockFromWatchlistMutation = gql`
  mutation($stockId: ID!, $token: String!) {
    removeStockFromWatchlist(stockId: $stockId, token: $token) {
      userId
    }
  }
`;

const blockUserMutation = gql`
  mutation($id: ID!, $blocked: Boolean!) {
    blockUser(id: $id, blocked: $blocked) {
      id
      blocked
    }
  }
`;

const postMutation = gql`
  mutation(
    $token: String!
    $title: String!
    $text: String!
    $accompaniedURL: String!
  ) {
    post(
      token: $token
      title: $title
      text: $text
      accompaniedURL: $accompaniedURL
    ) {
      username
    }
  }
`;

const dislikeStockMutation = gql`
  mutation($commentId: ID!, $dislikes: Int!) {
    dislikeStock(commentId: $commentId, dislikes: $dislikes) {
      dislikes
    }
  }
`;

const likeStockMutation = gql`
  mutation($commentId: ID!, $likes: Int!) {
    likeStock(commentId: $commentId, likes: $likes) {
      likes
    }
  }
`;

const updateMoneyMutation = gql`
  mutation($userId: ID!, $money: Float!) {
    updateMoney(userId: $userId, money: $money) {
      userId
      money
    }
  }
`;

const updateUserNotificationsViewedMutation = gql`
  mutation($id: ID!) {
    updateUserNotificationsViewed(id: $id) {
      id
    }
  }
`;

const addCommentTradeMutation = gql`
  mutation($tradeId: ID!, $text: String!, $token: String!) {
    addCommentTrade(text: $text) {
      text
    }
  }
`;

const addCommentStockMutation = gql`
  mutation($stockId: ID!, $token: String!, $text: String!) {
    addCommentStock(stockId: $stockId, token: $token, text: $text) {
      text
    }
  }
`;

const newTokenMutation = gql`
  mutation($token: String!, $newToken: String!) {
    newToken(token: $token, newToken: $newToken) {
      token
    }
  }
`;

const purchaseStockMutation = gql`
  mutation($token: String!, $stockId: ID!, $shares: Int, $money: Float!) {
    updateShares(token: $token, stockId: $stockId, shares: $shares) {
      userId
    }
    updateMoney(token: $token, money: $money) {
      money
    }
  }
`;

const sellStockMutation = gql`
  mutation($userId: ID!, $stockId: ID!, $shares: Int, $money: Float!) {
    updateShares(userId: $userId, stockId: $stockId, shares: $shares) {
      userId
    }
    updateMoney(userId: $userId, money: $money) {
      money
    }
  }
`;

const likeCommentMutation = gql`
  mutation($postId: String!, $commentId: String!) {
    likeComment(postId: $postId, commentId: $commentId) {
      username
    }
  }
`;

const dislikeCommentMutation = gql`
  mutation($postId: String!, $commentId: String!) {
    dislikeComment(postId: $postId, commentId: $commentId) {
      username
    }
  }
`;

const likePostMutation = gql`
  mutation($postId: String!) {
    likePost(postId: $postId) {
      username
    }
  }
`;

const dislikePostMutation = gql`
  mutation($postId: String!) {
    dislikePost(postId: $postId) {
      username
    }
  }
`;

const userLoginQuery = gql`
  query($username: String!) {
    userLogin(username: $username) {
      username
      userId
      hash
    }
  }
`;

const queryToken = gql`
  query($token: String!) {
    token(token: $token) {
      token
      userId
    }
  }
`;

const distinctUserQuery = gql`
  query($username: String!) {
    specUser(username: $username) {
      username
      userId
    }
  }
`;

const otherUserQuery = gql`
  query($userId: ID!) {
    altUser(userId: $userId) {
      userId
      username
      money
      membership
      profileImage
      following {
        userId
        username
      }
      followers {
        followerId
        followerName
        blocked
      }
      trades {
        price
        tradeId
        timestamp
        title
        ticker
        shares
        gain
      }
      posts {
        userId
        postId
        timestamp
        likes
        dislikes
        title
        text
        accompaniedURL
        comments {
          userId
          username
          commentId
          timestamp
          text
          likes
          dislikes
        }
      }
      comments {
        userId
        username
        timestamp
        text
        likes
        dislikes
      }
      watchlist {
        stockId
        title
        ticker
        timestamp
      }
    }
  }
`;

const nonTokenModifyUserQuery = gql`
  query($token: String!) {
    noTokenMod(token: $token) {
      userId
      username
      bio
      money
      newaccount
      darkmode
      membership
      invisible
      allowCommentsOnTrades
      profileImage
      token
      following {
        userId
        username
      }
      followers {
        followerId
        followerName
        blocked
      }
      stocks {
        stockId
        stockTitle
        shares
        color
        ticker
      }
      trades {
        price
        tradeId
        timestamp
        title
        ticker
        shares
        gain
      }
      posts {
        userId
        postId
        timestamp
        likes
        dislikes
        title
        text
        accompaniedURL
        comments {
          userId
          username
          commentId
          timestamp
          text
          likes
          dislikes
        }
      }
      comments {
        userId
        username
        timestamp
        text
        likes
        dislikes
      }
      watchlist {
        stockId
        title
        ticker
        timestamp
      }
      notifications {
        content
        timestamp
        id
        viewed
      }
      progress {
        title
        id
        percent
        progressElements {
          id
          passed
        }
      }
    }
  }
`;

const userQuery = gql`
  query($token: String!) {
    user(token: $token) {
      userId
      username
      bio
      money
      newaccount
      darkmode
      membership
      invisible
      allowCommentsOnTrades
      profileImage
      token
      following {
        userId
        username
      }
      followers {
        followerId
        followerName
        blocked
      }
      stocks {
        stockId
        stockTitle
        shares
        color
        ticker
      }
      trades {
        price
        tradeId
        timestamp
        title
        ticker
        shares
        gain
      }
      posts {
        userId
        postId
        timestamp
        likes
        dislikes
        title
        text
        accompaniedURL
        comments {
          userId
          username
          commentId
          timestamp
          text
          likes
          dislikes
        }
      }
      comments {
        userId
        username
        timestamp
        text
        likes
        dislikes
      }
      watchlist {
        stockId
        title
        ticker
        timestamp
      }
      notifications {
        content
        timestamp
        id
        viewed
      }
      progress {
        title
        id
        percent
        progressElements {
          id
          passed
        }
      }
    }
  }
`;

const stockQuery = gql`
  query($stockId: ID!) {
    stock(stockId: $stockId) {
      stockId
      ticker
      name
      about
      creation
      prediction
      comments {
        userId
        username
        timestamp
        text
        likes
        dislikes
      }
    }
  }
`;

const queryPosts = gql`
  query($userId: ID!) {
    getPosts(userId: $userId) {
      userId
      postId
      likes
      dislikes
      timestamp
      title
      text
      accompaniedURL
    }
  }
`;

const individualPostQuery = gql`
  query($postId: ID!) {
    post(postId: $postId) {
      userId
      timestamp
      postId
      likes
      dislikes
      title
      text
      accompaniedURL
      comments {
        userId
        commentId
        username
        timestamp
        text
        likes
        dislikes
      }
    }
  }
`;

const searchQuery = gql`
  query($argument: String!) {
    searchUser(argument: $argument) {
      username
      userId
      bio
    }
    searchStock(argument: $argument) {
      name
      ticker
    }
  }
`;

const returnFeedQuery = gql`
  query($token: String!) {
    returnFollowerFeed(token: $token) {
      posts {
        userId
        postId
        timestamp
        likes
        dislikes
        title
        text
        comments {
          userId
          username
          commentId
          timestamp
          text
          likes
          dislikes
        }
      }
    }
  }
`;

const requestDataSetQuery = gql`
  query($tickers: [String!]) {
    requestData(tickers: $tickers) {
      title
      elements {
        x
        y
      }
    }
  }
`;

const returnNewsQuery = gql`
  query($title: String!) {
    returnNews(title: $title) {
      articles {
        source {
          id
          name
        }
        author
        title
        description
        url
        publishedAt
        content
      }
    }
  }
`;

const tutorialQuery = gql`
  query($id: ID!) {
    tutorial(id: $id) {
      id
      comments {
        userId
        username
        commentId
        timestamp
        text
        likes
        dislikes
      }
    }
  }
`;

export {
  createUserMutation,
  updateDarkModeMutation,
  updateAllowCommentsMutation,
  updateInvisibleMutation,
  addCommentTradeMutation,
  updateUserNotificationsViewedMutation,
  updateLikesMutation,
  addCommentStockMutation,
  updateDislikesMutation,
  updateUserProgressMutation,
  deleteCommentUserMutation,
  dropNotificationMutation,
  pushCommentPostMutation,
  pushCommentTutorialMutation,
  pushCommentStockMutation,
  pushCommentTradeMutation,
  deleteCommentStockMutation,
  updateUserSettingsMutation,
  pushFollowerToUserMutation,
  unfollowUserMutation,
  saveSettingsMutation,
  savePreferredCommentaryMutation,
  dislikeStockMutation,
  likeStockMutation,
  dislikeCommentMutation,
  postMutation,
  pushTradeMutation,
  blockUserMutation,
  updateMoneyMutation,
  setProfileImageMutation,
  pushSharesToUserMutation,
  setBioMutation,
  pushStockToWatchlistMutation,
  removeStockFromWatchlistMutation,
  newTokenMutation,
  purchaseStockMutation,
  likeCommentMutation,
  sellStockMutation,
  likePostMutation,
  dislikePostMutation,
  distinctUserQuery,
  userQuery,
  nonTokenModifyUserQuery,
  stockQuery,
  userLoginQuery,
  queryTradeQuery,
  queryPosts,
  queryToken,
  individualPostQuery,
  searchQuery,
  otherUserQuery,
  returnFeedQuery,
  requestDataSetQuery,
  returnNewsQuery,
  tutorialQuery,
};
