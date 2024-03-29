function renderHome() {
  const container = document.getElementById('content');
  container.classList.remove('about', 'contact', 'recommendations');
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
  container.classList.remove('home', 'contact', 'recommendations');
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
  container.classList.remove('home', 'about', 'recommendations');
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

function getRecommendations() {
  const query = document.getElementById('input').value.toLowerCase();
  if (
    query.includes('beach') ||
    query.includes('temple') ||
    query.includes('citi')
  ) {
    fetch('travel_recommendation_api.json')
      .then((response) => response.json())
      .then((data) => {
        if (query.includes('citi')) {
          const information = {
            name: 'Cities',
            cities: [
              {
                name: 'Rio de Janeiro, Brazil',

                imageUrl: './rio.jpeg',

                description:
                  'A lively city known for its stunning beaches, vibrant carnival celebrations, and iconic landmarks.',
              },
              {
                name: 'Sydney, Australia',

                imageUrl: './sydney.jpg',

                description:
                  'A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge.',
              },
            ],
          };
          return renderInformation(information);
        } else if (query.includes('temple')) {
          const information = {
            name: 'Temples',
            cities: data['temples'],
          };
          renderInformation(information);
        } else {
          const information = {
            name: 'Beaches',
            cities: data['beaches'],
          };
          renderInformation(information);
        }
      });
  } else {
    fetch('travel_recommendation_api.json')
      .then((response) => response.json())
      .then((data) => {
        for (let i in data) {
          for (let j in data[i]) {
            if (query === data[i][j].name.toLowerCase()) {
              const information = {
                name: data[i][j].name,
                cities: data[i][j].cities,
              };
              renderInformation(information); //Aquí consigo la información del API
            }
          }
        }
      });
  }
}

function renderInformation(info) {
  const container = document.getElementById('content');
  container.classList.remove('home', 'contact', 'about');
  container.classList.add('recommendations');
  container.innerHTML = `<h3>Our Recommendations for ${info.name}</h3>
  <div id="infoCards"></div>`;
  renderCard(info);
}

function renderCard(info) {
  const container = document.getElementById('infoCards');
  for (let i = 0; i < info.cities.length; i++) {
    const cityName = info.cities[i].name;
    const image = info.cities[i].imageUrl;
    const description = info.cities[i].description;
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<img src=${image} class="cardImage"> <h4>${cityName}</h4> <h5>${description}</h5>`;
    container.appendChild(card);
  }
}

function resetForm() {
  const query = document.getElementById('input');
  query.value = '';
}

renderHome();
