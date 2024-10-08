import { InjectedConnector } from "@web3-react/injected-connector";
import { currentNetwork } from "./index"
import Metamask from "../icons/Metamask";
import TrustWallet from "../icons/TrustWallet";


export const injectedConnector = new InjectedConnector({ supportedChainIds: [+currentNetwork] });


export function getConnector(connectorId) {
  switch (connectorId) {
    case "injectedConnector":
      return injectedConnector; 
    default:
      return injectedConnector;
  }
}

export const connectorsByName = {
  'Injected': injectedConnector,
}

export const connectors = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: injectedConnector,
    key: "injectedConnector",
  },
  {
    title: "TrustWallet",
    icon: TrustWallet,
    connectorId: injectedConnector,
    key: "injectedConnector",
  },
]

export const connectorLocalStorageKey = "connectorId";