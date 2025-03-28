// Global variables
let currentUser = null;
const users = JSON.parse(localStorage.getItem('users')) || [];

// Page routing
function loadPage(page) {
    const mainContent = document.getElementById('main-content');
    
    switch(page) {
        case 'home':
            mainContent.innerHTML = homePage();
            break;
        case 'register':
            mainContent.innerHTML = registerPage();
            break;
        case 'login':
            mainContent.innerHTML = loginPage();
            break;
        case 'stats':
            mainContent.innerHTML = statsPage();
            break;
        case 'monthly-stats':
            mainContent.innerHTML = monthlyStatsPage();
            break;
        default:
            mainContent.innerHTML = homePage();
    }
}

// Page templates
function homePage() {
    return `
    <section class="py-12">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-gray-800 mb-4">Quản lý chi tiêu cá nhân</h1>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">Giải pháp toàn diện giúp bạn kiểm soát tài chính hiệu quả</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="text-indigo-600 mb-4">
                        <i class="fas fa-chart-pie text-4xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Thống kê chi tiêu</h3>
                    <p class="text-gray-600">Theo dõi và phân tích chi tiêu theo tháng, danh mục</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="text-green-500 mb-4">
                        <i class="fas fa-wallet text-4xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Quản lý ngân sách</h3>
                    <p class="text-gray-600">Đặt giới hạn chi tiêu và nhận cảnh báo khi vượt ngân sách</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="text-blue-500 mb-4">
                        <i class="fas fa-exchange-alt text-4xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Giao dịch</h3>
                    <p class="text-gray-600">Ghi chép và phân loại các khoản thu chi hàng ngày</p>
                </div>
            </div>
        </div>
    </section>`;
}

function registerPage() {
    return `
    <section class="py-12">
        <div class="container mx-auto px-4 max-w-md">
            <div class="bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-2xl font-bold text-center mb-6">Đăng ký tài khoản</h2>
                <form id="register-form" onsubmit="handleRegister(event)">
                    <div class="form-group">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" id="email" class="form-input" required>
                        <div id="email-error" class="error-message"></div>
                    </div>
                    <div class="form-group">
                        <label for="password" class="form-label">Mật khẩu</label>
                        <input type="password" id="password" class="form-input" required minlength="6">
                        <div id="password-error" class="error-message"></div>
                    </div>
                    <div class="form-group">
                        <label for="confirm-password" class="form-label">Xác nhận mật khẩu</label>
                        <input type="password" id="confirm-password" class="form-input" required>
                        <div id="confirm-password-error" class="error-message"></div>
                    </div>
                    <button type="submit" class="btn btn-primary w-full mt-4">Đăng ký</button>
                </form>
                <div class="text-center mt-4">
                    <p class="text-gray-600">Đã có tài khoản? <a href="#" onclick="loadPage('login')" class="text-indigo-600 hover:underline">Đăng nhập</a></p>
                </div>
            </div>
        </div>
    </section>`;
}

function loginPage() {
    return `
    <section class="py-12">
        <div class="container mx-auto px-4 max-w-md">
            <div class="bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-2xl font-bold text-center mb-6">Đăng nhập</h2>
                <form id="login-form" onsubmit="handleLogin(event)">
                    <div class="form-group">
                        <label for="login-email" class="form-label">Email</label>
                        <input type="email" id="login-email" class="form-input" required>
                    </div>
                    <div class="form-group">
                        <label for="login-password" class="form-label">Mật khẩu</label>
                        <input type="password" id="login-password" class="form-input" required>
                        <div id="login-error" class="error-message"></div>
                    </div>
                    <button type="submit" class="btn btn-primary w-full mt-4">Đăng nhập</button>
                </form>
                <div class="text-center mt-4">
                    <p class="text-gray-600">Chưa có tài khoản? <a href="#" onclick="loadPage('register')" class="text-indigo-600 hover:underline">Đăng ký</a></p>
                </div>
            </div>
        </div>
    </section>`;
}

