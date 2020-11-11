import React from "react";
import { returnDate } from "../notifications/notificationsTimestamp";

interface Hist {
  style: string;
  text: string;
  timestamp: number;
}

const HistoryElement: React.FC<Hist> = (props) => {
  return (
    <div className="notifications_link">
      <p>{props.text}</p>
      <p>{returnDate(props.timestamp)}</p>
    </div>
  );
};

export default HistoryElement;
