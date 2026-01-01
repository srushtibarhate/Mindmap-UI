# 📸 Screenshots Guide

## Current Screenshots

This folder contains demonstration images of the Interactive Mindmap UI.

## Recommended Screenshot Organization

Please rename or capture new screenshots following this structure:

### 1. full-view.png

**What to capture:**

- Complete mindmap with all nodes expanded
- Shows hierarchical structure
- All connector lines visible
- Header with controls visible

**How to capture:**

1. Click "➕ Expand All" button
2. Scroll to show maximum nodes
3. Use `Win + Shift + S` (Windows) or `Cmd + Shift + 4` (Mac)
4. Capture entire application window

---

### 2. hover-interaction.png

**What to capture:**

- Mouse hovering over a node
- Tooltip visible with node information
- Node slightly highlighted on hover

**How to capture:**

1. Hover over any node (e.g., "Vitamin A")
2. Wait for tooltip to appear
3. Keep cursor steady
4. Capture screenshot

---

### 3. node-selected.png

**What to capture:**

- A node selected (orange highlighting)
- Child nodes highlighted in purple
- Side panel showing node details
- Edit button visible

**How to capture:**

1. Click on a node with children (e.g., "Fat-Soluble Vitamins")
2. Wait for highlighting and side panel update
3. Capture both mindmap and side panel

---

### 4. expanded-collapsed.png

**What to capture:**

- Some nodes expanded (with ▲ indicator)
- Some nodes collapsed (with ▼ indicator)
- Shows the expand/collapse functionality

**How to capture:**

1. Click on root node to collapse some children
2. Leave other branches expanded
3. Ensure indicators (▼/▲) are visible
4. Capture the comparison

---

## Current Files

The existing screenshots (`img_1.png` through `img_4.png`) can be:

- Renamed to match the recommended structure above, OR
- Replaced with new screenshots following the guidelines

## Tools for Screenshot Capture

### Windows

- **Snipping Tool**: `Win + Shift + S`
- **Game Bar**: `Win + Alt + PrtSc`
- **Full Screen**: `PrtSc` key

### Mac

- **Selection**: `Cmd + Shift + 4`
- **Window**: `Cmd + Shift + 4`, then `Space`
- **Full Screen**: `Cmd + Shift + 3`

### Browser DevTools

1. Press `F12`
2. Click three dots menu (⋮)
3. Select "Capture screenshot" or "Capture full size screenshot"

## Screenshot Quality Tips

✅ **Do:**

- Use high resolution (1920x1080 or higher)
- Ensure good contrast and visibility
- Capture full UI elements (no cut-offs)
- Show actual functionality in action
- Use PNG format for clarity

❌ **Don't:**

- Use low resolution or blurry images
- Crop important UI elements
- Include personal information
- Use heavily compressed formats (JPG with low quality)

## Embedding in README

Screenshots are referenced in README.md using:

```markdown
![Description](screenshots/filename.png)
```

Current references:

- `screenshots/full-view.png`
- `screenshots/hover-interaction.png`
- `screenshots/node-selected.png`
- `screenshots/expanded-collapsed.png`

---

## Quick Renaming Commands

If you want to rename existing screenshots:

### Windows PowerShell

```powershell
Rename-Item "img_1.png" "full-view.png"
Rename-Item "img_2.png" "hover-interaction.png"
Rename-Item "img_3.png" "node-selected.png"
Rename-Item "img_4.png" "expanded-collapsed.png"
```

### Or manually

Right-click each file → Rename → Use new name

---

**Note**: Screenshots are essential for the assignment submission. Ensure all 4 required screenshots are present before submitting!
