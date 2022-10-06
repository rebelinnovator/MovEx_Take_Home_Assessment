import { ArrowDown } from "../icons";

interface IProps {
  name: string;
  logo: string;
  onClick?: () => void;
}

const TokenSelectButton = ({ name, logo, onClick }: IProps) => {
  return (
    <div className="token-select" onClick={onClick}>
      <img src={logo} alt="movex" />
      <h4 className="token-name">{name}</h4>
      <div className="arrow">
        <ArrowDown />
      </div>
    </div>
  );
};

export default TokenSelectButton;
