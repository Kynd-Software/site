# Firebase Hosting — Custom Domain Setup Plan

## Overview

Migrate kyndsoft.com from HeartInternet hosting to Firebase Hosting while keeping the domain registered at HeartInternet.

**Firebase Project:** `website-fd527`  
**Current Firebase URL:** https://website-fd527.web.app  
**Target Domain:** kyndsoft.com + www.kyndsoft.com

---

## Step 1 — Add Custom Domain in Firebase Console

1. Go to: https://console.firebase.google.com/project/website-fd527/hosting
2. Click **"Add custom domain"**
3. Enter `kyndsoft.com`
4. Firebase will display a **TXT verification record**

---

## Step 2 — Add TXT Record at HeartInternet (Verify Ownership)

Go to HeartInternet DNS management for kyndsoft.com and add:

| Type | Host/Name | Value |
|------|-----------|-------|
| TXT  | `@` (or blank) | *Paste the verification string Firebase gives you* |

⏳ Wait for Firebase to confirm verification (can be instant, sometimes up to a few hours).

---

## Step 3 — Update A Records (Point Domain to Firebase)

Once verified, Firebase will display **two A record IPs**. At HeartInternet:

1. **Remove** any existing A records for `@` (these point to the old server)
2. **Add** the two A records Firebase provides:

| Type | Host/Name | Value |
|------|-----------|-------|
| A    | `@`       | *First IP from Firebase* |
| A    | `@`       | *Second IP from Firebase* |

> ⚠️ Use the exact IPs Firebase shows you — they are specific to your project.

---

## Step 4 — Add www Subdomain

Back in Firebase Console:
1. Click **"Add custom domain"** again
2. Enter `www.kyndsoft.com`

Then at HeartInternet add a CNAME:

| Type  | Host/Name | Value |
|-------|-----------|-------|
| CNAME | `www`     | `website-fd527.web.app` |

---

## Step 5 — Wait for SSL Certificate

- Firebase auto-provisions a free SSL certificate once DNS propagates
- Usually takes 15 mins – 24 hours
- Status visible in Firebase Console → Hosting → Custom domains

---

## Tips

- Set TTL to **300** (5 mins) during migration so DNS changes propagate quickly
- You can increase TTL back to 3600+ once everything is confirmed working
- The old .htaccess is no longer needed — Firebase handles SPA routing via firebase.json
- Once confirmed working, you can cancel/remove the old hosting package at HeartInternet

---

## Checklist

- [ ] Add `kyndsoft.com` in Firebase Console
- [ ] Add TXT verification record at HeartInternet
- [ ] Wait for verification ✓
- [ ] Remove old A records at HeartInternet
- [ ] Add Firebase A records at HeartInternet
- [ ] Add `www.kyndsoft.com` in Firebase Console
- [ ] Add CNAME for www at HeartInternet
- [ ] Confirm SSL provisioned
- [ ] Test site loads at https://kyndsoft.com
- [ ] Test site loads at https://www.kyndsoft.com
- [ ] Remove old hosting package (optional)
