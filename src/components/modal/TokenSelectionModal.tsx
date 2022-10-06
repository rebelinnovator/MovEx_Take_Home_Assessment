import { useEffect, useState } from "react";
import { Close } from "../icons";

interface IProps {
  tokens?: Record<string, any>[];
  visible?: boolean;
  onClose?: () => void;
  onSelect?: (selected: Record<string, any>) => void;
  onSearch?: (txt: string) => void;
}

const TokenSelectionModal = ({
  tokens = [],
  visible = false,
  onClose,
  onSelect,
  onSearch,
}: IProps) => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (onSearch && searchInput.length > 0) {
      onSearch(searchInput);
    }
  }, [searchInput, onSearch]);

  return (
    <>
      {visible ? (
        <div className="token-selection-modal-container">
          <div className="token-selection-modal">
            <div className="flex items-center justify-between header">
              <h4 className="subtitle-4 text-black">Token List</h4>
              <button onClick={onClose}>
                <Close />
              </button>
            </div>
            <div className="token-search-container my-6">
              <input
                placeholder="Search token name."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <div className="token-list">
              {tokens.map((token) => (
                <div
                  className="token-list-item"
                  onClick={() => onSelect?.(token)}
                >
                  <img
                    alt={token.name}
                    src={`/img/token/logos/${token.symbol}.png`}
                  />
                  <div className="info">
                    <h4>{token.name}</h4>
                    <p>{token.symbol}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TokenSelectionModal;
