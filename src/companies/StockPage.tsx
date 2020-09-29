import React, { useContext, useState, useEffect } from "react";
import CompanyInformationBlock from "./CompanyInformationBlock";
import CompanyOptions from "./CompanyOptions";
import CompanyNewsBlock from "./CompanyNewsBlock.js";
import CompanyComments from "./CompanyComments";
import TradeBlock from "./TradeBlock";
import { statusContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";

interface Props {
  title: string;
  ticker: string;
  stockId: string;
}

const StockPage: React.FC<Props> = (props) => {
  const { status, setStatus } = useContext(statusContext);

  useEffect(() => {
    if (status === false) {
      browserHist.push("/login");
    }
  }, []);

  return (
    <div className="stock_page">
      <CompanyInformationBlock title={props.title} price={"0"} />
      <CompanyOptions
        title={props.title}
        ticker={props.ticker}
        stockId={props.stockId}
      />
      <CompanyNewsBlock title={props.title} />
      <TradeBlock stockId={props.stockId} />
      <CompanyComments
        title={props.title}
        ticker={props.ticker}
        stockId={props.stockId}
      />
    </div>
  );
};

export default StockPage;
