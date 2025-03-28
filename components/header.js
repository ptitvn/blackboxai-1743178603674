document.getElementById('header').innerHTML = `
<header class="bg-white shadow-sm">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="flex items-center space-x-4">
            <a href="/" class="text-2xl font-bold text-indigo-600">Quản lý chi tiêu</a>
            <nav id="main-menu" class="hidden md:block">
                <!-- Main menu will be loaded from menu.js -->
            </nav>
        </div>
        <div class="flex items-center space-x-4" id="auth-buttons">
            <a href="#" onclick="loadPage('login')" class="text-gray-600 hover:text-indigo-600">Đăng nhập</a>
            <a href="#" onclick="loadPage('register')" class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Đăng ký</a>
        </div>
        <div class="md:hidden">
            <button id="mobile-menu-button" class="text-gray-600 hover:text-indigo-600">
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