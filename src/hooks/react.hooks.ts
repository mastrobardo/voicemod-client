/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";

/**
 * Helper function for watching changed props
 * @param callback - Functionality of component mount
 * @param willUnmount - Functionality of component will unmount
 */
export const componentDidMount = (callback: CallableFunction, willUnmount?: () => void) => {
  useEffect(() => {
    callback();

    if (willUnmount) {
      return willUnmount;
    }
  }, []);
};

/**
 * Helper function for monitoring props changed
 * @param callback - callback to be called on prop change
 * @param changeVariables - array of properties to watch
 */
export const onPropsChanged = (changeVariables: Array<any>, callback: CallableFunction) => {
  useEffect(() => callback(), changeVariables);
};
