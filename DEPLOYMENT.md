# 🚀 Deployment Guide - Interactive Mindmap UI

## Quick Start Options

### Option 1: Local Development (Fastest)

**Using Python:**

```bash
cd mindmap-ui
python -m http.server 8000
```

Open: http://localhost:8000

**Using VS Code Live Server:**

1. Install "Live Server" extension from VS Code marketplace
2. Right-click `index.html`
3. Click "Open with Live Server"

### Option 2: GitHub Pages (Free Hosting)

1. **Create GitHub Repository**

   ```bash
   cd mindmap-ui
   git init
   git add .
   git commit -m "Initial commit: Interactive Mindmap UI"
   git branch -M main
   git remote add origin https://github.com/your-username/mindmap-ui.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select branch: `main`, folder: `/root`
   - Click Save
   - Your site will be at: `https://your-username.github.io/mindmap-ui/`

### Option 3: Netlify (One-Click Deploy)

1. **Via Drag & Drop:**

   - Go to https://app.netlify.com/drop
   - Drag the entire `mindmap-ui` folder
   - Get instant URL!

2. **Via Git:**

   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Deploy
   cd mindmap-ui
   netlify deploy --prod
   ```

### Option 4: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd mindmap-ui
vercel --prod
```

### Option 5: Surge.sh

```bash
# Install Surge
npm install -g surge

# Deploy
cd mindmap-ui
surge
```

## Testing Checklist

### ✅ Functional Tests

- [ ] Open application in browser
- [ ] Mindmap loads from data.json
- [ ] Hover over nodes displays tooltip
- [ ] Tooltip follows cursor
- [ ] Click node to select (orange highlight)
- [ ] Child nodes highlight in purple
- [ ] Side panel shows details
- [ ] Metadata displays if available
- [ ] Children list shows if available
- [ ] Click "Edit" button opens prompts
- [ ] Edit title updates node
- [ ] Edit summary updates panel
- [ ] Expand/collapse works on click
- [ ] "Expand All" button works
- [ ] "Collapse All" button works
- [ ] "Fit to View" resets scroll
- [ ] "Reset View" reloads data
- [ ] "Export Data" downloads JSON
- [ ] ESC key deselects node
- [ ] E key opens edit dialog

### ✅ Browser Compatibility

- [ ] Google Chrome (latest)
- [ ] Mozilla Firefox (latest)
- [ ] Microsoft Edge (latest)
- [ ] Safari (latest)
- [ ] Mobile browsers (responsive)

### ✅ Data-Driven Test

1. Edit data.json
2. Change a node title
3. Reload page
4. Verify change appears
5. Add new child node
6. Reload page
7. Verify new node appears with all features

## Screenshot Guide

### Required Screenshots

**1. Full Mindmap View**

- Show complete expanded mindmap
- All nodes visible
- Clear hierarchy

**2. Hover Interaction**

- Cursor over a node
- Tooltip visible
- Node highlighted

**3. Node Selected & Side Panel**

- Node clicked (orange)
- Side panel open
- Details displayed
- Edit button visible

**4. Expanded/Collapsed States**

- Some nodes expanded
- Some nodes collapsed
- Indicators visible (▼/▲)

### How to Capture

**Windows:**

```
Win + Shift + S → Select area → Save
```

**Mac:**

```
Cmd + Shift + 4 → Select area → Save
```

**Browser DevTools:**

```
F12 → Three dots → Capture screenshot
```

Save to: `screenshots/` folder

## Demo Video Guide

### Recommended Tools

**Free Options:**

