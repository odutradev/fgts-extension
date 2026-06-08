export const STYLE_ID = 'fgts-wa-privacy'

export const WA_PRIVACY_CSS = [
  `body.wa-blur-names span[title][dir='auto'] { filter: blur(5px); opacity: 0.7; transition: filter 0.3s ease, opacity 0.3s ease; }`,
  `body.wa-blur-names span[title][dir='auto']:hover { filter: blur(0px); opacity: 1; }`,
  `body.wa-blur-photos img[src*='pps.whatsapp.net'], body.wa-blur-photos img[src*='fna.fbcdn.net'], body.wa-blur-photos div[data-testid="default-user"], body.wa-blur-photos div._am2u { filter: blur(12px); transition: filter 0.3s ease; }`,
  `body.wa-blur-photos img[src*='pps.whatsapp.net']:hover, body.wa-blur-photos img[src*='fna.fbcdn.net']:hover, body.wa-blur-photos div[data-testid="default-user"]:hover, body.wa-blur-photos div._am2u:hover { filter: blur(0px); }`,
  `body.wa-blur-msgs div[data-pre-plain-text] { filter: blur(6px); transition: filter 0.3s ease; }`,
  `body.wa-blur-msgs div[data-pre-plain-text]:hover { filter: blur(0px); }`,
  `body.wa-blur-previews #pane-side span[dir="ltr"], body.wa-blur-previews #pane-side span[title]:not([dir="auto"]) { filter: blur(5px); transition: filter 0.3s ease; }`,
  `body.wa-blur-previews #pane-side div[role="row"]:hover span[dir="ltr"], body.wa-blur-previews #pane-side div[role="row"]:hover span[title]:not([dir="auto"]) { filter: blur(0px); }`,
  `body.wa-blur-stickers img, body.wa-blur-stickers canvas, body.wa-blur-stickers div._am2u { filter: blur(8px); transition: filter 0.3s ease; }`,
  `body.wa-blur-stickers img:hover, body.wa-blur-stickers canvas:hover, body.wa-blur-stickers div._am2u:hover { filter: blur(0px); }`
].join(' ')
