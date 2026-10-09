import { CHAT_WIDGET, isChatWidgetConfigured } from "@/lib/chat-widget";

/**
 * Customer-style embed: one async script before </body>.
 * Skips rendering when NEXT_PUBLIC_CHAT_EMBED_TOKEN is unset (local dev).
 */
export function ChatWidgetEmbed() {
  if (!isChatWidgetConfigured()) {
    return null;
  }

  return (
    <script
      src={CHAT_WIDGET.scriptUrl}
      data-gym-id={CHAT_WIDGET.gymId}
      data-token={CHAT_WIDGET.token}
      async
    />
  );
}
