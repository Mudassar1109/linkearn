export enum MarketplaceCategory {
  ACCOUNT = "ACCOUNT",
  RESOURCE = "RESOURCE",
  SERVICE = "SERVICE",
}

export enum ListingStatus {
  DRAFT = "DRAFT",
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  SOLD = "SOLD",
  ARCHIVED = "ARCHIVED",
}

export enum OrderStatus {
  PENDING = "PENDING",
  PAYMENT_PENDING = "PAYMENT_PENDING",
  PROCESSING = "PROCESSING",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  DISPUTED = "DISPUTED",
  REFUNDED = "REFUNDED",
}

export enum Currency {
  USD = "USD",
  PKR = "PKR",
}

export interface MarketplaceListing {
  id: string;
  userId: string;
  category: MarketplaceCategory;
  title: string;
  description: string;
  price: number;
  currency: Currency;
  townHall: number;
  builderHall: number | null;
  level: number;
  heroes: string;
  gems: number;
  status: ListingStatus;
  images: string[];
  favoriteCount: number;
  viewCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface ListingImage {
  id: string;
  listingId: string;
  url: string;
  alt: string | null;
  order: number;
  createdAt: string;
}

export interface ListingFavorite {
  id: string;
  userId: string;
  listingId: string;
  createdAt: string;
}

export interface MarketplaceOrder {
  id: string;
  listingId: string;
  buyerId: string;
  sellerId: string;
  amount: number;
  currency: Currency;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
}
