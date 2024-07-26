import { OpenApiService } from "@luxwallet/lux-api";
import { CHAINS_ENUM } from "@luxwallet/common";
import { QuoteParams, QuoteResult } from "./quote";
import { DEX_ENUM } from "./consts";
export declare const isSameAddress: (addr1: string, addr2: string) => boolean;
export declare const generateGetQuote: ({ SUPPORT_CHAINS, id, dex, }: {
    SUPPORT_CHAINS: CHAINS_ENUM[];
    id: "uniswap3" | "matcha" | "openocean" | "1inch_v6" | "paraswap" | "kyberswap";
    dex: DEX_ENUM;
}) => (options: QuoteParams, api: OpenApiService) => Promise<QuoteResult>;
