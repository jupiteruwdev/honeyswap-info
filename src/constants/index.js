export const SupportedNetwork = Object.freeze({
  MAINNET: 1,
  RINKEBY: 4,
  XDAI: 100,
});

export const FACTORY_ADDRESS = {
  [SupportedNetwork.MAINNET]: "0xd34971bab6e5e356fd250715f5de0492bb070452",
  [SupportedNetwork.XDAI]: "0x2a4d822bfb34d377c978f28a6c332caa2ff87530",
  [SupportedNetwork.RINKEBY]: "0x02f45e773436C6D96Cc73600fe94a660ec67734C",
};

export const NATIVE_CURRENCY_SYMBOL = {
  [SupportedNetwork.MAINNET]: "ETH",
  [SupportedNetwork.XDAI]: "xDAI",
  [SupportedNetwork.RINKEBY]: "ETH",
};

export const BUNDLE_ID = "1";

export const timeframeOptions = {
  WEEK: "1 week",
  MONTH: "1 month",
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  ALL_TIME: "All time",
};

// hide from overview list
export const OVERVIEW_TOKEN_BLACKLIST = [
  "0x495c7f3a713870f68f8b418b355c085dfdc412c3",
  "0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea",
  "0xe31debd7abff90b06bca21010dd860d8701fd901",
  "0xfc989fbb6b3024de5ca0144dc23c18a063942ac1",
];

// pair blacklist
export const PAIR_BLACKLIST = ["0xb6a741f37d6e455ebcc9f17e2c16d0586c3f57a5"];

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = [
  "0xd46ba6d942050d489dbd938a2c909a5d5039a161",
];
