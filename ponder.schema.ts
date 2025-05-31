import { onchainTable } from "ponder";

// Data requirement:
// Tx Hash
// From (address)
// To (address)
// Amount
// Timestamp
// Block number

export const transfer = onchainTable("transfer", (t) => ({
  id: t.text().primaryKey(),
  txHash: t.text().notNull(),
  from: t.text().notNull(),
  to: t.text().notNull(),
  amount: t.bigint().notNull(),
  timestamp: t.bigint().notNull(),
  blocknumber: t.bigint().notNull(),
}));

export const holder = onchainTable("holder", (t) => ({
  id: t.text().primaryKey(),
  address: t.text().notNull(),
  balance: t.bigint().notNull(),
}));

export const token = onchainTable("token", (t) => ({
  id: t.text().primaryKey(),
  address: t.text().notNull(),
  name: t.text().notNull(),
  symbol: t.text().notNull(),
  totalSupply: t.bigint().notNull(),
  decimals: t.integer().notNull(),
}));