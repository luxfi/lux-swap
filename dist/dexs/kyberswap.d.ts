import { TxWithChainId, DecodeCalldataResult } from "../quote";
/**
 * @deprecated
 */
export declare const SUPPORT_CHAINS: never[];
export declare const getQuote: (options: import("../quote").QuoteParams, api: import("@luxfi/lux-api").OpenApiService) => Promise<import("../quote").QuoteResult>;
export declare const decodeCalldata: (tx: TxWithChainId) => DecodeCalldataResult | null;
