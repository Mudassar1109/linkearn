# Marketplace Service

## Future Architecture

### Listings
- CRUD operations for Clash of Clans account listings
- Admin approval workflow (Draft → Pending → Approved / Rejected)
- Listing expiry and auto-archival
- Search, filter, pagination

### Orders
- Buyers initiate an order on an approved listing
- Escrow-style flow: buyer pays → seller delivers → admin confirms → funds released
- Order status tracking (Pending → Payment Pending → Processing → Completed / Cancelled / Disputed / Refunded)

### Favorites
- Users can favorite listings for later
- One favorite per user per listing

### Images
- Upload via Supabase Storage
- Image validation (size, type, count limits)
- Auto-generated thumbnails

### Categories
- Account, Resource, Service categories
- Extensible via enum

### Admin Review
- Admin panel to approve/reject listings
- Flag inappropriate or suspected scam listings

### Escrow Flow
1. Buyer places order — funds held by platform
2. Seller delivers account credentials to buyer
3. Buyer confirms receipt
4. Admin releases funds to seller
5. If dispute, admin mediates and decides outcome
