const divisionContent = {
  petroleum: {
    slides: [
      ['https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=80', 'Refined petroleum supply'],
      ['https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1400&q=80', 'Industrial energy infrastructure'],
      ['https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&w=1400&q=80', 'Bulk product operations']
    ],
    title: 'Operational detail matters in energy supply.',
    copy: 'Our petroleum desk supports commercial buyers with product matching, quotation preparation, delivery coordination, and recurring supply planning. We help convert a fuel requirement into a documented, practical supply brief.',
    points: ['Product specifications and grade confirmation', 'Volume, destination, and delivery-window planning', 'Commercial documentation and quotation support', 'Supplier coordination for recurring requirements'],
    standards: 'Requirements are reviewed against the buyer brief, applicable local regulations, supplier documentation, and safe handling expectations before delivery coordination.'
  },
  logistics: {
    slides: [
      ['https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80', 'Fleet and freight operations'],
      ['https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1400&q=80', 'Route coordination'],
      ['https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1400&q=80', 'Supply chain visibility']
    ],
    title: 'Movement planned around your commercial reality.',
    copy: 'Alba coordinates the practical details behind reliable movement: collection, route planning, delivery windows, handover communication, and status follow-up. The result is a clearer operating picture for buyers and suppliers.',
    points: ['Origin, destination, and route planning', 'Cargo profile, volume, and handling review', 'Delivery milestones and exception communication', 'Transport partner and dispatch coordination'],
    standards: 'Each movement is scoped around agreed cargo information, timing, documentation, and handling requirements, with clear responsibility at every handover.'
  },
  wholesale: {
    slides: [
      ['https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=80', 'Commercial inventory'],
      ['https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1400&q=80', 'Wholesale distribution'],
      ['https://images.unsplash.com/photo-1601598851547-4302969d7b2b?auto=format&fit=crop&w=1400&q=80', 'Supplier relationships']
    ],
    title: 'A stronger supply position starts with a clear brief.',
    copy: 'We help commercial buyers source petroleum products, essential goods, and general merchandise through a disciplined process of requirement definition, supplier coordination, quotation comparison, and delivery planning.',
    points: ['Product matching and commercial sourcing', 'Bulk, recurring, and project-based orders', 'Supplier communication and quotation support', 'Inventory and replenishment planning'],
    standards: 'Product and supplier information is checked against the commercial brief, documentation requirements, delivery conditions, and the buyer’s internal approval process.'
  },
  support: {
    slides: [
      ['https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80', 'Executive procurement'],
      ['https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80', 'Specialist consultation'],
      ['https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80', 'Corporate environments']
    ],
    title: 'Flexible support for requirements without a standard category.',
    copy: 'Some requirements need more than a catalogue search. Our team helps clarify the brief, identify practical options, coordinate specialist sourcing, and keep stakeholders informed through delivery.',
    points: ['One-off and recurring procurement briefs', 'General trading and specialist product sourcing', 'Supplier comparison and availability checks', 'Executive, hospitality, and operational support'],
    standards: 'Every brief is handled with defined scope, transparent communication, documented options, and agreed delivery expectations.'
  }
};

const form = document.querySelector('.inquiry-card form');
const key = form?.name.replace('-inquiry', '').replace('specialized', 'support');
const data = divisionContent[key];
if (data) {
  const hero = document.querySelector('.division-hero .container');
  const carousel = document.createElement('div');
  carousel.className = 'division-carousel';
  carousel.setAttribute('aria-label', 'Division photography carousel');
  carousel.innerHTML = data.slides.map((slide, index) => `<div class="carousel-slide${index === 0 ? ' is-active' : ''}" style="background-image:url('${slide[0]}')"><span>${slide[1]}</span></div>`).join('') + '<div class="carousel-controls">' + data.slides.map((_, index) => `<button class="carousel-dot${index === 0 ? ' is-active' : ''}" type="button" aria-label="Show slide ${index + 1}"></button>`).join('') + '</div>';
  hero.appendChild(carousel);

  const copy = document.createElement('section');
  copy.className = 'content-block';
  copy.innerHTML = `<h3>${data.title}</h3><p>${data.copy}</p><ul>${data.points.map(point => `<li>${point}</li>`).join('')}</ul><p><strong>Compliance and operating note:</strong> ${data.standards}</p>`;
  document.querySelector('.division-copy').appendChild(copy);

  const slides = [...carousel.querySelectorAll('.carousel-slide')];
  const dots = [...carousel.querySelectorAll('.carousel-dot')];
  let active = 0;
  const show = (index) => { active = index; slides.forEach((slide, i) => slide.classList.toggle('is-active', i === active)); dots.forEach((dot, i) => dot.classList.toggle('is-active', i === active)); };
  dots.forEach((dot, index) => dot.addEventListener('click', () => show(index)));
  setInterval(() => show((active + 1) % slides.length), 5500);
}

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    navigation.classList.toggle('is-open', !open);
  });
}
