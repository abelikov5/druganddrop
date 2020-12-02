let arr_balls = document.querySelectorAll('.balls');

function OnMouseDwn(e, element) {
    element.style.position = 'absolute';
    element.style.zIndex = 10;
    document.body.append(element);

    moveAt(e.pageX, e.pageY);
  
    // передвинуть мяч под координаты курсора
    // и сдвинуть на половину ширины/высоты для центрирования
    function moveAt(pageX, pageY) {
      element.style.left = pageX - element.offsetWidth / 2 + 'px';
      element.style.top = pageY - element.offsetHeight / 2 + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
      if (event.pageY < 10 || event.pageX < 10 || 
        event.pageX > document.documentElement.clientWidth -  20 || 
        event.pageY > document.documentElement.clientHeight - 20 ) {
            element.style.zIndex = 1;
            document.removeEventListener('mousemove', onMouseMove);
            element.onmouseup = null;
      }
    }
    // (3) перемещать по экрану
    document.addEventListener('mousemove', onMouseMove);
    // (4) положить мяч, удалить более ненужные обработчики событий
    element.onmouseup = function() {
        checkPos(element);
        element.style.zIndex = 1;
        document.removeEventListener('mousemove', onMouseMove);
        element.onmouseup = null;
    };

}

function checkPos(el) {
  // Check red sq && element cords
  el_cor = el.getBoundingClientRect()
  let cor_rd = {
    left:   sq_rd.getBoundingClientRect().left,
    right:  sq_rd.getBoundingClientRect().right,
    top:    sq_rd.getBoundingClientRect().top,
    bottom: sq_rd.getBoundingClientRect().bottom,
  }
  if (el_cor.left > cor_rd.left   &&
  el_cor.left < cor_rd.right  &&
  el_cor.top  > cor_rd.top    &&
  el_cor.top  < cor_rd.bottom) {
    el.hidden = true;
    if (el.dataset.color == 'red') {
      console.log('You right with the collor: red && red');
    } else {
      console.log("Miss collor! red vs ", el.dataset.color);
    }
  }
// blue
  let cor_bl = {
    left:   sq_bl.getBoundingClientRect().left,
    right:  sq_bl.getBoundingClientRect().right,
    top:    sq_bl.getBoundingClientRect().top,
    bottom: sq_bl.getBoundingClientRect().bottom,
  }
  if (el_cor.left > cor_bl.left   &&
      el_cor.left < cor_bl.right  &&
      el_cor.top  > cor_bl.top    &&
      el_cor.top  < cor_bl.bottom) {
    el.hidden = true;
    if (el.dataset.color == 'blue') {
      console.log('You right with the collor: blue && blue');
    } else {
      console.log("Miss collor! blue vs ", el.dataset.color);
    }
  }
  // yellow
  let cor_yl = {
    left:   sq_yl.getBoundingClientRect().left,
    right:  sq_yl.getBoundingClientRect().right,
    top:    sq_yl.getBoundingClientRect().top,
    bottom: sq_yl.getBoundingClientRect().bottom,
  }
  if (el_cor.left > cor_yl.left   &&
      el_cor.left < cor_yl.right  &&
      el_cor.top  > cor_yl.top    &&
      el_cor.top  < cor_yl.bottom) {
    el.hidden = true;
    if (el.dataset.color == 'yellow') {
      console.log('You right with the collor: yellow && yellow');
    } else {
      console.log("Miss collor! yellow vs ", el.dataset.color);
    }
  }
    // green
    let cor_gr = {
      left:   sq_gr.getBoundingClientRect().left,
      right:  sq_gr.getBoundingClientRect().right,
      top:    sq_gr.getBoundingClientRect().top,
      bottom: sq_gr.getBoundingClientRect().bottom,
    }
    if (el_cor.left > cor_gr.left   &&
        el_cor.left < cor_gr.right  &&
        el_cor.top  > cor_gr.top    &&
        el_cor.top  < cor_gr.bottom) {
      el.hidden = true;
      if (el.dataset.color == 'green') {
        console.log('You right with the collor: green && green');
      } else {
        console.log("Miss collor! green vs ", el.dataset.color);
      }
    }
  
}

arr_balls.forEach(element => {
    element.ondragstart = function() {return false;};
    element.onmousedown = function(e) {
        OnMouseDwn (e, element);
    }
});

