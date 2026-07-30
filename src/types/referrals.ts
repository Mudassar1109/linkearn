export enum ReferralStatus {
  PENDING = "PENDING",
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
  REJECTED = "REJECTED",
  BONUS_PENDING = "BONUS_PENDING",
  BONUS_PAID = "BONUS_PAID",
}

export enum ReferralRewardType {
  SIGNUP = "SIGNUP",
  FIRST_REWARD = "FIRST_REWARD",
  FIRST_WITHDRAW = "FIRST_WITHDRAW",
  MARKETPLACE_PURCHASE = "MARKETPLACE_PURCHASE",
}

export interface Referral {
  id: string;
  referrerId: string;
  referredId: string;
  status: ReferralStatus;
  rewardAmount: number;
  rewardType: ReferralRewardType;
  createdAt: string;
  completedAt: string | null;
}

export interface ReferralBonus {
  id: string;
  referralId: string;
  type: ReferralRewardType;
  amount: number;
  status: ReferralStatus;
  paidAt: string | null;
  createdAt: string;
}

export interface ReferralStats {
  totalReferrals: number;
  activeReferrals: number;
  completedReferrals: number;
  totalEarned: number;
  pendingRewards: number;
  bonusEarned: number;
}

export interface ReferralLeaderboard {
  userId: string;
  username: string;
  avatar: string | null;
  referralCount: number;
  totalEarned: number;
  rank: number;
}

export interface ReferralCode {
  id: string;
  userId: string;
  code: string;
  usageCount: number;
  maxUsage: number | null;
  isActive: boolean;
  createdAt: string;
}
