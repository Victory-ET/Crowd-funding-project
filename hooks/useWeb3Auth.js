import { useWeb3React } from "@web3-react/core";
import React from "react";
import { useCallback } from "react/cjs/react.development";
import { injected } from "../config/connectors";

export default function useWeb3Auth() {
  const { activate, deactivate, library } = useWeb3React();
  const login = useCallback(() => {
    activate(injected).then(() => {
      console.log("Activated");
    });
  }, [activate]);

  const logout = useCallback(() => {
    deactivate();
  }, [deactivate]);

  return {
    login,
    logout,
  };
}
