<template>
  <div class="dashboard">
    <div class="sidebar">
      <!-- Sidebar content here -->
    </div>
    <div class="main-content">
      <!-- Main content here -->
    </div>
  </div>
</template>

<style>
.dashboard {
  display: flex;
}

.sidebar {
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

.main-content {
  flex-grow: 1;
  padding-left: 220px; /* Adjust this value to match the sidebar width */
}
</style>
