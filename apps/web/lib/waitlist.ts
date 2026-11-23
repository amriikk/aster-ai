// Sends a waitlist sign-up to your Google Form, so every answer lands in the
// form's Responses tab (and its linked Google Sheet).

const FORM_ID = process.env.NEXT_PUBLIC_WAITLIST_FORM_ID ?? "";
const EMAIL_ENTRY = process.env.NEXT_PUBLIC_WAITLIST_EMAIL_ENTRY ?? "";
const SOURCE_ENTRY = process.env.NEXT_PUBLIC_WAITLIST_SOURCE_ENTRY ?? "";

export const waitlistReady = Boolean(FORM_ID && EMAIL_ENTRY && SOURCE_ENTRY);

// Which form was used and where the visitor came from, for example
// "hero · utm_source=linkedin" or "join · from instagram.com".
// This is how you'll see which posts bring people in.
export function describeSource(placement: "hero" | "join"): string {
  const parts: string[] = [placement];
  const params = new URLSearchParams(window.location.search);
  const utm = params.get("utm_source");
  if (utm) parts.push(`utm_source=${utm}`);
  if (document.referrer) {
    try {
      const host = new URL(document.referrer).hostname;
      if (host && host !== window.location.hostname) parts.push(`from ${host}`);
    } catch {
      // An unreadable referrer just gets left out.
    }
  }
  return parts.join(" · ");
}

export async function joinWaitlist(email: string, source: string): Promise<void> {
  if (!waitlistReady) {
    throw new Error("The waitlist isn't connected yet. Add the Google Form values to .env.local (Guide 2).");
  }
  const body = new URLSearchParams({ [EMAIL_ENTRY]: email, [SOURCE_ENTRY]: source });
  // "no-cors" lets the browser post to Google, but hides Google's reply,
  // so a sign-up counts as sent once the request goes out without a network error.
  await fetch(`https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`, {
    method: "POST",
    mode: "no-cors",
    body,
  });
}