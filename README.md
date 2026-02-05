# 🤖 MET'S Robotics Club Website

![Project Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Tech-HTML5_%7C_Tailwind_%7C_JS-0ea5e9?style=for-the-badge)
![Maintainers](https://img.shields.io/badge/Role-Student_Committee-blueviolet?style=for-the-badge)

> **"Unveiling the Future."**
> The official repository for the Robotics Club website at MET'S School of Engineering, Mala.

---

## 📖 For the Developers (Start Here)
This website is built to be **static, fast, and easy to hand over**. It does not use React, Angular, or complex build steps. It uses **HTML5**, **Tailwind CSS (CDN)**, and a **JSON-based content system** for dynamic updates.

### 📂 Folder Map
* `index.html`: The Homepage (Hero, About, Domains, Contact).
* `team.html`: The Committee Page (Full list of members).
* `assets/data/club-data.json`: **The "Database".** Edit this to add news/photos without touching HTML.
* `assets/img/`: Where all images live.
* `assets/js/main.js`: The logic that reads the JSON file.

---

## ⚙️ How to Make Changes (The Manual)

### Level 1: Routine Updates (No Coding Required)
*Use this for adding Event Photos or News Announcements.*

1.  **Adding to the Gallery:**
    * Upload your photo to `assets/img/`.
    * Open `assets/data/club-data.json`.
    * Add a new block to the `"gallery"` list.
    * *Note:* The site automatically puts the newest date at the top.
2.  **Posting News/Announcements:**
    * Open `assets/data/club-data.json`.
    * Add a new block to the `"news"` list.
    * Set `"urgent": true` if you want it highlighted in red.

### Level 2: Content Updates (Basic HTML)
*Use this for changing text, descriptions, or the About section.*

1.  **Editing Text:**
    * Open `index.html`.
    * Use `Ctrl+F` (Find) to locate the text you want to change (e.g., "Our Mission").
    * Edit the text between the tags like this: `<h1>NEW TEXT HERE</h1>`.
2.  **Changing Links (e.g., Registration Form):**
    * Find the "Join Now" button in `index.html`.
    * Change the `href` attribute:
        ```html
        <a href="YOUR_NEW_GOOGLE_FORM_LINK">Join Now</a>
        ```

### Level 3: Annual Handovers (The Squad)
*Use this when the committee changes next year.*

1.  **Update the Team Page:**
    * Open `team.html`.
    * Replace the names, roles, and image links for the new Faculty Coordinator and Secretaries.
2.  **Update the Footer:**
    * Open `index.html`.
    * Update the copyright year: `© 2027 MET'S Robotics Club`.

---

## 🎨 Design & Images
* **Colors:** We use Tailwind colors.
    * `text-cyber-blue` (Neon Blue)
    * `bg-deep-navy` (Dark Background)
* **Images:**
    * Always try to compress images (use [TinyPNG](https://tinypng.com)) before uploading to keep the site fast.
    * Team photos work best if they are square (1:1 aspect ratio).

---

## ✅ Do's and ❌ Don'ts (Best Practices)

To keep the website fast and professional, please follow these golden rules.

### ✅ DO
* **Compress Images:** Always run photos through [TinyPNG](https://tinypng.com) or a similar tool before uploading. Large images will make the site slow for mobile users.
* **Validate JSON:** When editing `club-data.json`, be careful with commas! One missing comma can break the whole gallery. Use a [JSON Validator](https://jsonlint.com) if you aren't sure.
* **Test on Mobile:** After making changes, shrink your browser window to phone size to ensure the layout doesn't break.
* **Stick to the Vibe:** Use the defined Tailwind colors (`text-cyber-blue`, `bg-deep-navy`) to maintain the brand identity.

### ❌ DON'T
* **Don't Upload Raw Photos:** Never upload 5MB+ image files directly from a DSLR or phone. Aim for under 500KB per image.
* **Don't Edit `main.js` Unnecessarily:** Only touch the JavaScript if you are adding a new feature. For content updates, stick to the HTML or JSON.
* **Don't Hardcode Passwords:** Never put passwords, API keys, or private student data (like home addresses) in the code. This is a public repository!
* **Don't Break the Formatting:** Avoid inline CSS (e.g., `style="color: red"`) unless absolutely necessary. Use Tailwind classes instead.

## 🚀 How to Deploy
This site is hosted on **GitHub Pages**.

1.  Make your changes in the code.
2.  Commit your changes:
    ```bash
    git add .
    git commit -m "Updated gallery for Feb Workshop"
    ```
3.  Push to GitHub:
    ```bash
    git push origin main
    ```
4.  **Done!** The changes will be live in 1-2 minutes.

---

## 📝 Updating this README
If the structure of the website changes significantly (e.g., moving to React), please update this file to help future batches.
1.  Open `README.md`.
2.  Edit the text using Markdown syntax.
3.  Commit and Push.

---

**© 2026 MET'S Robotics Club** | Built with 💻 by the Class of 2026.