import type { DailyReward, SpinnerReward, MysteryBoxReward, ReferralReward, RewardHistory } from "@/types/rewards";

export async function getDailyReward(_userId: string): Promise<DailyReward | null> {
  return null;
}

export async function claimDailyReward(_userId: string): Promise<DailyReward | null> {
  return null;
}

export async function spinWheel(_userId: string): Promise<SpinnerReward | null> {
  return null;
}

export async function openMysteryBox(_userId: string): Promise<MysteryBoxReward | null> {
  return null;
}

export async function claimReferralReward(
  _userId: string,
  _referredId: string
): Promise<ReferralReward | null> {
  return null;
}

export async function getRewardHistory(
  _userId: string
): Promise<RewardHistory[]> {
  return [];
}
