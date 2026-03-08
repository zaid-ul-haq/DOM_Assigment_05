// Get all elements
var nameInput   = document.getElementById("nameInput");
var saveBtn     = document.getElementById("saveBtn");
var removeBtn   = document.getElementById("removeBtn");
var displayName = document.getElementById("displayName");
var darkBtn     = document.getElementById("darkBtn");
var clearBtn    = document.getElementById("clearBtn");


// ── Task 2: Show saved name when page loads ───────────────────────
window.addEventListener("load", function() {

  // Load saved name
  var savedName = localStorage.getItem("userName");
  if (savedName) {
    displayName.textContent = "Saved Name: " + savedName;
  }

  // Task 5: Load dark mode state
  var darkMode = localStorage.getItem("darkMode");
  if (darkMode === "true") {
    document.body.classList.add("dark-mode");
  }

});


// ── Task 1 & 3: Save / Update name ───────────────────────────────
saveBtn.addEventListener("click", function() {
  var name = nameInput.value.trim();

  if (name === "") {
    alert("Please enter a name!");
    return;
  }

  // Save to localStorage
  localStorage.setItem("userName", name);

  // Update paragraph
  displayName.textContent = "Saved Name: " + name;

  // Clear input
  nameInput.value = "";
});


// ── Task 4: Remove name ───────────────────────────────────────────
removeBtn.addEventListener("click", function() {
  localStorage.removeItem("userName");
  displayName.textContent = "Saved Name: ";
});


// ── Task 5: Toggle dark mode & save state ────────────────────────
darkBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");

  // Save dark mode state as true or false
  var isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", JSON.stringify(isDark));
});


// ── Task 6: Clear all localStorage data ──────────────────────────
clearBtn.addEventListener("click", function() {
  localStorage.clear();
  displayName.textContent = "Saved Name: ";
  document.body.classList.remove("dark-mode");
});
