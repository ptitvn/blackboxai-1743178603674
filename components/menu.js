// Main navigation menu
document.getElementById('main-menu').innerHTML = `
<ul class="flex space-x-6">
    <li><a href="#" onclick="loadPage('home')" class="text-gray-600 hover:text-indigo-600">Trang chủ</a></li>
    <li class="dropdown relative">
        <a href="#" class="text-gray-600 hover:text-indigo-600 flex items-center">
            Thống kê <i class="fas fa-chevron-down ml-1 text-xs"></i>
        </a>
        <ul class="dropdown-menu hidden absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
            <li><a href="#" onclick="loadPage('stats')" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Tổng quan</a></li>
            <li><a href="#" onclick="loadPage('monthly-stats')" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Theo tháng</a></li>
            <li><a href="#" onclick="loadPage('category-stats')" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Theo danh mục</a></li>
        </ul>
    </li>
    <li><a href="#" onclick="loadPage('transactions')" class="text-gray-600 hover:text-indigo-600">Giao dịch</a></li>
    <li><a href="#" onclick="loadPage('budget')" class="text-gray-600 hover:text-indigo-600">Ngân sách</a></li>
</ul>`;

// Mobile navigation menu
document.getElementById('mobile-menu').innerHTML = `
<ul class="space-y-2">
    <li><a href="#" onclick="loadPage('home')" class="block py-2 text-gray-700 hover:text-indigo-600">Trang chủ</a></li>
    <li>
        <a href="#" class="block py-2 text-gray-700 hover:text-indigo-600 flex justify-between items-center" onclick="toggleMobileSubmenu(this)">
            Thống kê <i class="fas fa-chevron-down text-xs"></i>
        </a>
        <ul class="hidden pl-4 mt-2 space-y-2">
            <li><a href="#" onclick="loadPage('stats')" class="block py-2 text-gray-700 hover:text-indigo-600">Tổng quan</a></li>
            <li><a href="#" onclick="loadPage('monthly-stats')" class="block py-2 text-gray-700 hover:text-indigo-600">Theo tháng</a></li>
            <li><a href="#" onclick="loadPage('category-stats')" class="block py-2 text-gray-700 hover:text-indigo-600">Theo danh mục</a></li>
        </ul>
    </li>
    <li><a href="#" onclick="loadPage('transactions')" class="block py-2 text-gray-700 hover:text-indigo-600">Giao dịch</a></li>
    <li><a href="#" onclick="loadPage('budget')" class="block py-2 text-gray-700 hover:text-indigo-600">Ngân sách</a></li>
</ul>`;

// Function to toggle mobile submenus
function toggleMobileSubmenu(element) {
    const submenu = element.nextElementSibling;
    submenu.classList.toggle('hidden');
    const icon = element.querySelector('i');
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
}

// Initialize dropdown menus
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
        dropdown.querySelector('.dropdown-menu').classList.remove('hidden');
    });
    dropdown.addEventListener('mouseleave', () => {
        dropdown.querySelector('.dropdown-menu').classList.add('hidden');
    });
});