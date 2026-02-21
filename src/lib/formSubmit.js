const TELEGRAM_BOT_TOKEN = '7562480728:AAFQkqL_zTs5Uhi6Fy3B48xaEAwzYyZBKx4';
const TELEGRAM_CHAT_ID = '7233122374';
const EMAILJS_SERVICE_ID = 'service_1lncv1o';
const EMAILJS_TEMPLATE_ID = 'template_6i3t5dc';

async function sendTelegram(text) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  // Use no-cors as fallback since Telegram API may block CORS from browser
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'Markdown',
      }),
    });
    // Try to read JSON body for debug
    let json;
    try { json = await res.json(); } catch (_) { json = null; }
    if (!res.ok || (json && !json.ok)) {
      console.error('[Telegram] Error response:', json);
      throw new Error(json?.description || `HTTP ${res.status}`);
    }
    return json;
  } catch (err) {
    // If blocked by CORS, try no-cors (fire-and-forget, no response body)
    if (err?.message?.includes('Failed to fetch') || err?.message?.includes('NetworkError')) {
      await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: 'Markdown',
        }),
      });
      // no-cors won't throw — assume delivered
      return { ok: true };
    }
    throw err;
  }
}

export async function submitForm(data) {
  const telegramText =
    `🚀 *NEW LEAD FROM WEBSITE*\n\n` +
    `👤 *Name:* ${data.from_name}\n` +
    `📧 *Email:* ${data.from_email}\n` +
    `📞 *Phone:* ${data.phone || 'N/A'}\n` +
    `🏢 *Company:* ${data.company || 'N/A'}\n` +
    `🛠 *Service:* ${data.service || 'N/A'}\n` +
    `💰 *Budget:* ${data.budget || 'N/A'}\n` +
    `🏭 *Industry:* ${data.industry || 'N/A'}\n` +
    `📝 *Message:* ${data.message || 'N/A'}\n\n` +
    `⚡ _Respond within 1 hour to maximize conversion!_`;

  const [telegramRes, emailjsRes] = await Promise.allSettled([
    sendTelegram(telegramText),
    window.emailjs
      ? window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, data)
      : Promise.reject(new Error('EmailJS not loaded')),
  ]);

  // Log results for debugging
  console.log('[Form] Telegram:', telegramRes);
  console.log('[Form] EmailJS:', emailjsRes);

  // Push GTM event
  if (window.dataLayer) {
    window.dataLayer.push({ event: 'form_submission', form_type: 'quote_request' });
  }

  const telegramOk = telegramRes.status === 'fulfilled';
  const emailOk = emailjsRes.status === 'fulfilled';

  // Succeed if at least one channel worked
  if (!telegramOk && !emailOk) {
    console.error('[Form] Both channels failed:', telegramRes.reason, emailjsRes.reason);
    throw new Error('Both channels failed');
  }
}
