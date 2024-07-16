import { CHAINS } from "@luxfi/common";
import { Interface } from "@ethersproject/abi";
import { generateGetQuote } from "../utils";
import { UniswapABI } from "../abi";
import { DEX_ENUM } from "../consts";
/**
 * @deprecated
 */
export const SUPPORT_CHAINS = [
// CHAINS_ENUM.ETH,
// CHAINS_ENUM.POLYGON,
// CHAINS_ENUM.OP,
// CHAINS_ENUM.ARBITRUM,
];
export const getQuote = generateGetQuote({
    SUPPORT_CHAINS,
    id: "uniswap3",
    dex: DEX_ENUM.UNISWAP,
});
export const decodeCalldata = (tx) => {
    var _a, _b, _c;
    const chain = Object.values(CHAINS).find((item) => item.id === tx.chainId);
    if (!chain)
        return null;
    const contractInterface = new Interface(UniswapABI);
    const result = contractInterface.parseTransaction({ data: tx.data });
    if (result.name === "multicall" && ((_b = (_a = result === null || result === void 0 ? void 0 : result.args) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.length) === 2) {
        const data = (_c = result === null || result === void 0 ? void 0 : result.args) === null || _c === void 0 ? void 0 : _c.data;
        if (data.startsWith("0x49404b7c")) {
            const result = decodeCalldataExactInput(data[0]);
            if (result) {
                return Object.assign(Object.assign({}, result), { toToken: chain.nativeTokenAddress });
            }
        }
    }
    return decodeCalldataExactInput(tx);
};
function decodeCalldataExactInput(tx) {
    const chain = Object.values(CHAINS).find((item) => item.id === tx.chainId);
    if (!chain)
        return null;
    const contractInterface = new Interface(UniswapABI);
    const result = contractInterface.parseTransaction({ data: tx.data });
    if (result.name === "") {
        return null;
    }
    const [path, recipient, dstReceiver, amount, minReturnAmount] = result.args[0];
    let srcToken = "";
    let dstToken = "";
    if (!path) {
        return null;
    }
    srcToken = "0x" + path.slice(2, 42);
    dstToken = "0x" + path.slice(-40);
    if (!srcToken || !dstToken || !recipient || !amount || !minReturnAmount)
        return null;
    return {
        fromToken: srcToken,
        fromTokenAmount: amount.toString(),
        toToken: dstToken,
        minReceiveToTokenAmount: minReturnAmount.toString(),
        toTokenReceiver: dstReceiver,
    };
}
