import { MinusCircle, PlusCircle } from "../icons";

interface IProps {
  title: string;
  tokenPair?: string;
  value?: number | string;
  onChange?: (v: number | string) => void;
  increase?: () => void;
  decrease?: () => void;
}

const LiquidityInputCard = ({
  title,
  tokenPair,
  value,
  onChange,
  increase,
  decrease,
}: IProps) => {
  return (
    <div className="input-card">
      <div className="flex items-center justify-between">
        <button onClick={decrease}>
          <MinusCircle />
        </button>
        <div className="text-center">
          <h4>{title}</h4>
          <input
            className="amount-input text-center text-green liq"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
          />
          <p>{tokenPair}</p>
        </div>
        <button onClick={increase}>
          <PlusCircle />
        </button>
      </div>
    </div>
  );
};

export default LiquidityInputCard;