- **OBS Studio** (https://obsproject.com/) - Professional, all platforms
- **Loom** (https://loom.com/) - Browser-based, easy sharing
- **Windows Game Bar** - Built-in (Win + G)
- **Mac Screen Recording** - Built-in (Cmd + Shift + 5)
- **ShareX** (Windows) - https://getsharex.com/

### Video Script (1-2 minutes)

```
[0:00-0:05] Introduction
"This is my Interactive Mindmap UI built with vanilla JavaScript"

[0:05-0:15] Overview
- Pan across the full mindmap
- Show the header controls

[0:15-0:30] Hover Interaction
- Hover over multiple nodes
- Show tooltip following cursor
- Different node levels

[0:30-0:45] Click & Selection
- Click on a node (orange highlight)
- Show child nodes highlighted (purple)
- Point out side panel details

[0:45-1:00] Expand/Collapse
- Click node to collapse children
- Click again to expand
- Show indicators (▼/▲)
- Try "Expand All" and "Collapse All" buttons

[1:00-1:15] Edit Feature
- Select a node
- Click "Edit" button
- Change title and summary
- Show updates in real-time

[1:15-1:30] Control Buttons
- Click "Fit to View"
- Click "Reset View"
- Click "Export Data" (show file downloads)

[1:30-1:45] Data-Driven Demo (Optional but impressive!)
- Open data.json in editor
- Change a title
- Save file
- Reload browser
- Show the change reflected

[1:45-2:00] Conclusion
"All features work seamlessly, 100% data-driven from JSON"
```

### Upload Options

**YouTube:**

- Upload as unlisted
- Add to README

**Google Drive:**

- Upload video
- Set sharing to "Anyone with link"
- Add link to README

**Loom:**

- Record directly
- Get shareable link
- Add to README

## Submission Package

### Final Checklist

```
mindmap-ui/
├── ✅ index.html (Enhanced with controls)
├── ✅ style.css (Modern styling & animations)
├── ✅ script.js (Full interactive features)
├── ✅ data.json (Rich hierarchical data)
├── ✅ README.md (Comprehensive documentation)
├── screenshots/
│   ├── ✅ full-view.png
│   ├── ✅ hover-interaction.png
│   ├── ✅ node-selected.png
│   └── ✅ expanded-collapsed.png
└── ✅ DEPLOYMENT.md (This file)
```

### README Updates

Add these sections to README:

- [ ] Demo video link
- [ ] Live demo URL (if deployed)
- [ ] Screenshot paths confirmed
- [ ] Repository link (if on GitHub)

## Common Issues & Solutions

### Issue: Fetch fails with CORS error

**Solution:** Use a local server, not file:// protocol

### Issue: Tooltip doesn't follow cursor

**Solution:** Check browser console for JavaScript errors

### Issue: Mindmap doesn't load

**Solution:** Verify data.json is valid JSON (use jsonlint.com)

### Issue: Styles look broken

**Solution:** Hard refresh (Ctrl+F5 / Cmd+Shift+R)

### Issue: Export doesn't work

**Solution:** Check browser download settings/permissions

## Performance Optimization

### Tips for Large Mindmaps

1. Implement virtual scrolling for 100+ nodes
2. Use CSS transforms instead of position changes
3. Debounce hover events
4. Lazy load deep branches
5. Consider canvas rendering for 500+ nodes

### Current Limitations

- Optimal for 50-100 nodes
- CSS-based rendering
- No virtualization
- Suitable for demo/interview purposes

## Going Live Checklist

- [ ] All features tested
- [ ] Screenshots captured
- [ ] Video recorded and uploaded
- [ ] README updated with links
- [ ] Code commented and clean
- [ ] data.json validated
- [ ] Browser compatibility checked
- [ ] Mobile responsiveness verified
- [ ] GitHub repository created (optional)
- [ ] Live demo deployed (optional)

## Support & Troubleshooting

### Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [JSON Validator](https://jsonlint.com/)

### Debugging Tips

1. Open browser DevTools (F12)
2. Check Console for errors
3. Use Network tab to verify data.json loads
4. Inspect Elements for CSS issues
5. Use console.log statements in script.js

---

## 🎉 Ready to Submit!

Once all checklist items are complete:

1. **Create zip file:**

   ```bash
   # Windows PowerShell
   Compress-Archive -Path mindmap-ui -DestinationPath mindmap-ui-submission.zip

   # Or right-click folder → Send to → Compressed folder
   ```

2. **Or push to GitHub:**

   ```bash
   git add .
   git commit -m "Final submission"
   git push
   ```

3. **Submit:**
   - Upload zip file, OR
   - Share GitHub repository link, OR
   - Share live demo URL

---

**Good luck with your submission! 🚀**
