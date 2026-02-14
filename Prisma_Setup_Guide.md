# 📘 Prisma Complete Setup Guide — Step by Step

> Yeh guide hamesha apne paas rakho — har naye folder mein Prisma setup karne ka
> poora tarika yahan hai!

---

## ⚠️ Sabse Pehle — Sahi Version Ki Baat

| Version | Status | URL Kahan |
|---|---|---|
| `6.x.x` ✅ | Stable — Use Karo | `schema.prisma` mein |
| `7.x.x` ❌ | Naya — Masle Aate Hain | `prisma.config.ts` mein |

> 💡 **Hamesha Version 6.19.2 use karo — Teacher wali stable version!**

---

## 🗂️ Final Folder Structure (Kuch Aisa Dikhega)

```
my-project/
│
├── prisma/
│   ├── migrations/          ← migrate se banta hai
│   ├── dev.db               ← migrate se banta hai
│   └── schema.prisma        ← tum khud likhte ho
│
├── node_modules/            ← npm install se banta hai
├── generated/               ← prisma generate se banta hai
├── .env                     ← prisma init se banta hai
├── .gitignore               ← prisma init se banta hai
├── index.js                 ← tum khud banate ho
├── package.json             ← npm init se banta hai
└── package-lock.json        ← npm install se banta hai
```

---

## 🚀 PART 1 — Naye Folder Mein Prisma Setup

### ✅ Step 1 — Terminal Mein Folder Mein Jao

```bash
cd Desktop/tumhara-folder-naam
```

---

### ✅ Step 2 — Node Project Shuru Karo

```bash
npm init -y
```

> 📌 **Kya banta hai:** `package.json` file

---

### ✅ Step 3 — Prisma Install Karo (Version 6.19.2)

```bash
npm install prisma@6.19.2 --save-dev
```

> 📌 **Kya banta hai:** `node_modules` folder, `package-lock.json`

---

### ✅ Step 4 — Prisma Client Install Karo

```bash
npm install @prisma/client@6.19.2
```

> 📌 **Kya banta hai:** Client install hota hai jo queries karne deta hai

---

### ✅ Step 5 — Verify Karo (Version Check)

```bash
npx prisma --version
```

> ✅ **Yeh dikhna chahiye:**
> ```
> prisma         : 6.19.2
> @prisma/client : 6.19.2
> ```

---

### ✅ Step 6 — Prisma Initialize Karo

```bash
npx prisma init --datasource-provider sqlite
```

> 📌 **Kya banta hai:**
> - `prisma/schema.prisma` ← models yahan likhenge
> - `.env` ← database URL
> - `.gitignore`

---

## 📝 PART 2 — Schema Likhna

### ✅ Step 7 — schema.prisma File Kholo Aur Likho

