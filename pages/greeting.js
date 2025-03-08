import loginButton from '../components/loginButton';
// import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const showGreeting = () => {
  // clearDom();
  let domString = '';

  domString += `
  <div>
    <h1>Welcome to Vocab-YOU-lary!</h1>
  </div>
  <div id="login-form"></div>
  `;

  renderToDOM('#app', domString);
  loginButton();
};

export default showGreeting;
