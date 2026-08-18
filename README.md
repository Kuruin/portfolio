This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Spotify Refresh Token Setup

A step-by-step guide to authenticating your Spotify account and obtaining a persistent `refresh_token` for Spotify integration.

---

### Step 1: Create a Spotify Developer Application

1. Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard).
2. Click **Create an App**.
3. Fill in the **App Name** and **App Description**.
4. Set the **Redirect URI** to:
   ```http
   http://127.0.0.1:3000/api/spotify/callback
   ```
5. Click **Create** to initialize the app.
6. Copy your **Client ID** and **Client Secret**.

> [!WARNING]
> Keep your **Client Secret** secure. Never commit it to git or share it publicly.

---

### Step 2: Authenticate your account

Substitute `CLIENT_ID_HERE` with your actual **Client ID** and paste this URL into your browser:

```http
https://accounts.spotify.com/authorize?client_id=CLIENT_ID_HERE&response_type=code&redirect_uri=http://127.0.0.1:3000/api/spotify/callback&scope=user-read-currently-playing
```

Once you authorize the application, you will be redirected to your Redirect URI. The URL will contain a `code` query parameter:

```http
http://localhost:3000/?code=AQBeA9SD7QbA9hUfv_TfmatYxT51CY87msMnOZmMbhf...
```

> [!IMPORTANT]
> Copy the value of the `code` parameter from the address bar. You will need this authorization code in Step 4.

---

### Step 3: Base64 Encode your Credentials

To communicate with Spotify's API, you need to base64 encode your client credentials in the format `client_id:client_secret`.

1. Go to [Base64Encode.org](https://www.base64encode.org/).
2. Input your credentials as `your_client_id:your_client_secret`.
3. Click **Encode** and copy the resulting string.

For example, encoding dummy credentials might result in:

```text
TkFBSCBCUk8gWU9VIFRIT1VHSFQgVEhJUyBJUyBBIFJFQUwgUFJPRFVDVElPTiBTRUNSRVQgTEVBSyBEQU1NTk5OTk4gISEh
```

_(Decodes to: `NAAH BRO YOU THOUGHT THIS IS A REAL PRODUCTION SECRET LEAK DAMMNNNNN !!!` — try decoding it for practice!)_

---

### Step 4: Request Refresh and Access Tokens

Open your terminal and run the following `curl` command to request your tokens.

> [!IMPORTANT]
> Make sure the entire command is executed as a **single line** in your terminal. Replace `CHANGE_BASE64_HERE` with your Base64 encoded string from Step 3, and `CHANGE_CODE_HERE` with the authorization code from Step 2.

```bash
curl -H "Authorization: Basic CHANGE_BASE64_HERE" -d grant_type=authorization_code -d code=CHANGE_CODE_HERE -d redirect_uri=http://127.0.0.1:3000/api/spotify/callback https://accounts.spotify.com/api/token
```

#### Example Command:

```bash
curl -H "Authorization: Basic ZWFjY2I5N2Y2ZDBlNDA1ODk3YWRmMWRkODBiOTVjMDE6YTQxOTVjMmQwYTQyNDM2MDllNjk3ZTYwMmU3MGI3NjI=" -d grant_type=authorization_code -d code=AQBeA9SD7QbA9hUfv_TfmatYxT51CY87msMnOZmMbhf7ZaxfbvG7oKEsATOJBxDyFap0Aq6uftY0v4Hq1QSy3MgQBfAHhmrifty-62rfDRlFnd0AzXRBOMpoOSA6SNw_uTPp7AixAE5zosgiIIf7efhzf1QOJfLh1HUYi248z8jk1x2jjKG2YLvMyJuP0rjB5tP5UHjoFGBvKbULpchkF6yiJHnS -d redirect_uri=http://127.0.0.1:3000/api/spotify/callback https://accounts.spotify.com/api/token
```

---

### Step 5: Save your Tokens

Upon running the command, you will receive a JSON payload containing your persistent `refresh_token`:

```json
{
  "access_token": "BQDKxO7h1I1wA3esGK9zCFWn97XORJEPjwAHAEIxCnDXcmy9GbEuPacquwWvpiM4d33gJVHVOP9KUxY8AXkpXc-_zRFZBfneHM2vEeV1Fbfr-0Mw94oimlNf77dRiyxPpm4IUVNLloUWgYcfkAO0",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "AQAtxXvnzRTt4c2-2_Av2WyJQKWxUW_hMVN6QNiqv2i8A2ZElVarmvdhqyc8Pf-Z5n827FTFxTpHq5E3kOsrlRWM3TuJWxjVQsW0icR0zo3BXRFLt2FB2Qfj-pFaZwY-qc8",
  "scope": "user-read-currently-playing"
}
```

Add these values to your `.env.local` file:

```env
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_REFRESH_TOKEN=your_refresh_token
```

Now you're ready to integrate Spotify API calls into your portfolio!
