import renderToDOM from '../../utils/renderToDOM';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
        <a id="home" class="navbar-brand title" href="#" style="margin-left: 10px">Vocab-YOU-lary</a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="all-vocab">
                All Vocabulary <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="add-vocab-btn">Add Vocabulary</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="add-category-btn">Add Category</a>
            </li>
            <input type="search" id="search-bar" name="q" style="margin-left: 10px" />
            <button id="search-btn">Search</button>
          </ul>
          <span class="navbar-text" style="margin-right: 10px">
            <div id="logout-btn"></div>
          </span>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
