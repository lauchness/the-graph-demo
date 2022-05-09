// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AccountClosed extends ethereum.Event {
  get params(): AccountClosed__Params {
    return new AccountClosed__Params(this);
  }
}

export class AccountClosed__Params {
  _event: AccountClosed;

  constructor(event: AccountClosed) {
    this._event = event;
  }

  get _callingContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _callerToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _callerId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _finalVal(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _auctionVal(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get _payoutCredits(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get _payoutEth(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get _closePoolContract(): Address {
    return this._event.parameters[7].value.toAddress();
  }

  get _vault(): Address {
    return this._event.parameters[8].value.toAddress();
  }
}

export class AuctionCreated extends ethereum.Event {
  get params(): AuctionCreated__Params {
    return new AuctionCreated__Params(this);
  }
}

export class AuctionCreated__Params {
  _event: AuctionCreated;

  constructor(event: AuctionCreated) {
    this._event = event;
  }

  get _callingContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _auction(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _vault(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class AuctionedEnded extends ethereum.Event {
  get params(): AuctionedEnded__Params {
    return new AuctionedEnded__Params(this);
  }
}

export class AuctionedEnded__Params {
  _event: AuctionedEnded;

  constructor(event: AuctionedEnded) {
    this._event = event;
  }

  get _callingContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _callerToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _callerId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _finalVal(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _auctionVal(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get _closePoolContract(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get _vault(): Address {
    return this._event.parameters[6].value.toAddress();
  }
}

export class CollectionWhitelisted extends ethereum.Event {
  get params(): CollectionWhitelisted__Params {
    return new CollectionWhitelisted__Params(this);
  }
}

export class CollectionWhitelisted__Params {
  _event: CollectionWhitelisted;

  constructor(event: CollectionWhitelisted) {
    this._event = event;
  }

  get _collection(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class EmissionsSigned extends ethereum.Event {
  get params(): EmissionsSigned__Params {
    return new EmissionsSigned__Params(this);
  }
}

export class EmissionsSigned__Params {
  _event: EmissionsSigned;

  constructor(event: EmissionsSigned) {
    this._event = event;
  }

  get _callingContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _callerToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _callerId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _signer(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class FeesRedeemed extends ethereum.Event {
  get params(): FeesRedeemed__Params {
    return new FeesRedeemed__Params(this);
  }
}

export class FeesRedeemed__Params {
  _event: FeesRedeemed;

  constructor(event: FeesRedeemed) {
    this._event = event;
  }

  get _callingContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _callerToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _callerId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get toVeHolders(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class NewBid extends ethereum.Event {
  get params(): NewBid__Params {
    return new NewBid__Params(this);
  }
}

export class NewBid__Params {
  _event: NewBid;

  constructor(event: NewBid) {
    this._event = event;
  }

  get _callingContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _callerToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _callerId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _bidAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _bidder(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get _closePoolContract(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get _vault(): Address {
    return this._event.parameters[6].value.toAddress();
  }
}

export class OwnerFeesDistributed extends ethereum.Event {
  get params(): OwnerFeesDistributed__Params {
    return new OwnerFeesDistributed__Params(this);
  }
}

export class OwnerFeesDistributed__Params {
  _event: OwnerFeesDistributed;

  constructor(event: OwnerFeesDistributed) {
    this._event = event;
  }

  get _callingContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _callerToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _callerId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _ownerAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get _ownerFees(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class PoolClosed extends ethereum.Event {
  get params(): PoolClosed__Params {
    return new PoolClosed__Params(this);
  }
}

export class PoolClosed__Params {
  _event: PoolClosed;

  constructor(event: PoolClosed) {
    this._event = event;
  }

  get _callingContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _callerToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _callerId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _finalVal(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _closePoolContract(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get _vault(): Address {
    return this._event.parameters[5].value.toAddress();
  }
}

export class SaleComplete extends ethereum.Event {
  get params(): SaleComplete__Params {
    return new SaleComplete__Params(this);
  }
}

export class SaleComplete__Params {
  _event: SaleComplete;

  constructor(event: SaleComplete) {
    this._event = event;
  }

  get _callingContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _callerToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _calledId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _seller(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get creditsPurchased(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class TokensPurchased extends ethereum.Event {
  get params(): TokensPurchased__Params {
    return new TokensPurchased__Params(this);
  }
}

export class TokensPurchased__Params {
  _event: TokensPurchased;

  constructor(event: TokensPurchased) {
    this._event = event;
  }

  get _callingContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _callerToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _callerId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _buyer(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get tickets(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get amounts(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get _lockTime(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class TokensSold extends ethereum.Event {
  get params(): TokensSold__Params {
    return new TokensSold__Params(this);
  }
}

export class TokensSold__Params {
  _event: TokensSold;

  constructor(event: TokensSold) {
    this._event = event;
  }

  get _callingContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _callerToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _callerId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _seller(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get ticket(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class VaultCreated extends ethereum.Event {
  get params(): VaultCreated__Params {
    return new VaultCreated__Params(this);
  }
}

export class VaultCreated__Params {
  _event: VaultCreated;

  constructor(event: VaultCreated) {
    this._event = event;
  }

  get _creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _nonce(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class VaultFeesDistributed extends ethereum.Event {
  get params(): VaultFeesDistributed__Params {
    return new VaultFeesDistributed__Params(this);
  }
}

export class VaultFeesDistributed__Params {
  _event: VaultFeesDistributed;

  constructor(event: VaultFeesDistributed) {
    this._event = event;
  }

  get _callingContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _callerToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _callerId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _amountToVe(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _amountToTreasury(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class VaultFactory extends ethereum.SmartContract {
  static bind(address: Address): VaultFactory {
    return new VaultFactory("VaultFactory", address);
  }

  beta(): BigInt {
    let result = super.call("beta", "beta():(uint256)", []);

    return result[0].toBigInt();
  }

  try_beta(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("beta", "beta():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  collectionWhitelist(param0: Address): boolean {
    let result = super.call(
      "collectionWhitelist",
      "collectionWhitelist(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_collectionWhitelist(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "collectionWhitelist",
      "collectionWhitelist(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  controller(): Address {
    let result = super.call("controller", "controller():(address)", []);

    return result[0].toAddress();
  }

  try_controller(): ethereum.CallResult<Address> {
    let result = super.tryCall("controller", "controller():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  earlyMemberWhitelist(param0: Address): boolean {
    let result = super.call(
      "earlyMemberWhitelist",
      "earlyMemberWhitelist(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_earlyMemberWhitelist(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "earlyMemberWhitelist",
      "earlyMemberWhitelist(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getVaultAddress(nft: Address, id: BigInt): Address {
    let result = super.call(
      "getVaultAddress",
      "getVaultAddress(address,uint256):(address)",
      [ethereum.Value.fromAddress(nft), ethereum.Value.fromUnsignedBigInt(id)]
    );

    return result[0].toAddress();
  }

  try_getVaultAddress(nft: Address, id: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getVaultAddress",
      "getVaultAddress(address,uint256):(address)",
      [ethereum.Value.fromAddress(nft), ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  nextVaultIndex(param0: Address, param1: BigInt): BigInt {
    let result = super.call(
      "nextVaultIndex",
      "nextVaultIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_nextVaultIndex(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "nextVaultIndex",
      "nextVaultIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nftVault(param0: BigInt, param1: Address, param2: BigInt): Address {
    let result = super.call(
      "nftVault",
      "nftVault(uint256,address,uint256):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );

    return result[0].toAddress();
  }

  try_nftVault(
    param0: BigInt,
    param1: Address,
    param2: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "nftVault",
      "nftVault(uint256,address,uint256):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pendingController(): Address {
    let result = super.call(
      "pendingController",
      "pendingController():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_pendingController(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "pendingController",
      "pendingController():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  vaultVersion(): BigInt {
    let result = super.call("vaultVersion", "vaultVersion():(uint256)", []);

    return result[0].toBigInt();
  }

  try_vaultVersion(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("vaultVersion", "vaultVersion():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _controller(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddToCollectionWhitelistCall extends ethereum.Call {
  get inputs(): AddToCollectionWhitelistCall__Inputs {
    return new AddToCollectionWhitelistCall__Inputs(this);
  }

  get outputs(): AddToCollectionWhitelistCall__Outputs {
    return new AddToCollectionWhitelistCall__Outputs(this);
  }
}

export class AddToCollectionWhitelistCall__Inputs {
  _call: AddToCollectionWhitelistCall;

  constructor(call: AddToCollectionWhitelistCall) {
    this._call = call;
  }

  get _collection(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddToCollectionWhitelistCall__Outputs {
  _call: AddToCollectionWhitelistCall;

  constructor(call: AddToCollectionWhitelistCall) {
    this._call = call;
  }
}

export class AddToEarlyMemberWhitelistCall extends ethereum.Call {
  get inputs(): AddToEarlyMemberWhitelistCall__Inputs {
    return new AddToEarlyMemberWhitelistCall__Inputs(this);
  }

  get outputs(): AddToEarlyMemberWhitelistCall__Outputs {
    return new AddToEarlyMemberWhitelistCall__Outputs(this);
  }
}

export class AddToEarlyMemberWhitelistCall__Inputs {
  _call: AddToEarlyMemberWhitelistCall;

  constructor(call: AddToEarlyMemberWhitelistCall) {
    this._call = call;
  }

  get _earlyAccess(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddToEarlyMemberWhitelistCall__Outputs {
  _call: AddToEarlyMemberWhitelistCall;

  constructor(call: AddToEarlyMemberWhitelistCall) {
    this._call = call;
  }
}

export class ApproveControllerChangeCall extends ethereum.Call {
  get inputs(): ApproveControllerChangeCall__Inputs {
    return new ApproveControllerChangeCall__Inputs(this);
  }

  get outputs(): ApproveControllerChangeCall__Outputs {
    return new ApproveControllerChangeCall__Outputs(this);
  }
}

export class ApproveControllerChangeCall__Inputs {
  _call: ApproveControllerChangeCall;

  constructor(call: ApproveControllerChangeCall) {
    this._call = call;
  }
}

export class ApproveControllerChangeCall__Outputs {
  _call: ApproveControllerChangeCall;

  constructor(call: ApproveControllerChangeCall) {
    this._call = call;
  }
}

export class CreateVaultCall extends ethereum.Call {
  get inputs(): CreateVaultCall__Inputs {
    return new CreateVaultCall__Inputs(this);
  }

  get outputs(): CreateVaultCall__Outputs {
    return new CreateVaultCall__Outputs(this);
  }
}

export class CreateVaultCall__Inputs {
  _call: CreateVaultCall;

  constructor(call: CreateVaultCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _symbol(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _heldToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _heldTokenId(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class CreateVaultCall__Outputs {
  _call: CreateVaultCall;

  constructor(call: CreateVaultCall) {
    this._call = call;
  }
}

export class EmitAccountClosedCall extends ethereum.Call {
  get inputs(): EmitAccountClosedCall__Inputs {
    return new EmitAccountClosedCall__Inputs(this);
  }

  get outputs(): EmitAccountClosedCall__Outputs {
    return new EmitAccountClosedCall__Outputs(this);
  }
}

export class EmitAccountClosedCall__Inputs {
  _call: EmitAccountClosedCall;

  constructor(call: EmitAccountClosedCall) {
    this._call = call;
  }

  get _callerToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _callerId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _finalVal(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _auctionVal(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _payoutCredits(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _payoutEth(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _closePoolContract(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _vault(): Address {
    return this._call.inputValues[7].value.toAddress();
  }
}

export class EmitAccountClosedCall__Outputs {
  _call: EmitAccountClosedCall;

  constructor(call: EmitAccountClosedCall) {
    this._call = call;
  }
}

export class EmitAuctionEndedCall extends ethereum.Call {
  get inputs(): EmitAuctionEndedCall__Inputs {
    return new EmitAuctionEndedCall__Inputs(this);
  }

  get outputs(): EmitAuctionEndedCall__Outputs {
    return new EmitAuctionEndedCall__Outputs(this);
  }
}

export class EmitAuctionEndedCall__Inputs {
  _call: EmitAuctionEndedCall;

  constructor(call: EmitAuctionEndedCall) {
    this._call = call;
  }

  get _callerToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _callerId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _finalVal(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _auctionVal(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _closePoolContract(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _vault(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class EmitAuctionEndedCall__Outputs {
  _call: EmitAuctionEndedCall;

  constructor(call: EmitAuctionEndedCall) {
    this._call = call;
  }
}

export class EmitEmissionSigningCall extends ethereum.Call {
  get inputs(): EmitEmissionSigningCall__Inputs {
    return new EmitEmissionSigningCall__Inputs(this);
  }

  get outputs(): EmitEmissionSigningCall__Outputs {
    return new EmitEmissionSigningCall__Outputs(this);
  }
}

export class EmitEmissionSigningCall__Inputs {
  _call: EmitEmissionSigningCall;

  constructor(call: EmitEmissionSigningCall) {
    this._call = call;
  }

  get _callerToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _callerId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _signer(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class EmitEmissionSigningCall__Outputs {
  _call: EmitEmissionSigningCall;

  constructor(call: EmitEmissionSigningCall) {
    this._call = call;
  }
}

export class EmitFeeRedemptionCall extends ethereum.Call {
  get inputs(): EmitFeeRedemptionCall__Inputs {
    return new EmitFeeRedemptionCall__Inputs(this);
  }

  get outputs(): EmitFeeRedemptionCall__Outputs {
    return new EmitFeeRedemptionCall__Outputs(this);
  }
}

export class EmitFeeRedemptionCall__Inputs {
  _call: EmitFeeRedemptionCall;

  constructor(call: EmitFeeRedemptionCall) {
    this._call = call;
  }

  get _callerToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _callerId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get toVeHolders(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class EmitFeeRedemptionCall__Outputs {
  _call: EmitFeeRedemptionCall;

  constructor(call: EmitFeeRedemptionCall) {
    this._call = call;
  }
}

export class EmitFeesDistributedCall extends ethereum.Call {
  get inputs(): EmitFeesDistributedCall__Inputs {
    return new EmitFeesDistributedCall__Inputs(this);
  }

  get outputs(): EmitFeesDistributedCall__Outputs {
    return new EmitFeesDistributedCall__Outputs(this);
  }
}

export class EmitFeesDistributedCall__Inputs {
  _call: EmitFeesDistributedCall;

  constructor(call: EmitFeesDistributedCall) {
    this._call = call;
  }

  get _callerToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _callerId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _feesToVe(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _feesToTreasury(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class EmitFeesDistributedCall__Outputs {
  _call: EmitFeesDistributedCall;

  constructor(call: EmitFeesDistributedCall) {
    this._call = call;
  }
}

export class EmitNewBidCall extends ethereum.Call {
  get inputs(): EmitNewBidCall__Inputs {
    return new EmitNewBidCall__Inputs(this);
  }

  get outputs(): EmitNewBidCall__Outputs {
    return new EmitNewBidCall__Outputs(this);
  }
}

export class EmitNewBidCall__Inputs {
  _call: EmitNewBidCall;

  constructor(call: EmitNewBidCall) {
    this._call = call;
  }

  get _callerToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _callerId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _bid(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _bidder(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _closePoolContract(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _vault(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class EmitNewBidCall__Outputs {
  _call: EmitNewBidCall;

  constructor(call: EmitNewBidCall) {
    this._call = call;
  }
}

export class EmitOwnerFeesClaimedCall extends ethereum.Call {
  get inputs(): EmitOwnerFeesClaimedCall__Inputs {
    return new EmitOwnerFeesClaimedCall__Inputs(this);
  }

  get outputs(): EmitOwnerFeesClaimedCall__Outputs {
    return new EmitOwnerFeesClaimedCall__Outputs(this);
  }
}

export class EmitOwnerFeesClaimedCall__Inputs {
  _call: EmitOwnerFeesClaimedCall;

  constructor(call: EmitOwnerFeesClaimedCall) {
    this._call = call;
  }

  get _callerToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _callerId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _ownerAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _feesPaid(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class EmitOwnerFeesClaimedCall__Outputs {
  _call: EmitOwnerFeesClaimedCall;

  constructor(call: EmitOwnerFeesClaimedCall) {
    this._call = call;
  }
}

export class EmitPoolClosureCall extends ethereum.Call {
  get inputs(): EmitPoolClosureCall__Inputs {
    return new EmitPoolClosureCall__Inputs(this);
  }

  get outputs(): EmitPoolClosureCall__Outputs {
    return new EmitPoolClosureCall__Outputs(this);
  }
}

export class EmitPoolClosureCall__Inputs {
  _call: EmitPoolClosureCall;

  constructor(call: EmitPoolClosureCall) {
    this._call = call;
  }

  get _callerToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _callerId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _finalVal(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _closePoolContract(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _vault(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class EmitPoolClosureCall__Outputs {
  _call: EmitPoolClosureCall;

  constructor(call: EmitPoolClosureCall) {
    this._call = call;
  }
}

export class EmitSaleCompleteCall extends ethereum.Call {
  get inputs(): EmitSaleCompleteCall__Inputs {
    return new EmitSaleCompleteCall__Inputs(this);
  }

  get outputs(): EmitSaleCompleteCall__Outputs {
    return new EmitSaleCompleteCall__Outputs(this);
  }
}

export class EmitSaleCompleteCall__Inputs {
  _call: EmitSaleCompleteCall;

  constructor(call: EmitSaleCompleteCall) {
    this._call = call;
  }

  get _callerToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _callerId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _seller(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get creditsPurchased(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class EmitSaleCompleteCall__Outputs {
  _call: EmitSaleCompleteCall;

  constructor(call: EmitSaleCompleteCall) {
    this._call = call;
  }
}

export class EmitTokenPurchaseCall extends ethereum.Call {
  get inputs(): EmitTokenPurchaseCall__Inputs {
    return new EmitTokenPurchaseCall__Inputs(this);
  }

  get outputs(): EmitTokenPurchaseCall__Outputs {
    return new EmitTokenPurchaseCall__Outputs(this);
  }
}

export class EmitTokenPurchaseCall__Inputs {
  _call: EmitTokenPurchaseCall;

  constructor(call: EmitTokenPurchaseCall) {
    this._call = call;
  }

  get _callerToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _callerId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _buyer(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get ticket(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _lockTime(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class EmitTokenPurchaseCall__Outputs {
  _call: EmitTokenPurchaseCall;

  constructor(call: EmitTokenPurchaseCall) {
    this._call = call;
  }
}

export class EmitTokenSaleCall extends ethereum.Call {
  get inputs(): EmitTokenSaleCall__Inputs {
    return new EmitTokenSaleCall__Inputs(this);
  }

  get outputs(): EmitTokenSaleCall__Outputs {
    return new EmitTokenSaleCall__Outputs(this);
  }
}

export class EmitTokenSaleCall__Inputs {
  _call: EmitTokenSaleCall;

  constructor(call: EmitTokenSaleCall) {
    this._call = call;
  }

  get _callerToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _callerId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _seller(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get ticket(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class EmitTokenSaleCall__Outputs {
  _call: EmitTokenSaleCall;

  constructor(call: EmitTokenSaleCall) {
    this._call = call;
  }
}

export class SetBetaCall extends ethereum.Call {
  get inputs(): SetBetaCall__Inputs {
    return new SetBetaCall__Inputs(this);
  }

  get outputs(): SetBetaCall__Outputs {
    return new SetBetaCall__Outputs(this);
  }
}

export class SetBetaCall__Inputs {
  _call: SetBetaCall;

  constructor(call: SetBetaCall) {
    this._call = call;
  }

  get stage(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetBetaCall__Outputs {
  _call: SetBetaCall;

  constructor(call: SetBetaCall) {
    this._call = call;
  }
}

export class SetControllerCall extends ethereum.Call {
  get inputs(): SetControllerCall__Inputs {
    return new SetControllerCall__Inputs(this);
  }

  get outputs(): SetControllerCall__Outputs {
    return new SetControllerCall__Outputs(this);
  }
}

export class SetControllerCall__Inputs {
  _call: SetControllerCall;

  constructor(call: SetControllerCall) {
    this._call = call;
  }

  get _controller(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetControllerCall__Outputs {
  _call: SetControllerCall;

  constructor(call: SetControllerCall) {
    this._call = call;
  }
}
