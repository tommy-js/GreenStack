import React from "react";

interface Props {
  title: string;
  tab: number;
  changeTab: (tab: number) => void;
}

const NotificationsLink: React.FC<Props> = (props) => {
  return (
    <div onClick={() => props.changeTab(props.tab)}>
      <p>{props.title}</p>
    </div>
  );
};

export default NotificationsLink;
