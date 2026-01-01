// ========================================
// STATE MANAGEMENT
// ========================================
let mindmapData = null;
let selectedNodeEl = null;
let selectedData = null;
const tooltip = document.getElementById("tooltip");
const tooltipContent = tooltip.querySelector(".tooltip-content");

// ========================================
// LOAD AND RENDER MINDMAP
// ========================================
fetch("data.json")
  .then(res => res.json())
  .then(data => {
    mindmapData = data;
    renderMindmap(data);
    console.log("✅ Mindmap loaded successfully from data.json");
  })
  .catch(err => {
    console.error("❌ Error loading data:", err);
    document.getElementById("mindmap").innerHTML = 
      '<p style="color: red;">Error loading mindmap data</p>';
  });

function renderMindmap(data) {
  const container = document.getElementById("mindmap");
  container.innerHTML = "";
  container.appendChild(createNode(data));
}

// ========================================
// CREATE NODE RECURSIVELY
// ========================================
function createNode(nodeData, depth = 0) {
  const wrapper = document.createElement("div");
  wrapper.className = "tree";
  wrapper.setAttribute("data-depth", depth);

  const node = document.createElement("div");
  node.className = "node";
  node.innerText = nodeData.title;
  node.setAttribute("data-id", nodeData.id);
  node.setAttribute("data-summary", nodeData.summary || "No summary available");

  // Add depth-based styling
  if (depth === 0) {
    node.classList.add("node-root");
  } else if (depth === 1) {
    node.classList.add("node-level-1");
  } else if (depth === 2) {
    node.classList.add("node-level-2");
  } else {
    node.classList.add("node-level-3");
  }

  let childrenContainer = null;

  // Hover interaction - show tooltip
  node.onmouseenter = (e) => {
    showTooltip(e, nodeData);
  };

  node.onmousemove = (e) => {
    positionTooltip(e);
  };

  node.onmouseleave = () => {
    hideTooltip();
  };

  // Click interaction - select and expand/collapse
  node.onclick = (e) => {
    e.stopPropagation();
    selectNode(node, nodeData);

    // Toggle children visibility
    if (childrenContainer) {
      const isHidden = childrenContainer.classList.toggle("hidden");
      node.classList.toggle("collapsed", isHidden);
    }
  };

  wrapper.appendChild(node);

  // Create children
  if (nodeData.children && nodeData.children.length > 0) {
    childrenContainer = document.createElement("div");
    childrenContainer.className = "children";

    // Add connector line
    const connector = document.createElement("div");
    connector.className = "connector";
    wrapper.appendChild(connector);

    nodeData.children.forEach(child => {
      childrenContainer.appendChild(createNode(child, depth + 1));
    });

    wrapper.appendChild(childrenContainer);
    
    // Add expand/collapse indicator
    node.classList.add("has-children");
  }

  return wrapper;
}

// ========================================
// TOOLTIP FUNCTIONALITY
// ========================================
function showTooltip(event, data) {
  tooltipContent.innerHTML = `
    <strong>${data.title}</strong>
    <p>${data.summary || "No summary available"}</p>
  `;
  tooltip.classList.remove("hidden");
  positionTooltip(event);
}

function positionTooltip(event) {
  const x = event.clientX;
  const y = event.clientY;
  
  tooltip.style.left = (x + 15) + "px";
  tooltip.style.top = (y + 15) + "px";
}

function hideTooltip() {
  tooltip.classList.add("hidden");
}

// ========================================
// NODE SELECTION
// ========================================
function selectNode(node, data) {
  // Remove previous highlights
  document.querySelectorAll(".node").forEach(n => {
    n.classList.remove("active");
    n.classList.remove("related");
  });

  // Highlight clicked node
  node.classList.add("active");

  // Highlight related nodes (children)
  const tree = node.closest(".tree");
  if (tree) {
    const childNodes = tree.querySelectorAll(":scope > .children .node");
    childNodes.forEach(c => c.classList.add("related"));
  }

  selectedNodeEl = node;
  selectedData = data;

  // Update side panel
  updateSidePanel(data);
}

