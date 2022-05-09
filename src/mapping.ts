import { BigInt } from "@graphprotocol/graph-ts"
import {
  VaultFactory,
  AccountClosed,
  AuctionCreated,
  AuctionedEnded,
  CollectionWhitelisted,
  EmissionsSigned,
  FeesRedeemed,
  NewBid,
  OwnerFeesDistributed,
  PoolClosed,
  SaleComplete,
  TokensPurchased,
  TokensSold,
  VaultCreated,
  VaultFeesDistributed
} from "../generated/VaultFactory/VaultFactory"
import { ExampleEntity } from "../generated/schema"

export function handleAccountClosed(event: AccountClosed): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity._callingContract = event.params._callingContract
  entity._callerToken = event.params._callerToken

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.beta(...)
  // - contract.collectionWhitelist(...)
  // - contract.controller(...)
  // - contract.earlyMemberWhitelist(...)
  // - contract.getVaultAddress(...)
  // - contract.nextVaultIndex(...)
  // - contract.nftVault(...)
  // - contract.pendingController(...)
  // - contract.vaultVersion(...)
}

export function handleAuctionCreated(event: AuctionCreated): void {}

export function handleAuctionedEnded(event: AuctionedEnded): void {}

export function handleCollectionWhitelisted(
  event: CollectionWhitelisted
): void {}

export function handleEmissionsSigned(event: EmissionsSigned): void {}

export function handleFeesRedeemed(event: FeesRedeemed): void {}

export function handleNewBid(event: NewBid): void {}

export function handleOwnerFeesDistributed(event: OwnerFeesDistributed): void {}

export function handlePoolClosed(event: PoolClosed): void {}

export function handleSaleComplete(event: SaleComplete): void {}

export function handleTokensPurchased(event: TokensPurchased): void {}

export function handleTokensSold(event: TokensSold): void {}

export function handleVaultCreated(event: VaultCreated): void {}

export function handleVaultFeesDistributed(event: VaultFeesDistributed): void {}
