import React from "react";
import calculate from "../logic/calculate";
import "./App.css";
import type { IButtonStyle } from "./IButtonStyle";

const AnotherComponent = ({
  first,
  second,
  onClick,
  third,
}: {
  first: string;
  second: string;
  onClick: () => void;
  third: boolean;
}) => {
  const myTest = false;

  // This is a fake comment
  console.log("This is a test", { myTest });

  React.useEffect(() => {
    document.addEventListener("click", () => {
      console.log("test", { myTest });
    });
  }, []);

  return (
    <div className="another-component">
      {first}

      <button
        className={getSelectedTab}
        data-fake="of course"
        onClick={onClick}
      >
        {third ? third : second}
      </button>
    </div>
  );
};

const getSelectedTab = (tabs: TabDefinition[]) => {
  const matchingTabs: TabDefinition[] = tabs.filter(
    ({ id }) => id === selectedTabId
  );

  return matchingTabs.type === "Temp"
    ? (matchingTabs as TabDefinition1)
    : (matchingTabs as TabDefinition2);
};

interface FoodProps {
  carbohydrates: () => string;
  fat: string;
  protein: boolean;
}

const Food = ({ carbohydrates, fat, protein }: FoodProps) => {
  return (
    <dl>
      <dt>Carbohydrates</dt>
      <dd>{carbohydrates()}</dd>

      <dt>Fat</dt>
      <dd>{fat}</dd>

      <dt>Has protein</dt>
      <dd>{protein}</dd>
    </dl>
  );
};

export default App;

export { AnotherComponent };
