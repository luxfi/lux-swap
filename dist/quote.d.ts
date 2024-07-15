import { CHAINS_ENUM } from "@debank/common";
import { OpenApiService } from "@luxfi/lux-api";
import { DEX_ENUM } from "./consts";
export interface QuoteParams {
    fromToken: string;
    fromTokenDecimals: number;
    toToken: string;
    amount: string;
    userAddress: string;
    slippage: number;
    feeRate?: number;
    feeAddress?: string;
    gasPrice?: number;
    chain: CHAINS_ENUM;
    fee?: boolean;
}
export interface Tx {
    from: string;
    to: string;
    data: string;
    value: string;
    chainId?: number;
    gas?: number;
    gasPrice?: string;
}
export interface TxWithChainId extends Tx {
    chainId: number;
}
export interface QuoteResult {
    tx: Tx;
    fromToken: string;
    fromTokenDecimals?: number;
    fromTokenAmount: string;
    toToken: string;
    toTokenDecimals?: number;
    toTokenAmount: string;
    spender: string;
}
export declare const getQuote: (id: DEX_ENUM, params: QuoteParams, api: OpenApiService) => Promise<QuoteResult>;
export interface DecodeCalldataResult {
    fromToken: string;
    fromTokenAmount: string;
    toToken: string;
    minReceiveToTokenAmount: string;
    toTokenReceiver: string;
}
export declare const decodeCalldata: (id: DEX_ENUM, tx: TxWithChainId) => DecodeCalldataResult | null;
