// Mobile sidebar toggle — shared across every page.
document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const menuBtn = document.getElementById('menuBtn');

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      sidebar.classList.add('open');
      overlay.classList.add('show');
    });
  }
  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }
});
