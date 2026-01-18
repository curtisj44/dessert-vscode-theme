// Source:
// https://github.com/microsoft/fluentui/blob/master/packages/react/src/components/Button/DefaultButton/DefaultButton.tsx
import * as React from "react";
import { BaseButton } from "../BaseButton";
import { customizable, nullRender } from "../../../Utilities";
import { getStyles } from "./DefaultButton.styles";
import type { IButtonProps } from "../Button.types";

/**
 * {@docCategory Button}
 */
@customizable("DefaultButton", ["theme", "styles"], true)
export class DefaultButton extends React.Component<IButtonProps, {}> {
  public render(): JSX.Element {
    const { primary = false, styles, theme } = this.props;

    React.useEffect(() => {
      document.addEventListener("click", () => {
        console.log("test", { styles });
      });
    }, []);

    return (
      <BaseButton
        {...this.props}
        variantClassName={primary ? "ms-Button--primary" : "ms-Button--default"}
        styles={getStyles(theme!, styles, primary)}
        onRenderDescription={nullRender}
      />
    );
  }
}

const getDetails = (): { isFruit: boolean; isHealthy: boolean } => {
  return {
    isFruit: true,
    isHealthy: false,
  };
};
