/**
 * Chat widget embed — same shape as the snippet we ship to customers.
 * Copy the token from Agency dashboard → Tenant setup → Embed snippet.
 */
export const CHAT_WIDGET = {
  scriptUrl: process.env.NEXT_PUBLIC_CHAT_SCRIPT_URL ?? "",
  gymId: process.env.NEXT_PUBLIC_CHAT_TENANT_ID ?? "demo-gym",
  /** Public in HTML; required when EMBED_ENFORCE_TOKEN=true on the app. */
  token: process.env.NEXT_PUBLIC_CHAT_EMBED_TOKEN ?? "",
} as const;

export function isChatWidgetConfigured(): boolean {
  return Boolean(CHAT_WIDGET.gymId && CHAT_WIDGET.scriptUrl && CHAT_WIDGET.token);
}