function updateSidePanel(data) {
  document.getElementById("panelTitle").innerText = data.title;
  document.getElementById("panelSummary").innerText = data.summary || "No summary available";
  document.getElementById("editBtn").style.display = "block";

  // Show metadata section
  const metadataSection = document.getElementById("metadataSection");
  const metadataDiv = document.getElementById("panelMetadata");
  if (data.metadata) {
    metadataSection.style.display = "block";
    metadataDiv.innerHTML = Object.entries(data.metadata)
      .map(([key, value]) => `<div class="metadata-item"><strong>${key}:</strong> ${value}</div>`)
      .join("");
  } else {
    metadataSection.style.display = "none";
  }

  // Show children section
  const childrenSection = document.getElementById("childrenSection");
  const childrenDiv = document.getElementById("panelChildren");
  if (data.children && data.children.length > 0) {
    childrenSection.style.display = "block";
    childrenDiv.innerHTML = data.children
      .map(child => `<div class="child-item">• ${child.title}</div>`)
      .join("");
  } else {
    childrenSection.style.display = "none";
  }
}

// ========================================
// EDIT FUNCTIONALITY
// ========================================
document.getElementById("editBtn").onclick = () => {
  if (!selectedNodeEl || !selectedData) return;

  const newTitle = prompt("Edit title:", selectedData.title);
  const newSummary = prompt("Edit summary:", selectedData.summary);

  if (newTitle !== null && newTitle.trim() !== "") {
    selectedData.title = newTitle;
    selectedNodeEl.innerText = newTitle;
    document.getElementById("panelTitle").innerText = newTitle;
  }

  if (newSummary !== null && newSummary.trim() !== "") {
    selectedData.summary = newSummary;
    selectedNodeEl.setAttribute("data-summary", newSummary);
    document.getElementById("panelSummary").innerText = newSummary;
  }

  console.log("✏️ Node updated:", selectedData);
};

// ========================================
// CONTROL BUTTONS
// ========================================

// Fit to View
document.getElementById("fitViewBtn").onclick = () => {
  const mindmapContainer = document.getElementById("mindmapContainer");
  mindmapContainer.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
  console.log("🔍 View fitted");
};

// Reset View
document.getElementById("resetBtn").onclick = () => {
  if (mindmapData) {
    renderMindmap(mindmapData);
    selectedNodeEl = null;
    selectedData = null;
    document.getElementById("panelTitle").innerText = "Select a node";
    document.getElementById("panelSummary").innerText = "Click on any node to see details";
    document.getElementById("editBtn").style.display = "none";
    document.getElementById("metadataSection").style.display = "none";
    document.getElementById("childrenSection").style.display = "none";
    console.log("🔄 View reset");
  }
};

// Expand All
document.getElementById("expandAllBtn").onclick = () => {
  document.querySelectorAll(".children").forEach(children => {
    children.classList.remove("hidden");
  });
  document.querySelectorAll(".node").forEach(node => {
    node.classList.remove("collapsed");
  });
  console.log("➕ All nodes expanded");
};

// Collapse All
document.getElementById("collapseAllBtn").onclick = () => {
  document.querySelectorAll(".children").forEach((children, index) => {
    if (index > 0) { // Don't hide root's children
      children.classList.add("hidden");
    }
  });
  document.querySelectorAll(".node.has-children").forEach((node, index) => {
    if (index > 0) { // Don't collapse root
      node.classList.add("collapsed");
    }
  });
  console.log("➖ All nodes collapsed");
};

// Export Data
document.getElementById("exportBtn").onclick = () => {
  const dataStr = JSON.stringify(mindmapData, null, 2);
  const dataBlob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "mindmap-data-export.json";
  link.click();
  URL.revokeObjectURL(url);
  console.log("💾 Data exported");
};

// ========================================
// KEYBOARD SHORTCUTS
// ========================================
document.addEventListener("keydown", (e) => {
  // ESC - Deselect
  if (e.key === "Escape" && selectedNodeEl) {
    selectedNodeEl.classList.remove("active");
    document.querySelectorAll(".node.related").forEach(n => n.classList.remove("related"));
    selectedNodeEl = null;
    selectedData = null;
  }
  
  // E - Edit (when node selected)
  if (e.key === "e" && selectedNodeEl) {
    document.getElementById("editBtn").click();
  }
});

console.log("🚀 Mindmap UI initialized - Data-driven interactive visualization ready!");

// Reset view
function resetView() {
  location.reload();
}
