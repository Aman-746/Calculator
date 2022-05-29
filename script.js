var l = document.querySelector(".top");

const setValue = (value) => {
  l.innerHTML = l.innerHTML.concat(value);
}

const clearData = () => {
  l.innerHTML = ""
}

const delData = () => {
  var len = l.innerHTML.length;
  l.innerHTML = l.innerHTML.substring(0, len - 1);
}

const computeData = () => {
  var st = l.innerHTML;
  var len = st.length;
  var ind = -1;
  var operator = '';
  for (let i = 0; i < len; i++) {
    if (st[i] == '/') {
      let a = Number(st.substring(0, i));
      let b = Number(st.substring(i + 1, len));
      l.innerHTML = a / b;
    }
    else if (st[i] == '*') {
      const a = parseInt(st.substring(0, i));
      const b = parseInt(st.substring(i + 1, len));
      l.innerHTML = a * b;
    }
    else if (st[i] == '+') {
      const a = parseInt(st.substring(0, i));
      const b = parseInt(st.substring(i + 1, len));
      l.innerHTML = a + b;
    }
    else if (st[i] == '-') {
      const a = parseInt(st.substring(0, i));
      const b = parseInt(st.substring(i + 1, len));
      l.innerHTML = a - b;
    }
  }
}
