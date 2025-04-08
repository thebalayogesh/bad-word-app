# 🛡️ Bad Word App - Advanced Bad Words Grabber

## 🚀 Features

- ⚙️ **Custom Bad Words List**
- 📁 backend with **Supabase**

---

## API STRUCTURE

### ✅ 1. Check Bad Words
**URI:** `POST https://bad-word-app-demo.vercel.app/api/profanity/`
**Endpoint:** `POST /check`  
**Description:** Detects if the given input contains any bad words.

#### 🔸 Request

```json
{
  "text": "This is a damn bad example."
}
