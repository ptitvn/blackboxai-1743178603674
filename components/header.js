document.getElementById('header').innerHTML = `
<header>
  <div class="navbar">
    <a href="/" class="logo">Quản lý chi tiêu</a>
    <nav id="main-menu" class="hidden md:flex space-x-6">
      <!-- Main menu will be loaded from menu.js -->
    </nav>
    <div class="flex items-center space-x-4" id="auth-buttons">
      <a href="#" onclick="loadPage('login')" class="text-gray-600 hover:text-primary">Đăng nhập</a>
      <a href="#" onclick="loadPage('register')" class="btn btn-primary">Đăng ký</a>
    </div>
    <div class="md:hidden">
      <button id="mobile-menu-button" class="text-gray-600 hover:text-primary">
        <i class="fas fa-bars text-xl"></i>
      </button>
    </div>
  </div>
  <!-- Mobile menu -->
  <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
    <div class="container mx-auto px-4 py-2">
      <!-- Mobile menu will be loaded from menu.js -->
    </div>
  </div>
</header>`;

// Add event listener for mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});
