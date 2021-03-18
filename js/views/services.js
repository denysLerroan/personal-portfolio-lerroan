export default () => {
  const container = document.createElement('div');

  const template = `  <div class="main-container">
  <div class="main">
    <header>
      <div class="overlay">
        <div class="inner">
          <h2>Services<br />page</h2>
          <p>
            Understanding the need and offering technological, creative
            and effective solutions for responsive, optimized & adaptables
            <span>websites</span>, <span>e-commerce's</span> and
            <span>dashboards</span>.
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
