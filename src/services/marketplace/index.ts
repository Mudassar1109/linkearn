import type { MarketplaceListing, MarketplaceOrder, ListingFavorite } from "@/types/marketplace";

export async function getListings(): Promise<MarketplaceListing[]> {
  return [];
}

export async function getListingById(_id: string): Promise<MarketplaceListing | null> {
  return null;
}

export async function createListing(
  _data: Omit<MarketplaceListing, "id" | "createdAt" | "updatedAt">
): Promise<MarketplaceListing | null> {
  return null;
}

export async function updateListing(
  _id: string,
  _data: Partial<MarketplaceListing>
): Promise<MarketplaceListing | null> {
  return null;
}

export async function deleteListing(_id: string): Promise<boolean> {
  return false;
}

export async function toggleFavorite(
  _userId: string,
  _listingId: string
): Promise<ListingFavorite | null> {
  return null;
}

export async function getOrders(): Promise<MarketplaceOrder[]> {
  return [];
}

export async function createOrder(
  _data: Omit<MarketplaceOrder, "id" | "createdAt" | "updatedAt">
): Promise<MarketplaceOrder | null> {
  return null;
}
