import React from "react";
import PropTypes from "prop-types";
import { classNames } from "pi-ui";
import styles from "./Join.module.css";

const DefaultSeparator = () => (
  <span className="margin-left-s margin-right-s color-gray">•</span>
);

export const Join = ({ children, SeparatorComponent, className }) => {
  const childrenArray = React.Children.toArray(children).filter(c => !!c);
  return (
    <div className={classNames(styles.join, className)}>
      {childrenArray.map((child, idx) => (
        <React.Fragment key={`join-${idx}`}>
          {React.cloneElement(child)}
          {childrenArray[idx + 1] ? <SeparatorComponent /> : ""}
        </React.Fragment>
      ))}
    </div>
  );
};

Join.propType = {
  children: PropTypes.node,
  SeparatorComponent: PropTypes.node
};

Join.defaultProps = {
  SeparatorComponent: DefaultSeparator
};

export default Join;
