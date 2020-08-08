import React, {CSSProperties, MouseEventHandler, useCallback, useRef, useState} from "react";
import styles from "./split_panel.css";

export type SplitPanelPlop = {
  defaultWidth: number
}

export const SplitPanel: React.FunctionComponent<SplitPanelPlop> = (props) => {

  const [width, setWidth] = useState(props.defaultWidth);
  const isActive = useRef(false);
  const currentX = useRef(0);

  const refBase = useRef<HTMLDivElement>(null);

  const unFocus = useCallback((document, window) => {
    if (document.selection) {
      document.selection.empty();
    } else {
      window.getSelection().removeAllRanges();
    }
  }, []);

  const childrenList = React.Children.toArray(props.children);

  const handleMouseDown: MouseEventHandler = useCallback((e) => {

    //console.log("ok1: " + e.clientX);
    currentX.current = e.clientX;
    isActive.current = true;
    e.preventDefault();
    e.stopPropagation();

  }, []);

  const handleMouseUp: MouseEventHandler = useCallback((e) => {
    isActive.current = false;

    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleMouseLeave: MouseEventHandler = useCallback((e) => {
    isActive.current = false;

    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleMouseMove: MouseEventHandler = useCallback(e => {

    if (!isActive.current) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    unFocus(document, window);

    let offset = e.clientX - currentX.current;
    currentX.current = e.clientX;

    setWidth((width_) => {
      if (width_ + offset < 0) {
        return 0;
      }
      if (refBase.current!.getBoundingClientRect().width - 3 < (width_ + offset)) {
        return refBase.current!.getBoundingClientRect().width - 3;
      }
      return width_ + offset;
    });


  }, [setWidth]);

  return (<>

    <div className={styles.main} ref={refBase}>
      <SplitPanelItem width={width}>
        {childrenList[0]}
      </SplitPanelItem>
      <Separator onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave}/>
      <SplitPanelItem className={styles.item_second}>
        {childrenList[1]}
      </SplitPanelItem>
    </div>

  </>)

};

export type SplitPanelItemProp = {
  width?: number
  className?: string
}

const SplitPanelItem: React.FunctionComponent<SplitPanelItemProp> = (props) => {

  const customStyle: CSSProperties = {};
  if (props.width) {
    customStyle.width = props.width + "px";
  }

  let className = styles.item;
  if (props.className) {
    className += " " + props.className;
  }

  return (<div className={className} style={customStyle}>
    {props.children}
  </div>)

};

export type SeparatorProp = {
  onMouseDown?: MouseEventHandler
  onMouseMove?: MouseEventHandler
  onMouseUp?: MouseEventHandler
  onMouseLeave?: MouseEventHandler
}

const Separator: React.FunctionComponent<SeparatorProp> = (props) => {
  return (<>
    <div className={styles.separator_wrapper} onMouseDown={props.onMouseDown} onMouseMove={props.onMouseMove} onMouseUp={props.onMouseUp} onMouseLeave={props.onMouseLeave}>
      <div className={styles.separator}/>
    </div>

  </>)
};