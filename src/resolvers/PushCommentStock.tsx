import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { pushCommentStockMutation } from "../queries/queries.js";

interface Props {
  username: string;
  userId: string;
  stockId: string;
  text: string;
  pushCommentStockMutation: (variables: object) => void;
}

const PushCommentStock: React.FC<Props> = (props) => {
  function submitComment() {
    props.pushCommentStockMutation({
      variables: {
        username: props.username,
        stockId: props.stockId,
        userId: props.userId,
        text: props.text,
      },
    });
  }

  return <button onClick={() => submitComment()}>Submit</button>;
};

export default compose(
  graphql(pushCommentStockMutation, { name: "pushCommentStockMutation" })
)(PushCommentStock);
