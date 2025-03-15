import loginButton from '../components/loginButton';
// import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const showGreeting = () => {
  // clearDom();
  let domString = '';

  domString += `
  <div id="landing">
    <h1>Vocab-</h1>
    <h1>YOU</h1>
    <h1>-lary!</h1>
  </div>
  <br>
  <div id="login-form"></div>
  `;

  renderToDOM('#app', domString);
  loginButton();
};

export default showGreeting;
