import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {RunButton} from "./button/RunButton";

export const MainApplication: React.FunctionComponent = (props): React.ReactElement => {

  return (
    <>
      <RunButton/>
      <div>メインエディター</div>
    </>
  );

};

export function createComponent() {
  ReactDOM.render(<MainApplication/>, document.querySelector('#main'));
}