function renderHome() {
  const container = document.getElementById('content');
  container.classList.remove('about', 'contact');
  container.classList.add('home');
  container.innerHTML = `<h2 class="home">Explore the World</h2>
      <p>
        Embark on a global adventure with us! Explore diverse cultures and
        breathtaking landscapes. Let's make your travel dreams a reality.<br />
        <button>Book Now</button>
      </p>`;
}

function renderAbout() {
  const container = document.getElementById('content');
  container.classList.remove('home', 'contact');
  container.classList.add('about');
  container.innerHTML = `<h2>About Us</h2>
      <p class='aboutText'>
        At EasyTravel, our team is dedicated to providing you with professional and top-quality service every step of the way. From expert travel advisors to friendly customer support, each member of our team is committed to ensuring your travel experience exceeds expectations. Trust us to handle every detail of your journey with care and expertise.<br />
      </p>
      <div class='teamMembers'>
      <div class='memberCard'><img src='./profile1.jpg'>
      <div class='memberInfo'>
      <h3 class='memberName'>Lisa Simpson</h3>
      <p class='memberDescription'>Expert in Travel Planning</p></div>
      </div>
      <div class='memberCard'><img src='./profile2.jpg'>
      <div class='memberInfo'>
      <h3 class='memberName'>Bart Simpson</h3>
      <p class='memberDescription'>Expert in Travel Planning</p></div>
      </div>  
      </div>`;
}

function renderContact() {
  const container = document.getElementById('content');
  container.classList.remove('home', 'about');
  container.classList.add('contact');
  container.innerHTML = `
  <div class="contact">
  <div class="contactInfo">
    <h2 class="contactTitle">Contact Us!</h2>
    <h3 class="contactDescription">Plan your next trip with us!</h3>
  </div>
  <div class="contactForm">
  <form>
    <label for="name">Name</label>
    <input type="text" id="name" placeholder="Enter your name">
    <label for="email">Email</label>
    <input type="text" id="email" placeholder="Enter your email">
    <label for="message">Message</label>
    <input type="text" id="message" placeholder="Enter your message">
    <input type="submit" class="submitForm">
    </form>
  </div>
</div>`;
}

renderHome();
