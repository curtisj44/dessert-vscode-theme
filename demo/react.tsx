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

type TabDefinition = {
  id: number;
};
type TabDefinition1 = TabDefinition[];
type TabDefinition2 = TabDefinition[];

const getSelectedTab = (tabs: TabDefinition[]) => {
  const matchingTabs: TabDefinition[] = tabs.filter(({ id }) => id === 1);

  return matchingTabs.length > 0
    ? (matchingTabs as TabDefinition1)
    : (matchingTabs as TabDefinition2);
};

interface FoodProps {
  carbohydrates: () => string;
  fat: string;
  protein: boolean;
}

type NonFatFoodProps = Omit<FoodProps, "fat">;
type NonFatFoodPropsWithReallyLongName = Omit<FoodProps, "fat">;

async function getFoodColors() {
  return "blue";
}

const getFoodColors2 = async () => {
  return "red";
};

const Food = async ({ carbohydrates, fat, protein }: FoodProps) => {
  const color = await getFoodColors();

  const renderCount = React.useRef<number>(0);

  const nonFatFoodRef1 = React.useRef<React.RefObject<NonFatFoodProps>>(
    React.createRef()
  );

  const nonFatFoodRef2 = React.useRef<
    React.RefObject<NonFatFoodPropsWithReallyLongName>
  >(React.createRef());

  console.log(renderCount, nonFatFoodRef1, nonFatFoodRef2, color);

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

export default AnotherComponent;

export { AnotherComponent, Food };
