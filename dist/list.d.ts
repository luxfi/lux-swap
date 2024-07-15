import { CHAINS_ENUM } from "@debank/common";
export declare const WrapTokenAddressMap: {
    ETH: string;
    BSC: string;
    POLYGON: string;
    OP: string;
    FTM: string;
    AVAX: string;
    ARBITRUM: string;
    KLAY: string;
    GNOSIS: string;
    AURORA: string;
    BASE: string;
    ERA: string;
};
export declare const DEX_SUPPORT_CHAINS: {
    WrapToken: CHAINS_ENUM[];
    "1inch": CHAINS_ENUM[];
    ParaSwap: CHAINS_ENUM[];
    "0xAPI": CHAINS_ENUM[];
};
export declare const DEX_ROUTER_WHITELIST: {
    "1inch": {
        ETH: string;
        POLYGON: string;
        BSC: string;
        OP: string;
        FTM: string;
        AVAX: string;
        ARBITRUM: string;
        KLAY: string;
        GNOSIS: string;
        BASE: string;
        ERA: string;
        AURORA: string;
    };
    ParaSwap: {
        ETH: string;
        POLYGON: string;
        BSC: string;
        AVAX: string;
        FTM: string;
        ARBITRUM: string;
        OP: string;
        BASE: string;
    };
    "0xAPI": {
        ETH: string;
        POLYGON: string;
        BSC: string;
        OP: string;
        FTM: string;
        AVAX: string;
        ARBITRUM: string;
        BASE: string;
    };
};
export declare const DEX_SPENDER_WHITELIST: {
    "1inch": {
        ETH: string;
        POLYGON: string;
        BSC: string;
        OP: string;
        FTM: string;
        AVAX: string;
        ARBITRUM: string;
        KLAY: string;
        GNOSIS: string;
        BASE: string;
        ERA: string;
        AURORA: string;
    };
    ParaSwap: {
        ETH: string;
        POLYGON: string;
        BSC: string;
        AVAX: string;
        FTM: string;
        OP: string;
        ARBITRUM: string;
        BASE: string;
    };
    "0xAPI": {
        ETH: string;
        POLYGON: string;
        BSC: string;
        OP: string;
        FTM: string;
        AVAX: string;
        ARBITRUM: string;
        BASE: string;
    };
};
