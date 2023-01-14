const form = document.querySelector('.login-form');

// 给表单添加点击事件
form.addEventListener('click', () => {
  // 将表单向左移动100px
  form.style.transform = 'translateX(-100px)';
});
const button = document.querySelector('input[type="submit"]');

// 给按钮添加点击事件
button.addEventListener('click', () => {
  // 按钮变大，然后恢复原大小
  button.style.transform = 'scale(1.5)';
  setTimeout(() => {
    button.style.transform = 'scale(1)';
  }, 500);
});
