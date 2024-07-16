var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CHAINS, CHAINS_ENUM } from "@luxfi/common";
import { DEX_ENUM } from "./consts";
import { DEX_SPENDER_WHITELIST } from "./list";
export const isSameAddress = (addr1, addr2) => {
    if (typeof addr1 !== "string" || typeof addr2 !== "string")
        return false;
    return addr1.toLowerCase() === addr2.toLowerCase();
};
export const generateGetQuote = ({ SUPPORT_CHAINS, id, dex, }) => (options, api) => __awaiter(void 0, void 0, void 0, function* () {
    if (!SUPPORT_CHAINS.includes(options.chain)) {
        throw new Error(`${CHAINS[options.chain]} is not support on ${dex}`);
    }
    const params = {
        id: options.userAddress,
        chain_id: CHAINS[options.chain].serverId,
        dex_id: options.chain === CHAINS_ENUM.ETH
            ? id
            : `${CHAINS[options.chain].serverId}_${id}`,
        pay_token_id: options.fromToken,
        pay_token_raw_amount: options.amount,
        receive_token_id: options.toToken,
        slippage: options.slippage / 100,
    };
    if (options.fee) {
        params.fee = true;
    }
    const data = yield api.getSwapQuote(params);
    const isNativeToken = isSameAddress(data.pay_token.id, CHAINS[options.chain].nativeTokenAddress);
    return {
        tx: {
            data: data.dex_swap_calldata,
            value: isNativeToken ? options.amount : "0",
            to: data.dex_swap_to,
            from: options.userAddress,
        },
        fromToken: data.pay_token.id,
        fromTokenAmount: options.amount,
        fromTokenDecimals: data.pay_token.decimals,
        toToken: data.receive_token.id,
        toTokenAmount: data.receive_token_raw_amount + "",
        toTokenDecimals: data.receive_token.decimals,
        spender: dex === DEX_ENUM.PARASWAP
            ? DEX_SPENDER_WHITELIST[DEX_ENUM.PARASWAP][options.chain]
            : data.dex_swap_to,
    };
});
