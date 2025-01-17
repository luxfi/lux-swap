import { CHAINS_ENUM } from "@luxwallet/common";
import { TxWithChainId, DecodeCalldataResult } from "../quote";
export declare const SUPPORT_CHAINS: CHAINS_ENUM[];
export declare const getQuote: (options: import("../quote").QuoteParams, api: import("@luxwallet/lux-api").OpenApiService) => Promise<import("../quote").QuoteResult>;
export declare const decodeCalldata: (tx: TxWithChainId) => DecodeCalldataResult | null;
