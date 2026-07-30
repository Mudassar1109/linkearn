export enum RewardType {
  DAILY_REWARD = "DAILY_REWARD",
  SPINNER = "SPINNER",
  MYSTERY_BOX = "MYSTERY_BOX",
  REFERRAL = "REFERRAL",
  ADMIN = "ADMIN",
  MARKETPLACE = "MARKETPLACE",
}

export enum RewardStatus {
  PENDING = "PENDING",
  CLAIMED = "CLAIMED",
  EXPIRED = "EXPIRED",
  CANCELLED = "CANCELLED",
}

export interface Reward {
  id: string;
  userId: string;
  type: RewardType;
  amount: number;
  status: RewardStatus;
  claimedAt: string | null;
  createdAt: string;
  expiresAt: string | null;
}

export interface DailyReward {
  id: string;
  userId: string;
  day: number;
  amount: number;
  bonus: number;
  total: number;
  status: RewardStatus;
  claimedAt: string | null;
  createdAt: string;
}

export interface SpinnerReward {
  id: string;
  userId: string;
  segment: string;
  multiplier: number;
  amount: number;
  status: RewardStatus;
  spunAt: string | null;
  createdAt: string;
}

export interface MysteryBoxReward {
  id: string;
  userId: string;
  boxTier: string;
  amount: number;
  bonusItems: string[];
  status: RewardStatus;
  openedAt: string | null;
  createdAt: string;
}

export interface ReferralReward {
  id: string;
  referrerId: string;
  referredId: string;
  amount: number;
  status: RewardStatus;
  claimedAt: string | null;
  createdAt: string;
}

export interface RewardHistory {
  id: string;
  userId: string;
  type: RewardType;
  amount: number;
  status: RewardStatus;
  description: string;
  claimedAt: string | null;
  createdAt: string;
}
