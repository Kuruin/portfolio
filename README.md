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

A guide to authenticating your Spotify account and obtaining a persistent `refresh_token` for Spotify integration. You can choose between the **Quick Method (Recommended)** or the **Manual Method (Alternative)**.

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

## Method A: Quick Method (Recommended)

This method utilizes the built-in authorization routes in the codebase to automatically negotiate tokens in the browser.

1. Add your Spotify credentials to your `.env.local` file:
   ```env
   SPOTIFY_CLIENT_ID=your_client_id
   SPOTIFY_CLIENT_SECRET=your_client_secret
   ```
2. Start your local development server:
   ```bash
   npm run dev
   ```
3. Navigate to the authorization endpoint in your browser:
   ```http
   http://127.0.0.1:3000/api/spotify
   ```
4. Authorize the app on the Spotify login screen.
5. You will be redirected to the callback endpoint, which will display the tokens directly as a JSON payload:
   ```json
   {
     "success": true,
     "tokens": {
       "access_token": "BQDKxO...",
       "token_type": "Bearer",
       "expires_in": 3600,
       "refresh_token": "AQAtxX...",
       "scope": "user-read-currently-playing user-read-playback-state"
     }
   }
   ```
6. Copy the `refresh_token` value from the JSON payload and add it to `.env.local`:
   ```env
   SPOTIFY_REFRESH_TOKEN=your_refresh_token
   ```

---

## Method B: Manual Method (Alternative)

If you prefer to perform the OAuth handshake manually, follow these step-by-step instructions.

<details>
<summary>Show Manual Steps</summary>

### Step 1: Authenticate in Browser

Substitute `CLIENT_ID_HERE` with your actual **Client ID** and paste this URL into your browser:

```http
https://accounts.spotify.com/authorize?client_id=CLIENT_ID_HERE&response_type=code&redirect_uri=http://127.0.0.1:3000/api/spotify/callback&scope=user-read-currently-playing%20user-read-playback-state
```

Once you authorize the application, you will be redirected to your Redirect URI. The URL will contain a `code` query parameter in the address bar:

```http
http://localhost:3000/?code=AQBeA9SD7QbA9hUfv_TfmatYxT51CY87msMnOZmMbhf...
```

Copy the value of the `code` parameter.

### Step 2: Base64 Encode your Credentials

1. Go to [Base64Encode.org](https://www.base64encode.org/).
2. Input your credentials as `your_client_id:your_client_secret`.
3. Click **Encode** and copy the resulting string.

*(For practice, the dummy string `TkFBSCBCUk8gWU9VIFRIT1VHSFQgVEhJUyBJUyBBIFJFQUwgUFJPRFVDVElPTiBTRUNSRVQgTEVBSyBEQU1NTk5OTk4gISEh` decodes to: `NAAH BRO YOU THOUGHT THIS IS A REAL PRODUCTION SECRET LEAK DAMMNNNNN !!!`)*

### Step 3: Request Tokens via curl

Execute the following `curl` command as a **single line** in your terminal. Replace `CHANGE_BASE64_HERE` with your encoded credentials from Step 2, and `CHANGE_CODE_HERE` with the code from Step 1.

```bash
curl -H "Authorization: Basic CHANGE_BASE64_HERE" -d grant_type=authorization_code -d code=CHANGE_CODE_HERE -d redirect_uri=http://127.0.0.1:3000/api/spotify/callback https://accounts.spotify.com/api/token
```

You will receive a JSON payload containing the tokens:

```json
{
  "access_token": "BQDKxO...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "AQAtxX...",
  "scope": "user-read-currently-playing"
}
```

Add these values to your `.env.local` file:
```env
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
SPOTIFY_REFRESH_TOKEN=your_refresh_token
```

</details>

---

Now you're ready to integrate Spotify API calls into your portfolio!