function statsPage() {
    return `
    <section class="py-8">
        <div class="container mx-auto px-4">
            <h2 class="text-2xl font-bold mb-6">Thống kê chi tiêu</h2>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="mb-6">
                    <h3 class="text-lg font-semibold mb-2">Tổng quan</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="bg-gray-50 p-4 rounded-md">
                            <p class="text-gray-500">Tổng chi tiêu</p>
                            <p class="text-2xl font-bold">5,000,000 đ</p>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-md">
                            <p class="text-gray-500">Ngân sách</p>
                            <p class="text-2xl font-bold">7,000,000 đ</p>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-md">
                            <p class="text-gray-500">Tiết kiệm</p>
                            <p class="text-2xl font-bold">2,000,000 đ</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-2">Theo danh mục</h3>
                    <div class="h-64 bg-gray-50 rounded-md flex items-center justify-center">
                        <p class="text-gray-400">Biểu đồ sẽ hiển thị ở đây</p>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
}

function monthlyStatsPage() {
    return `
    <section class="py-8">
        <div class="container mx-auto px-4">
            <h2 class="text-2xl font-bold mb-6">Thống kê theo tháng</h2>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="mb-6">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-semibold">Chi tiết các tháng</h3>
                        <div>
                            <select class="form-input">
                                <option>Tất cả</option>
                                <option>Đạt</option>
                                <option>Không đạt</option>
                            </select>
                        </div>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="table w-full">
                            <thead>
                                <tr>
                                    <th>Tháng</th>
                                    <th>Tổng chi</th>
                                    <th>Ngân sách</th>
                                    <th>Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tháng 1/2023</td>
                                    <td>5,000,000 đ</td>
                                    <td>6,000,000 đ</td>
                                    <td><span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Đạt</span></td>
                                </tr>
                                <tr>
                                    <td>Tháng 2/2023</td>
                                    <td>7,500,000 đ</td>
                                    <td>6,000,000 đ</td>
                                    <td><span class="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">Không đạt</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
}

// Event handlers
function handleRegister(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    // Reset error messages
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    document.getElementById('confirm-password-error').textContent = '';
    
    // Validate email
    if (!email) {
        document.getElementById('email-error').textContent = 'Email không được để trống';
        return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('email-error').textContent = 'Email không đúng định dạng';
        return;
    }
    
    // Validate password
    if (!password) {
        document.getElementById('password-error').textContent = 'Mật khẩu không được để trống';
        return;
    }
    
    if (password.length < 6) {
        document.getElementById('password-error').textContent = 'Mật khẩu phải có ít nhất 6 ký tự';
        return;
    }
    
    if (!confirmPassword) {
        document.getElementById('confirm-password-error').textContent = 'Xác nhận mật khẩu không được để trống';
        return;
    }
    
    if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = 'Mật khẩu xác nhận không khớp';
        return;
    }
    
    // Check if user already exists
    if (users.some(user => user.email === email)) {
        document.getElementById('email-error').textContent = 'Email đã được sử dụng';
        return;
    }
    
    // Register new user
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Đăng ký thành công! Bạn sẽ được chuyển đến trang đăng nhập.');
    loadPage('login');
}

function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    const user = users.find(user => user.email === email && user.password === password);
    
    if (!user) {
        document.getElementById('login-error').textContent = 'Email hoặc mật khẩu không đúng';
        return;
    }
    
    currentUser = user;
    updateAuthUI();
    loadPage('home');
}

function handleLogout() {
    if (confirm('Bạn có chắc chắn muốn đăng xuất?')) {
        currentUser = null;
        updateAuthUI();
        loadPage('login');
    }
}

function updateAuthUI() {
    const authButtons = document.getElementById('auth-buttons');
    
    if (currentUser) {
        authButtons.innerHTML = `
            <span class="text-gray-600">Xin chào, ${currentUser.email}</span>
            <button onclick="handleLogout()" class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Đăng xuất</button>
        `;
    } else {
        authButtons.innerHTML = `
            <a href="#" onclick="loadPage('login')" class="text-gray-600 hover:text-indigo-600">Đăng nhập</a>
            <a href="#" onclick="loadPage('register')" class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Đăng ký</a>
        `;
    }
}

// Transaction handling
function checkBudgetWarning() {
    if (!currentUser) return;
    
    // In a real app, these would come from database/API
    const currentSpending = 7500000; // Example value
    const budgetLimit = 6000000; // Example value
    
    const warningContainer = document.getElementById('warning-container');
    if (warningContainer) {
        warningContainer.innerHTML = showTransactionWarning(currentSpending, budgetLimit);
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    updateAuthUI();
    loadPage('home');
    checkBudgetWarning();
    
    // Check for warnings on page changes
    document.addEventListener('pageChanged', checkBudgetWarning);
});
