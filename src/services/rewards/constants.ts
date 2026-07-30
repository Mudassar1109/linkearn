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

export const DAILY_REWARD_MIN = 10;
export const DAILY_REWARD_MAX = 100;
export const SPINNER_MIN = 5;
export const SPINNER_MAX = 500;
export const MYSTERY_BOX_MIN = 20;
export const MYSTERY_BOX_MAX = 1000;
export const REFERRAL_REWARD = 200;
