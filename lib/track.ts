"use client";

import { track } from "@vercel/analytics";

/**
 * Conversion events. Booking clicks are the primary conversion;
 * calculator leads are the secondary (email-capture) conversion.
 */
export function trackBookingClick(location: string) {
  if (process.env.NEXT_PUBLIC_ENABLE_ANALYTICS !== "true") return;
  track("book_call_click", { location });
}

export function trackCalculatorLead(estimatedMonthlyLoss: number) {
  if (process.env.NEXT_PUBLIC_ENABLE_ANALYTICS !== "true") return;
  track("calculator_lead", { estimatedMonthlyLoss });
}
