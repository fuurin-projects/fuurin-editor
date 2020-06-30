import * as React from 'react';
import * as ReactDOM from 'react-dom';

export const MainApplication: React.FunctionComponent = (props): React.ReactElement => {

  return (
    <>
      <div>メインエディター</div>
    </>
  );

};

export function createComponent() {
  ReactDOM.render(<MainApplication/>, document.querySelector('#main'));
}