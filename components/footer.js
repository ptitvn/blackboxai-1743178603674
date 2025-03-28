document.getElementById('footer').innerHTML = `
<footer class="bg-gray-800 text-white py-8 mt-auto">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h3 class="text-xl font-bold mb-4">Về chúng tôi</h3>
                <p class="text-gray-300">Ứng dụng quản lý chi tiêu cá nhân giúp bạn kiểm soát tài chính hiệu quả.</p>
            </div>
            <div>
                <h3 class="text-xl font-bold mb-4">Liên kết nhanh</h3>
                <ul class="space-y-2">
                    <li><a href="#" onclick="loadPage('home')" class="text-gray-300 hover:text-white">Trang chủ</a></li>
                    <li><a href="#" onclick="loadPage('stats')" class="text-gray-300 hover:text-white">Thống kê</a></li>
                    <li><a href="#" onclick="loadPage('login')" class="text-gray-300 hover:text-white">Đăng nhập</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-xl font-bold mb-4">Liên hệ</h3>
                <ul class="space-y-2">
                    <li class="flex items-center space-x-2">
                        <i class="fas fa-envelope"></i>
                        <span>support@qlct.com</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <i class="fas fa-phone"></i>
                        <span>0123 456 789</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>© 2023 Quản lý chi tiêu. All rights reserved.</p>
        </div>
    </div>
</footer>`;