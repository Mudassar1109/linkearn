import type { Wallet, Transaction, WithdrawRequest, WalletSummary } from "@/types/wallet";

export async function getWallet(_userId: string): Promise<Wallet | null> {
  return null;
}

export async function getBalance(_userId: string): Promise<number> {
  return 0;
}

export async function getTransactions(
  _userId: string
): Promise<Transaction[]> {
  return [];
}

export async function createTransaction(
  _data: Omit<Transaction, "id" | "createdAt">
): Promise<Transaction | null> {
  return null;
}

export async function requestWithdraw(
  _userId: string,
  _amount: number
): Promise<WithdrawRequest | null> {
  return null;
}

export async function approveWithdraw(
  _requestId: string,
  _adminId: string
): Promise<boolean> {
  return false;
}

export async function rejectWithdraw(
  _requestId: string,
  _adminId: string
): Promise<boolean> {
  return false;
}

export async function getWalletSummary(
  _userId: string
): Promise<WalletSummary | null> {
  return null;
}
