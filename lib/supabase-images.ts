const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ??
  "https://tpnnobttpfpnrvgqycjs.supabase.co";

const STORAGE_BUCKET = "site-images";

/**
 * Builds a public URL for an image stored in the site's Supabase bucket.
 * Keep the file paths stable so an admin panel can replace images later.
 */
export function getSupabaseImageUrl(path: string): string {
  const normalizedPath = path
    .split("/")
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join("/");

  return `${SUPABASE_URL}/storage/v1/object/public/${STORAGE_BUCKET}/${normalizedPath}`;
}
