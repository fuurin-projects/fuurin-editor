import React, {MouseEventHandler} from "react";
import WindowRepository from "../../../repository/WindowRepository";
import {Button} from "../../atoms/Button/Button";

type Prop = {
  text?: string
}

/**
 * 現在のWindowを閉じるボタン
 * @param text ボタンのテキスト
 * @constructor
 */
const WindowsCloseButton: React.FunctionComponent<Prop> = ({text = "キャンセル"}) => {

  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log("CreateProjectButton click!");
    WindowRepository.instance().closeCurrentWindow();
  };

  return (<>
    <Button onClick={onClick}>{text}</Button>
  </>)

};

export {WindowsCloseButton, Prop}
