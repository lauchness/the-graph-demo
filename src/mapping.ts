import { BigInt } from "@graphprotocol/graph-ts";
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
  VaultFeesDistributed,
} from "../generated/VaultFactory/VaultFactory";
import { Ticket, TokenPurchase } from "../generated/schema";

export function handleAccountClosed(event: AccountClosed): void {}

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

export function handleTokensPurchased(event: TokensPurchased): void {
  const ticketId = event.params.tickets.toString();
  let ticket = Ticket.load(ticketId);
  if (!ticket) {
    ticket = new Ticket(ticketId);
    ticket.tokenPurchases = [];
    ticket.save();
    // generate first tokenPurchase entity
    const tokenPurchaseId = `${ticketId}/0`;
    const tokenPurchase = new TokenPurchase(tokenPurchaseId);
    tokenPurchase.ticket = ticket.id;
    tokenPurchase.amount = event.params.amounts;
    tokenPurchase.length = event.params._lockTime;
    tokenPurchase.owner = event.params._buyer.toHexString();
    tokenPurchase.timestamp = event.block.timestamp;
    tokenPurchase.soldAt = null;
    tokenPurchase.save();

    // 😱 WHY MUST WE DO THIS
    const tokenPurchases = ticket.tokenPurchases;
    tokenPurchases.push(tokenPurchase.id);
    ticket.tokenPurchases = tokenPurchases;
  } else {
    const tokenPurchaseId = `${ticketId}/${ticket.tokenPurchases.length}`;
    const tokenPurchase = new TokenPurchase(tokenPurchaseId);
    tokenPurchase.ticket = ticket.id;
    tokenPurchase.amount = event.params.amounts;
    tokenPurchase.length = event.params._lockTime;
    tokenPurchase.owner = event.params._buyer.toHexString();
    tokenPurchase.timestamp = event.block.timestamp;
    tokenPurchase.soldAt = null;
    tokenPurchase.save();

    // 😱 WHY MUST WE DO THIS
    const tokenPurchases = ticket.tokenPurchases;
    tokenPurchases.push(tokenPurchase.id);
    ticket.tokenPurchases = tokenPurchases;
  }
  ticket.save();
}

export function handleTokensSold(event: TokensSold): void {}

export function handleVaultCreated(event: VaultCreated): void {}

export function handleVaultFeesDistributed(event: VaultFeesDistributed): void {}
