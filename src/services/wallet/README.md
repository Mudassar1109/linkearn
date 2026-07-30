# Wallet Service

## Future Architecture

### Wallet
- One wallet per user created on signup
- Balance stored in the user's preferred currency
- Real-time balance updates via Supabase Realtime

### Balance
- All reward claims, marketplace sales, and referral credits increase balance
- Marketplace purchases and withdrawals decrease balance
- Balance never goes negative — validation on every transaction

### Transactions
- Immutable audit log of every balance change
- Links to source (reward claim, marketplace order, withdrawal)
- Paginated, filterable by type and date range

### Withdrawals
- Users request withdrawal to a payment method
- Admin approval workflow: Pending → Approved / Rejected → Processing → Completed / Failed
- Minimum and maximum withdrawal limits enforced server-side
- Withdrawal method metadata stored (PayPal, Bank, etc.)

### Admin Approval
- Admin panel to view pending withdrawal requests
- Approve or reject with reason
- Processing status updated by finance team

### Audit Trail
- Every balance mutation logged with before/after snapshots
- Admin actions logged with moderator ID
- Tamper-evident via Supabase RLS + audit table

### Security
- Server-side validation on all transactions
- Rate limiting on withdrawal requests
- Suspicious activity alerts

### Future: Multi-Currency Support
- PKR, USD, and additional currencies
- Exchange rate conversion on withdrawal
- Per-currency wallet balances