**`prisma/schema.prisma`**

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  age       Int?
  createdAt DateTime @default(now())
}
```

> ⚠️ **Zaruri:** `url = "file:./dev.db"` likhna ZAROORI hai Version 6 mein!

---

## 🗄️ PART 3 — Database Banana

### ✅ Step 8 — Migrate Karo (Database + Table Banega)

```bash
npx prisma migrate dev --name init
```

> 📌 **Kya banta hai:**
> - `prisma/migrations/` folder
> - `prisma/dev.db` (database file)
>
> ✅ **Success message aisa dikhega:**
> ```
> Your database is now in sync with your schema
> Generated Prisma Client
> ```

---

### ✅ Step 9 — Generate Karo (Prisma Client Update)

```bash
npx prisma generate
```

> 📌 **Kya banta hai:** `generated/` folder — Prisma client ready hota hai

---

## 💻 PART 4 — JS File Banana Aur Chalana

### ✅ Step 10 — index.js Banao

**`index.js`**

```javascript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    // Pehle purana data delete karo
    await prisma.user.deleteMany();
    console.log("Old data deleted!");

    // Naya user banao
    const user = await prisma.user.create({
        data: {
            name: "Abdur Rehman",
            email: "rahib@gmail.com",
            age: 15
        }
    });
    console.log("Created:", user);

    // Saare users dekho
    const users = await prisma.user.findMany();
    console.log("All Users:", users);
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
```

---

### ✅ Step 11 — package.json Mein Type Add Karo

**`package.json`** mein yeh line add karo:

```json
{
  "type": "module"
}
```

> ⚠️ **Yeh zaruri hai** warna `import` statement kaam nahi karega!

---

### ✅ Step 12 — File Chalao

```bash
node index.js
```

> ✅ **Output aisa aayega:**
> ```
> Old data deleted!
> Created: { id: 1, name: 'Abdur Rehman', email: 'rahib@gmail.com', ... }
> All Users: [ { id: 1, name: 'Abdur Rehman', ... } ]
> ```

---

## 🔄 PART 5 — Naya Model Add Karna

### Jab Naya Model Chahiye (Jaise anwar.js ke liye)

**Step 1 — Schema mein naya model add karo:**

```prisma
model Khan {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  age       Int?
  createdAt DateTime @default(now())
}
```

**Step 2 — Migrate karo:**

```bash
npx prisma migrate dev --name add_khan_model
```

**Step 3 — Generate karo:**

```bash
npx prisma generate
```

**Step 4 — Nai file banao (anwar.js):**

```javascript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    await prisma.khan.deleteMany();

    const khan = await prisma.khan.create({
        data: {
            name: "Anwar Khan",
            email: "anwar@gmail.com",
            age: 20
        }
    });
    console.log("Created:", khan);

    const all = await prisma.khan.findMany();
    console.log("All:", all);
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
```

**Step 5 — Chalao:**

```bash
node anwar.js
```

---

## 🛠️ PART 6 — Useful Extra Commands

```bash
# Database ka GUI browser mein dekho
npx prisma studio

# Schema format karo (clean karo)
npx prisma format

# Schema mein galti check karo
npx prisma validate

# Migration status dekho
npx prisma migrate status

# Sab kuch reset karo (WARNING: saaraa data delete!)
npx prisma migrate reset
```

---

## ❌ Agar Error Aaye — Fix Karo

### Error 1: Version 7 Install Ho Gaya

```bash
# Fix: Version downgrade karo
npm uninstall prisma @prisma/client
npm install prisma@6.19.2 --save-dev
npm install @prisma/client@6.19.2
npx prisma init --datasource-provider sqlite
```

### Error 2: "Email already exists"

```bash
# Fix: deleteMany() use karo create() se pehle
await prisma.user.deleteMany();
```

### Error 3: "Cannot use import statement"

```bash
# Fix: package.json mein yeh add karo
"type": "module"
```

### Error 4: "Table does not exist"

```bash
# Fix: Migrate nahi kiya — yeh chalao
npx prisma migrate dev --name init
```

---

## 📊 Quick Reference — Sab Commands Ek Jagah

```bash
# ── INSTALLATION ──────────────────────────
npm init -y
npm install prisma@6.19.2 --save-dev
npm install @prisma/client@6.19.2
npx prisma init --datasource-provider sqlite

# ── SCHEMA LIKHNE KE BAAD ─────────────────
npx prisma migrate dev --name init
npx prisma generate

# ── NAYA MODEL ADD KARNE KE BAAD ──────────
npx prisma migrate dev --name model_naam
npx prisma generate

# ── FILE CHALANA ──────────────────────────
node index.js

# ── EXTRA ─────────────────────────────────
npx prisma studio          # GUI dekho
npx prisma --version       # Version check
npx prisma migrate reset   # Sab reset karo
npx prisma validate        # Schema check
npx prisma format          # Schema clean
```

---

## 🧠 Golden Rules — Hamesha Yaad Rakho

> 1. **Naya folder** → Sab 12 steps chalao
> 2. **Naya model** → `migrate` + `generate` chalao
> 3. **Naya field** → `migrate` + `generate` chalao
> 4. **Sirf nai JS file** → Kuch nahi karna!
> 5. **Hamesha Version 6.19.2** use karo
> 6. **`url = "file:./dev.db"`** schema mein likhna mat bhulo!
> 7. **`"type": "module"`** package.json mein hona chahiye!
