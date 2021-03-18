export default () => {
  const container = document.createElement('div');

  const template = `  <div class="main-container">
  <div class="main">
    <header>
      <div class="overlay">
        <div class="inner">
          <h2>About<br />me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque fuga nobis animi!</span>.
            <br />
          </p>
        </div>
        <div class="scrolldown">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  </div>
  <div class="shadow one"></div>
  <div class="shadow two"></div>
  </div> 
  
  
  `;

  container.innerHTML = template;
  return container;
};
