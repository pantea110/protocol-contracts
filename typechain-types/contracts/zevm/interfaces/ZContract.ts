/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export type ContextStruct = {
  origin: PromiseOrValue<BytesLike>;
  sender: PromiseOrValue<string>;
  chainID: PromiseOrValue<BigNumberish>;
};

export type ContextStructOutput = [string, string, BigNumber] & {
  origin: string;
  sender: string;
  chainID: BigNumber;
};

export interface ZContractInterface extends utils.Interface {
  functions: {
    "onCrossChainCall((bytes,address,uint256),address,uint256,bytes)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "onCrossChainCall"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "onCrossChainCall",
    values: [
      ContextStruct,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "onCrossChainCall",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ZContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ZContractInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    onCrossChainCall(
      context: ContextStruct,
      zrc20: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  onCrossChainCall(
    context: ContextStruct,
    zrc20: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    message: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    onCrossChainCall(
      context: ContextStruct,
      zrc20: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    onCrossChainCall(
      context: ContextStruct,
      zrc20: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    onCrossChainCall(
      context: ContextStruct,
      zrc20: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
