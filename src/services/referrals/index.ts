import type { ReferralCode, ReferralStats, Referral, ReferralLeaderboard } from "@/types/referrals";

export async function generateReferralCode(
  _userId: string
): Promise<ReferralCode | null> {
  return null;
}

export async function getReferralStats(
  _userId: string
): Promise<ReferralStats | null> {
  return null;
}

export async function getReferralHistory(
  _userId: string
): Promise<Referral[]> {
  return [];
}

export async function claimReferralBonus(
  _referralId: string
): Promise<boolean> {
  return false;
}

export async function validateReferralCode(
  _code: string
): Promise<ReferralCode | null> {
  return null;
}

export async function getReferralLeaderboard(): Promise<ReferralLeaderboard[]> {
  return [];
}
