const divisionContent = {
  petroleum: {
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1600&q=85',
    label: 'Refined petroleum supply',
    title: 'Operational detail matters in energy supply.',
    copy: 'Our petroleum desk supports commercial buyers with product matching, quotation preparation, delivery coordination, and recurring supply planning. We help convert a fuel requirement into a documented, practical supply brief.',
    points: ['Product specifications and grade confirmation', 'Volume, destination, and delivery-window planning', 'Commercial documentation and quotation support', 'Supplier coordination for recurring requirements'],
    standards: 'Requirements are reviewed against the buyer brief, applicable local regulations, supplier documentation, and safe handling expectations before delivery coordination.'
  },
  logistics: {
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=85',
    label: 'Fleet and freight operations',
    title: 'Movement planned around your commercial reality.',
    copy: 'Alba coordinates the practical details behind reliable movement: collection, route planning, delivery windows, handover communication, and status follow-up. The result is a clearer operating picture for buyers and suppliers.',
    points: ['Origin, destination, and route planning', 'Cargo profile, volume, and handling review', 'Delivery milestones and exception communication', 'Transport partner and dispatch coordination'],
    standards: 'Each movement is scoped around agreed cargo information, timing, documentation, and handling requirements, with clear responsibility at every handover.'
  },
  wholesale: {
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=85',
    label: 'Commercial inventory',
    title: 'A stronger supply position starts with a clear brief.',
    copy: 'We help commercial buyers source petroleum products, essential goods, and general merchandise through a disciplined process of requirement definition, supplier coordination, quotation comparison, and delivery planning.',
    points: ['Product matching and commercial sourcing', 'Bulk, recurring, and project-based orders', 'Supplier communication and quotation support', 'Inventory and replenishment planning'],
    standards: 'Product and supplier information is checked against the commercial brief, documentation requirements, delivery conditions, and the buyer’s internal approval process.'
  },
  support: {
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85',
    label: 'Executive procurement',
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
  const banner = document.querySelector('.division-carousel');
  banner.classList.add('division-banner');
  banner.setAttribute('role', 'img');
  banner.setAttribute('aria-label', data.label);
  banner.style.backgroundImage = `linear-gradient(125deg, rgba(8,15,24,.86), rgba(83,65,39,.25)), url('${data.image}')`;
  banner.innerHTML = `<span>${data.label}</span>`;

  const copy = document.createElement('section');
  copy.className = 'content-block';
  copy.innerHTML = `<h3>${data.title}</h3><p>${data.copy}</p><ul>${data.points.map(point => `<li>${point}</li>`).join('')}</ul><p><strong>Compliance and operating note:</strong> ${data.standards}</p>`;
  document.querySelector('.division-copy').appendChild(copy);
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
