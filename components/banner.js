function createBanner(title, subtitle, imageUrl = '') {
    return `
    <div class="relative bg-indigo-700 text-white py-16 mb-12">
        <div class="container mx-auto px-4 relative z-10">
            <div class="max-w-2xl">
                <h1 class="text-4xl font-bold mb-4">${title}</h1>
                <p class="text-xl">${subtitle}</p>
            </div>
        </div>
        ${imageUrl ? `<img src="${imageUrl}" alt="Banner" class="absolute inset-0 w-full h-full object-cover opacity-20">` : ''}
    </div>`;
}

// Example usage:
// document.getElementById('banner').innerHTML = createBanner(
//     'Quản lý chi tiêu thông minh',
//     'Giải pháp toàn diện giúp bạn kiểm soát tài chính hiệu quả',
//     'images/finance-banner.jpg'
// );