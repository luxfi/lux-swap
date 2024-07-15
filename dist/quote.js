var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DEX_ENUM } from "./consts";
import { getQuote as wrapTokenGetQuote } from "./dexs/wrapToken";
import { getQuote as oneInchGetQuote, decodeCalldata as oneInchDecodeCalldata, } from "./dexs/1inch";
import { getQuote as zeroXGetQuote, decodeCalldata as zeroXDecodeCalldata, } from "./dexs/0xapi";
import { getQuote as paraSwapGetQuote, decodeCalldata as paraSwapDecodeCalldata, } from "./dexs/paraswap";
import { getQuote as openOceanGetQuote, decodeCalldata as openOceanDecodeCalldata, } from "./dexs/openocean";
import { getQuote as uniswapGetQuote, decodeCalldata as uniswapDecodeCalldata, } from "./dexs/uniswap";
import { getQuote as kyberswapGetQuote, decodeCalldata as kyberswapDecodeCalldata, } from "./dexs/kyberswap";
export const getQuote = (id, params, api) => __awaiter(void 0, void 0, void 0, function* () {
    switch (id) {
        case DEX_ENUM.WRAPTOKEN:
            return yield wrapTokenGetQuote(params);
        case DEX_ENUM.ONEINCH:
            return yield oneInchGetQuote(params, api);
        case DEX_ENUM.PARASWAP:
            return yield paraSwapGetQuote(params, api);
        case DEX_ENUM.ZEROXAPI:
            return yield zeroXGetQuote(params, api);
        case DEX_ENUM.OPENOCEAN:
            return yield openOceanGetQuote(params, api);
        case DEX_ENUM.UNISWAP:
            return yield uniswapGetQuote(params, api);
        case DEX_ENUM.KYBERSWAP:
            return yield kyberswapGetQuote(params, api);
        default:
            throw new Error(`${id} is not supported!`);
    }
});
export const decodeCalldata = (id, tx) => {
    switch (id) {
        case DEX_ENUM.ONEINCH:
            return oneInchDecodeCalldata(tx);
        case DEX_ENUM.PARASWAP:
            return paraSwapDecodeCalldata(tx);
        case DEX_ENUM.ZEROXAPI:
            return zeroXDecodeCalldata(tx);
        case DEX_ENUM.OPENOCEAN:
            return openOceanDecodeCalldata(tx);
        case DEX_ENUM.UNISWAP:
            return uniswapDecodeCalldata(tx);
        case DEX_ENUM.KYBERSWAP:
            return kyberswapDecodeCalldata(tx);
        default:
            throw new Error(`${id} is not supported!`);
    }
};
