import { CHAINS_ENUM } from "@luxfi/common";
import { QuoteParams, QuoteResult } from "../quote";
export declare const SUPPORT_CHAINS: CHAINS_ENUM[];
export declare const getQuote: (options: QuoteParams) => Promise<QuoteResult>;
