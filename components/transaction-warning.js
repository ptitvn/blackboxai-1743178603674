function showTransactionWarning(currentAmount, budgetLimit) {
    if (currentAmount > budgetLimit) {
        return `
        <div class="alert alert-warning mb-6">
            <div class="flex items-start">
                <div class="flex-shrink-0">
                    <i class="fas fa-exclamation-triangle text-yellow-500"></i>
                </div>
                <div class="ml-3">
                    <h3 class="text-sm font-medium">Cảnh báo chi tiêu</h3>
                    <div class="mt-2 text-sm">
                        <p>Bạn đã vượt quá ngân sách chi tiêu! 
                        Số tiền hiện tại: ${currentAmount.toLocaleString()} đ 
                        (Ngân sách: ${budgetLimit.toLocaleString()} đ)</p>
                    </div>
                </div>
            </div>
        </div>`;
    }
    return '';
}

// Example usage:
// document.getElementById('warning-container').innerHTML = showTransactionWarning(7500000, 6000000);