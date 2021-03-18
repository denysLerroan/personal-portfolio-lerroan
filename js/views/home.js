export default () => {
  const container = document.createElement('div');

  const template = `  <div class="main-container">
  <div class="main">
    <header>
      <div class="overlay">
        <div class="inner">
          <h2>Front End Developer<br />UI Designer</h2>
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
  
  <section class="recent-works">
  <div class="works">
    <h2>My recent works</h2>
    <section class="work">
      <div class="work__info become-a-vegan">
        <h3>Become a Vegan</h3>
        <p>
          Anyone who adheres to veganism knows that there is a lot involved
          in this cause. This is where love and respect for the lives of
          animals speak louder!
        </p>
        <a href="#" class="project-link">See this project</a>
      </div>
      <div class="work__image">
        <img src="assets/imgs/become-vegan.jpg" alt="" />
      </div>
    </section>
    <section class="work made-marketing">
      <div class="work__image made-marketing--order">
        <img src="assets/imgs/made-marketing.jpg" alt="" />
      </div>
      <div class="work__info made-marketing--before">
        <h3>Made - Social Media</h3>
        <p>
          With the advancement of the digital age, the meaning of social
          media has gained a new ... Reduce text in the arts or in the
          description of a post to be read with ...
        </p>
        <a href="#" class="project-link">See this project</a>
        <a href="#" class="call-portfolio">See more work</a>
      </div>
    </section>
    <a href="#" class="call-portfolio call-portfolio--mobile"
      >See more work</a
    >
  </div>
  </section>
  
  <div class="work-flow-bg">
    <section class="work-flow">
      <div class="work-flow-info">
        <h2>With 4 simple steps your idea come true</h2>
        <p>
          Do you need a new design, website or improvements to your current
          project? <br />
          I believe in a structured and well-organized process. And with this we
          can build awesome things together.
        </p>
      </div>
      <div class="work-flow-img">
        <img src="assets/imgs/work-flow.svg" alt="" />
      </div>
    </section>
    
    <section class="services__home">
    <h2>What can I offer to u?</h2>
    <ul class="services__items">
      <ul class="services--item-1">
        <h2>Web development</h2>
        <li>Landing Page</li>
        <li>Websites</li>
        <li>E-commerce</li>
        <li>Blog</li>
        <li>Dashboards</li>
      </ul>
      <ul class="services--item-2">
        <h2>UI/UX Design</h2>
        <li>User Research</li>
        <li>User Interface Design</li>
        <li>Wireframe</li>
        <li>Prototype</li>
      </ul>
      <ul class="services--item-3">
        <h2>Marketing</h2>
        <li>SEO</li>
        <li>Graphic Design</li>
        <li>Analytics</li>
      </ul>
    </ul>
    <a href="#">See more about my services</a>
    </section>
  </div>
  
  <section class="contact-home">
  <div>
    <div class="contact-call">
      <p>
        Do you have an idea to expand your business or do you want to
        improve your brand exposure and reach more customers?
      </p>
      <a href=""> Get in touch!</a>
      <p>We can make it together!</p>
    </div>
  
    <form action="" class="contact-form">
      <label for="">What is your name?</label>
      <input type="text" placeholder="Type your first name" />
      <label for="">What is your Company name?</label>
      <input type="text" placeholder="Type your Company name" />
      <label for="">What is your e-mail?</label>
      <input type="text" placeholder="Type your e-mail" />
  
      <h2>What do you want to get done?</h2>
      <div class="form-options">
        <input
          type="radio"
          id="landing-page"
          value="landing-page"
          name="service"
        />
        <label for="landing-page">Landing Page</label>
      </div>
      <div class="form-options">
        <input type="radio" id="website" value="website" name="service" />
        <label for="website">WebSite</label>
      </div>
      <div class="form-options">
        <input
          type="radio"
          id="e-commerce"
          value="e-commerce"
          name="service"
        />
        <label for="e-commerce">E-commerce</label>
      </div>
      <div class="form-options">
        <input
          type="radio"
          id="ui-design"
          value="ui-design"
          name="service"
        />
        <label for="ui-design">UI Design</label>
      </div>
  
      <h2>Tell me a little about your project</h2>
      <textarea
        placeholder="Type your message"
        rows="4"
        cols="50"
      ></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
  </section>
  `;

  container.innerHTML = template;
  return container;
};
