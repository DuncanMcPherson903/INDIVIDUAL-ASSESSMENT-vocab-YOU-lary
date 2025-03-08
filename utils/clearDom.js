const clearDom = () => {
  document.querySelector('#greeting').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#cards').innerHTML = '';
  document.querySelector('#filters').innerHTML = '';
};

export default clearDom;
