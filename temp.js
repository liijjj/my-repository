 function checkVisibility() {
    const element = document.getElementById('testElement');
    const rect = element.getBoundingClientRect();
    const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      let newTop = 0;
      let newLeft = 0;
      // 判断顶部是否超出视口
      if (rect.top < 0) {
          newTop = window.pageYOffset - rect.top;
      } 
      // 判断底部是否超出视口
      else if (rect.bottom > windowHeight) {
          newTop = window.pageYOffset + rect.bottom - windowHeight;
      }
      // 判断左侧是否超出视口
      if (rect.left < 0) {
          newLeft = window.pageXOffset - rect.left;
      } 
      // 判断右侧是否超出视口
      else if (rect.right > windowWidth) {
          newLeft = window.pageXOffset + rect.right - windowWidth;
      }
      if (newTop!== 0 || newLeft!== 0) {
          alert(`需要调整元素位置：top = ${newTop}px, left = ${newLeft}px`);
          // 这里可以添加代码来实际调整元素位置
          element.style.top = newTop + 'px';
          element.style.left = newLeft + 'px';
      } else {
          alert('元素已经完全在浏览器屏幕内可视，无需调整位置');
      }
  }
