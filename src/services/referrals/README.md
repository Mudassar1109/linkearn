# Referrals Service

## Future Architecture

### Referral Code
- Each user receives a unique referral code on signup
- Customizable once (alphanumeric, 6-12 characters)
- QR code generation for sharing

### Referral Tracking
- When a new user signs up with a referral code, a Referral record is created
- Status transitions: PENDING → ACTIVE (on first reward claim) → COMPLETED
- Referrer is credited after referred user meets activity thresholds

### Bonus System
- **Signup Bonus**: flat reward when referred user signs up
- **First Reward Bonus**: bonus when referred user claims their first daily reward
- **First Withdraw Bonus**: bonus when referred user completes their first withdrawal
- **Marketplace Purchase Bonus**: bonus when referred user makes their first marketplace purchase
- Bonuses are tracked individually with their own status lifecycle

### Leaderboard
- Ranked by total referral count and referral earnings
- Updated daily via scheduled job
- Cached for performance with configurable TTL

### Anti-Fraud
- IP-based duplicate detection on signup
- Device fingerprinting for high-risk referrals
- Manual review queue for suspicious referral patterns
- Daily referral cap enforced server-side

### Cooldowns
- Max 50 referrals per day per user (configurable)
- Bonus claim cooldown to prevent rapid abuse
- Admin override for verified legitimate bulk referrals

### Admin Controls
- Manual referral status override
- Bonus adjustment for promotions and events
- Referral code reservation system
- Fraud flagging and investigation tools

### Future: Analytics
- Referral funnel tracking (impressions → signups → activations)
- Conversion rate optimization metrics
- A/B testing for referral reward amounts
- Cohort analysis for referred user lifetime value
