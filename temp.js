 function getLeftPos(ele) {
    const rect = ele.getBoundingClientRect(),windowWidth = window.innerWidth;
      let newLeft = 0;
      if (rect.left < 0) { // 判断左侧是否超出视口
          newLeft = window.pageXOffset - rect.left;
      } else if (rect.right > windowWidth) {// 判断右侧是否超出视口
          newLeft = window.pageXOffset + rect.right - windowWidth;
      }
      if (newLeft!== 0) return newLeft + 'px';
      else return rect.left;
  }
 function getTopPos(ele) {
    const rect = ele.getBoundingClientRect(),windowHeight = window.innerHeight;
      let newTop = 0;
      if (rect.top < 0) {// 判断顶部是否超出视口
          newTop = window.pageYOffset - rect.top;
      } else if (rect.bottom > windowHeight) {// 判断底部是否超出视口
          newTop = window.pageYOffset + rect.bottom - windowHeight;
      }
      if (newTop!== 0) return newTop + 'px';
      else  return rect.top;
  }
 function getPos() {
    const ele = document.getElementById('testElement'),rect = ele.getBoundingClientRect(),windowWidth = window.innerWidth,windowHeight = window.innerHeight;
      let newTop = 0,newLeft = 0;
      if (rect.top < 0) {// 判断顶部是否超出视口
          newTop = window.pageYOffset - rect.top;
      } else if (rect.bottom > windowHeight) {// 判断底部是否超出视口
          newTop = window.pageYOffset + rect.bottom - windowHeight;
      }
      if (rect.left < 0) { // 判断左侧是否超出视口
          newLeft = window.pageXOffset - rect.left;
      } else if (rect.right > windowWidth) {// 判断右侧是否超出视口
          newLeft = window.pageXOffset + rect.right - windowWidth;
      }
      if (newTop!== 0 || newLeft!== 0) {
          //alert(`需要调整元素位置：top = ${newTop}px, left = ${newLeft}px`);
          ele.style.top = newTop + 'px';
          ele.style.left = newLeft + 'px';
      } else {
          //alert('元素已经完全在浏览器屏幕内可视，无需调整位置');
      }
  }

