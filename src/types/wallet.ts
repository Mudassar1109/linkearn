export enum TransactionType {
  DAILY_REWARD = "DAILY_REWARD",
  SPINNER = "SPINNER",
  MYSTERY_BOX = "MYSTERY_BOX",
  REFERRAL = "REFERRAL",
  MARKETPLACE_SALE = "MARKETPLACE_SALE",
  MARKETPLACE_PURCHASE = "MARKETPLACE_PURCHASE",
  WITHDRAW = "WITHDRAW",
  ADMIN = "ADMIN",
  REFUND = "REFUND",
}

export enum TransactionStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  CANCELLED = "CANCELLED",
}

export enum WithdrawStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  PROCESSING = "PROCESSING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
}

export interface Wallet {
  id: string;
  userId: string;
  balance: number;
  currency: string;
  createdAt: string;
  updatedAt: string;
}

export interface Transaction {
  id: string;
  walletId: string;
  userId: string;
  type: TransactionType;
  amount: number;
  balanceBefore: number;
  balanceAfter: number;
  status: TransactionStatus;
  referenceId: string | null;
  description: string | null;
  createdAt: string;
}

export interface WithdrawRequest {
  id: string;
  userId: string;
  amount: number;
  method: string;
  accountDetails: string;
  status: WithdrawStatus;
  processedBy: string | null;
  processedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface WalletSummary {
  balance: number;
  currency: string;
  totalEarned: number;
  totalWithdrawn: number;
  totalSpent: number;
  pendingWithdrawals: number;
  transactionCount: number;
}
