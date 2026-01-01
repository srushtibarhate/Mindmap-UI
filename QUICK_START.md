# ⚡ QUICK START GUIDE

## 🚀 Get Running in 30 Seconds

### Step 1: Open Terminal in Project Folder

```powershell
cd "c:\Users\HP\Downloads\mindmap-ui"
```

### Step 2: Start Server

```powershell
python -m http.server 8000
```

### Step 3: Open Browser

Go to: **http://localhost:8000**

That's it! Your interactive mindmap is now running! 🎉

---

## 🎮 Try These Features

### ✅ Hover Over Nodes

Move your mouse over any blue/purple/green node → See tooltip!

### ✅ Click to Select

Click any node → It turns orange, side panel shows details

### ✅ Expand/Collapse

Click "Vitamins in Human Body" (root node) → Children collapse
Click again → Children expand back

### ✅ Edit a Node

1. Click any node (it turns orange)
2. Click "✏️ Edit" button in right panel
3. Change the title/summary
4. See instant updates!

### ✅ Use Control Buttons

- **🔍 Fit to View**: Resets scroll position
- **🔄 Reset View**: Reloads original data
- **➕ Expand All**: Opens everything
- **➖ Collapse All**: Minimizes tree
- **💾 Export Data**: Downloads JSON file

---

## 📸 Capture Screenshots Now!

### Screenshot 1: Full View

1. Click "➕ Expand All" button
2. Press `Win + Shift + S` (Windows)
3. Select entire mindmap area
4. Save as: `screenshots/full-view.png`

### Screenshot 2: Hover

1. Hover over "Vitamin A" node
2. Wait for tooltip to appear
3. Press `Win + Shift + S`
4. Save as: `screenshots/hover-interaction.png`

### Screenshot 3: Selected Node

1. Click "Fat-Soluble Vitamins" node
2. Wait for side panel to update
3. Press `Win + Shift + S`
4. Capture both mindmap + side panel
5. Save as: `screenshots/node-selected.png`

### Screenshot 4: Expanded/Collapsed

1. Click root node to collapse some children
2. Press `Win + Shift + S`
3. Capture showing ▼ indicators
4. Save as: `screenshots/expanded-collapsed.png`

---

## 🎥 Record Demo Video (2 Minutes)

### Using Loom (Easiest!)

1. Go to https://loom.com
2. Click "Get Loom for Free"
3. Install browser extension
4. Click Loom icon → "Start Recording"
5. Select "Full Desktop" or "Current Tab"
6. Record for 1-2 minutes showing:
   - Hover interactions
   - Click selections
   - Expand/collapse
   - Edit feature
   - Control buttons
7. Click "Finish" → Get shareable link
8. Add link to README.md

### Using Windows Game Bar

1. Press `Win + G`
2. Click camera icon to start recording
3. Do your demo
4. Press `Win + G` again → Stop
5. Video saved to: `C:\Users\HP\Videos\Captures\`
6. Upload to YouTube or Google Drive

---

## 🧪 Test Data-Driven Design

### Prove It's 100% Data-Driven!

1. **Open data.json in VS Code**
2. **Find line 3** (the root title):
   ```json
   "title": "Vitamins in Human Body",
   ```
3. **Change it to**:
   ```json
   "title": "Essential Nutrients",
   ```
4. **Save the file** (Ctrl+S)
5. **Go back to browser**
6. **Refresh** (F5)
7. **Watch the title update!** ✨

### Add a New Node

1. **Find the "deficiency" node** (bottom of data.json)
2. **Add a child** to it:
   ```json
   {
     "id": "deficiency",
     "title": "Deficiency Disorders",
     "summary": "Insufficient vitamin intake can lead to various health conditions...",
     "children": [
       {
         "id": "scurvy",
         "title": "Scurvy (Vitamin C Deficiency)",
         "summary": "Causes bleeding gums, bruising, and weakness"
       }
     ]
   }
   ```
3. **Save and refresh**
4. **New node appears with all features!** 🎉

---

## 📋 Final Checklist Before Submission

### Files Complete

- [x] index.html ✅
- [x] style.css ✅
- [x] script.js ✅
- [x] data.json ✅
- [x] README.md ✅
- [x] DEPLOYMENT.md ✅
- [x] SUBMISSION_SUMMARY.md ✅
- [ ] screenshots/full-view.png ⏳ (Capture now!)
- [ ] screenshots/hover-interaction.png ⏳
- [ ] screenshots/node-selected.png ⏳
- [ ] screenshots/expanded-collapsed.png ⏳

### Content Complete

- [x] All features working ✅
- [x] Documentation written ✅
- [ ] Screenshots captured ⏳
- [ ] Demo video recorded ⏳
- [ ] Video link in README ⏳

---

## 🎯 Quick Commands Reference

### Start Server

```powershell
python -m http.server 8000
```

### Stop Server

Press `Ctrl + C` in terminal

### Create Screenshots Folder

```powershell
mkdir screenshots
```

### Create Zip for Submission

```powershell
Compress-Archive -Path . -DestinationPath mindmap-ui-submission.zip
```

### Push to GitHub (Optional)

```powershell
git init
git add .
git commit -m "Interactive Mindmap UI Assignment"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

---

## 💡 Tips for Demo Video

### What to Say (Optional)

> "Hi, this is my Interactive Mindmap UI built with vanilla JavaScript.
> Let me show you the features..."
>
> [Show hover] "When I hover over nodes, tooltips appear with information..."
>
> [Show click] "Clicking selects nodes and shows details in the side panel..."
>
> [Show edit] "I can edit nodes in real-time through the UI..."
>
> [Show data-driven] "And it's 100% data-driven - watch what happens when I change the JSON..."

### Best Practices

- ✅ Keep it under 2 minutes
- ✅ Show, don't just tell
- ✅ Demonstrate all key features
- ✅ Show the data-driven aspect
- ✅ Keep cursor movements smooth
- ✅ Close unnecessary browser tabs
- ✅ Use full screen mode

---

## ⚠️ Troubleshooting

### "Mindmap not loading"

- Check browser console (F12)
- Verify data.json is valid: https://jsonlint.com
- Make sure server is running

### "CORS error"

- Don't open index.html directly (file://)
- Must use local server (http://localhost)

### "Styles look wrong"

- Hard refresh: `Ctrl + F5`
- Clear browser cache

### "Export doesn't work"

- Check browser download settings
- Allow downloads from localhost

---

## 🎉 You're Ready!

Your Interactive Mindmap UI is complete and ready for submission!

**What you've built:**

- ✅ Fully interactive mindmap visualization
- ✅ Data-driven architecture
- ✅ Professional UI/UX
- ✅ Complete documentation
- ✅ All required features + bonuses

**Time to submit:** Just capture screenshots, record video, and you're done!

Good luck! 🚀 You've got this! 💪

---

**Need help? Check:**

- README.md (full documentation)
- DEPLOYMENT.md (deployment guide)
- SUBMISSION_SUMMARY.md (what you've accomplished)

**Current Status:** ✅ Application is running on http://localhost:8000
