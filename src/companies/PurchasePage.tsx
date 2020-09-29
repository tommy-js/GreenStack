import React, { useState } from "react";
import PurchaseStock from "../resolvers/PurchaseStock";
import AuctionStock from "../resolvers/AuctionStock";

interface Props {
  stockId: string;
  userId: string;
}

export const BuyStock: React.FC<Props> = (props) => {
  const [purchaseNum, setPurchaseNum] = useState(0);

  function coerceInt(val: string) {
    let int = parseInt(val);
    setPurchaseNum(int);
  }

  return (
    <div>
      <input
        type="number"
        value={purchaseNum}
        onChange={(e) => coerceInt(e.target.value)}
        placeholder="Buy"
      />
      <PurchaseStock
        stockId={props.stockId}
        userId={props.userId}
        shares={purchaseNum}
      />
    </div>
  );
};

export const SellStock: React.FC<Props> = (props) => {
  const [sellNum, setSellNum] = useState(0);

  function coerceInt(val: string) {
    let int = parseInt(val);
    setSellNum(int);
  }

  return (
    <div>
      <input
        type="number"
        value={sellNum}
        onChange={(e) => coerceInt(e.target.value)}
        placeholder="Sell"
      />
      <AuctionStock
        stockId={props.stockId}
        userId={props.userId}
        shares={sellNum}
      />
    </div>
  );
};
