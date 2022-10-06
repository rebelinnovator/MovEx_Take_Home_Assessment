import { useState } from "react";
import { TokenSelectionModal } from "../modal";
import TokenSelectionButton from "./TokenSelectionButton";

const tokens = [
  {
    name: "MovEX",
    symbol: "movex",
  },
  {
    name: "Polygon",
    symbol: "matic",
  },
  {
    name: "USD Coin",
    symbol: "usdc",
  },
  {
    name: "Tether",
    symbol: "usdt",
  },
  {
    name: "Solana",
    symbol: "sol",
  },
];
interface IProps {
  tokenName: string;
  balance: string | number;
  balanceValue: string | number;
  userInput: number | string;
  onChange?: (amount: string | number) => void;
  onClick?: () => void;
  onSetMaxValue?: () => void;
  onChangeToken?: (name: string) => void;
}

const TokenSelectionCard = ({
  tokenName,
  balance,
  balanceValue,
  userInput,
  onSetMaxValue,
  onChange,
  onChangeToken,
}: IProps) => {
  const [visible, setVisible] = useState(false);
  const getTokenInfoByName = (name: string) => {
    return tokens.find(
      (token) => token.name.toLowerCase() === name.toLowerCase()
    );
  };
  return (
    <>
      <div className="token-card">
        <div className="flex items-center justify-between mb-1">
          <TokenSelectionButton
            logo={`/img/token/logos/${getTokenInfoByName(
              tokenName
            )?.symbol.toLowerCase()}.png`}
            name={tokenName}
            onClick={() => setVisible(true)}
          />
          <input
            className="amount-input"
            type={"number"}
            value={userInput > 0 ? userInput : undefined}
            onChange={(e) => onChange?.(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <p className="balance">Balance: {balance}</p>
          <div className="flex justify-between items-center">
            <button className="use-max-balance" onClick={onSetMaxValue}>
              max
            </button>
            <p className="balance">${balanceValue}</p>
          </div>
        </div>
      </div>
      <TokenSelectionModal
        visible={visible}
        onClose={() => setVisible(false)}
        tokens={tokens}
        onSelect={(token) => {
          onChangeToken?.(token.name);
          setVisible(false);
        }}
      />
    </>
  );
};

export default TokenSelectionCard;
