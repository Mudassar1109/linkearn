# Rewards Service

## Future Architecture

### Daily Rewards
- Streak-based login rewards with increasing bonuses
- 7-day cycle with a large bonus on day 7
- Reset on miss — configurable streak protection

### Spinner
- Wheel of fortune with weighted segments
- Configurable segments, multipliers, and cooldown
- Free spin every 24 hours

### Mystery Box
- Tiered boxes (Bronze, Silver, Gold, Diamond)
- Random coin drops + occasional bonus items
- Earn boxes through activity milestones

### Referral Rewards
- Flat reward per successful referral
- Bonus rewards when referred user reaches milestones
- Referral link generation and tracking

### Reward History
- Complete audit log of all earned rewards
- Paginated query with type and date filters
- Used for user-facing history UI

### Cooldown System
- 24-hour cooldown between Daily Reward claims
- 24-hour cooldown between Spinner spins
- Event-based cooldowns for Mystery Boxes

### Admin Rewards
- Manual reward distribution by admins
- Reason and metadata logging
- Used for promotions, compensations, and events

### Anti-Cheat Protection (Future)
- Rate limiting on claims
- Suspicious activity detection
- Automatic flagging for manual review
