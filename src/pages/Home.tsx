import { useState } from "react";
import {
  LiquidityInputCard,
  TokenSelectionCard,
} from "../components/liquidity";

const Home = () => {
  const [localState, setLocalState] = useState({
    minLiquidity: 1030,
    maxLiquidity: 3030,
    tokenA: {
      balance: 332.32,
      balanceValue: 2010.2,
      userInput: 0,
      name: "MovEX",
    },
    tokenB: {
      balance: 332.32,
      balanceValue: 45000.0,
      userInput: 0,
      name: "USD Coin",
    },
  });

  return (
    <div className="home-page">
      <div className="liquidity-card">
        <h3 className="title-3">Add liquidity</h3>
        <h5 className="subtitle-4 mb-0">Deposit Pair to receive LP tokens</h5>
        <div className="flex items-center justify-between gap-2 mt-2">
          <TokenSelectionCard
            tokenName={localState.tokenA.name}
            balance={localState.tokenA.balance}
            balanceValue={localState.tokenA.balanceValue}
            userInput={localState.tokenA.userInput}
            onChangeToken={(name) => {
              setLocalState((s) => ({
                ...s,
                tokenA: {
                  ...s.tokenA,
                  name: name,
                },
              }));
            }}
            onChange={(v) =>
              setLocalState((s) => ({
                ...s,
                tokenA: {
                  ...s.tokenA,
                  userInput: Number(v),
                },
              }))
            }
            onSetMaxValue={() =>
              setLocalState((s) => ({
                ...s,
                tokenA: {
                  ...s.tokenA,
                  userInput: s.tokenA.balanceValue,
                },
              }))
            }
          />
          <TokenSelectionCard
            tokenName={localState.tokenB.name}
            balance={localState.tokenB.balance}
            balanceValue={localState.tokenB.balanceValue}
            userInput={localState.tokenB.userInput}
            onChangeToken={(name) => {
              setLocalState((s) => ({
                ...s,
                tokenB: {
                  ...s.tokenB,
                  name: name,
                },
              }));
            }}
            onChange={(v) =>
              setLocalState((s) => ({
                ...s,
                tokenB: {
                  ...s.tokenB,
                  userInput: Number(v),
                },
              }))
            }
            onSetMaxValue={() =>
              setLocalState((s) => ({
                ...s,
                tokenB: {
                  ...s.tokenB,
                  userInput: s.tokenB.balanceValue,
                },
              }))
            }
          />
        </div>
        <div className="flex items-center gap-2 mt-8">
          <LiquidityInputCard
            value={localState.minLiquidity}
            title="Min"
            tokenPair="USDC / 1 MovEX"
            onChange={(v) =>
              setLocalState((s) => ({ ...s, minLiquidity: Number(v) }))
            }
            increase={() =>
              setLocalState((prev) => ({
                ...prev,
                minLiquidity: Number((prev.minLiquidity + 0.1).toFixed(2)),
              }))
            }
            decrease={() =>
              setLocalState((prev) => ({
                ...prev,
                minLiquidity: Number((prev.minLiquidity - 0.1).toFixed(2)),
              }))
            }
          />
          <LiquidityInputCard
            value={localState.maxLiquidity}
            title="Max"
            tokenPair="USDC / 1 MovEX"
            onChange={(v) =>
              setLocalState((s) => ({ ...s, maxLiquidity: Number(v) }))
            }
            increase={() =>
              setLocalState((prev) => ({
                ...prev,
                maxLiquidity: Number((prev.maxLiquidity + 0.1).toFixed(2)),
              }))
            }
            decrease={() =>
              setLocalState((prev) => ({
                ...prev,
                maxLiquidity: Number((prev.maxLiquidity - 0.1).toFixed(2)),
              }))
            }
          />
        </div>
        <button
          disabled={
            !localState.tokenA.userInput || !localState.tokenB.userInput
          }
          className="add-confirm mt-8"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Home;
