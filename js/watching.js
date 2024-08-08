const originalTitle = document.title; // 保存原始标题

document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // 用户在查看其他标签页或最小化窗口时
        document.title = 'Σ(っ °Д °;)っ别走哇，再看看嘛'; // 在其他页面时的标题
    } else {
        // 用户回到当前标签页时
        document.title = 'ヾ(≧▽≦*)o欢迎回来！'; // 设置为欢迎回来标题
        setTimeout(function () {
            document.title = originalTitle; // 恢复回原标题
        }, 3000); // 3秒后恢复原标题
    }
});