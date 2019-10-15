const elmFactory = (type, attributes, ...children) => {
	const elm = document.createElement(type);

	for (key in attributes) {
		elm.setAttribute(key, attributes[key]);
	}

	children.forEach((child) => {
		typeof child === 'string'
			? elm.appendChild(document.createTextNode(child))
			: elm.appendChild(child);
	});

	return elm;
};

const scrollBackBtn = elmFactory(
	'button',
	{ id: 'scroll-back-btn', onclick: 'scrollingBackTop()' },
	'^',
);

window.onscroll = function() {
	scrollBack();
};

function scrollBack() {
	// documentElement returns the Element that is the root element of the document, in our case: <html>
	document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
		? (scrollBackBtn.style.display = 'block')
		: (scrollBackBtn.style.display = 'none');
}

function scrollingBackTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

const navBar = elmFactory(
	'nav',
	{ class: 'navbar' },
	elmFactory('img', {
		src: './images/js_logo.svg',
		class: 'navbar-logo',
		alt: 'javascript logo',
	}),
	elmFactory(
		'ul',
		{ class: 'nav-links' },
		elmFactory(
			'li',
			{ class: 'nav-link' },
			elmFactory('a', { href: '#' }, 'Home'),
		),
		elmFactory(
			'li',
			{ class: 'nav-link' },
			elmFactory('a', { href: '#team-section' }, 'Team'),
		),
		elmFactory(
			'li',
			{ class: 'nav-link' },
			elmFactory('a', { href: '#about-section' }, 'About'),
		),
		elmFactory(
			'li',
			{ class: 'nav-link' },
			elmFactory('a', { href: '#footer-section' }, 'Contact'),
		),
	),
);

const header = elmFactory(
	'header',
	{ class: 'header-container' },
	elmFactory('img', { src: './images/horse_img.svg', class: 'header-img' }),
	elmFactory('h1', { class: 'header-title' }, 'ONLY JS RULE'),
);

const teamGrid = elmFactory(
	'section',
	{ class: 'team-container', id: 'team-section' },
	elmFactory('img', { class: 'team-img', src: './images/finish_line.svg' }),
	elmFactory('img', { class: 'team-img', src: './images/react.svg' }),
	elmFactory('img', { class: 'team-img', src: './images/taking_selfie.svg' }),
	elmFactory('p', { class: 'team-desc' }, 'Alain'),
	elmFactory('p', { class: 'team-desc' }, 'Forever'),
	elmFactory('p', { class: 'team-desc' }, 'Alone'),
);

const article = elmFactory(
	'article',
	{ class: 'article-container', id: 'about-section' },
	elmFactory('h1', { class: 'article-title' }, 'WHY ?'),
	elmFactory(
		'p',
		{ class: 'article-para' },
		"So I am learning JavaScript and I think It's a good idea to build a landing page using JavaScript only, styling with CSS of course.. I'm not thaat crazy.",
	),
	elmFactory('h1', { class: 'article-title' }, 'NEXT ?'),
	elmFactory(
		'p',
		{ class: 'article-para' },
		"I don't know.. Make it more JavaScript ? Adding hamburger menu animation and a scroll back to top button. The usual suspects I guess. And make it responsive..",
	),
);

const brandSection = elmFactory(
	'section',
	{ class: 'brand-container', id: 'brand-section' },
	elmFactory('h2', { class: 'brand-title' }, 'Currently not working  with:'),
	elmFactory(
		'div',
		{ class: 'sliding' },
		elmFactory('img', {
			class: 'brand-logo',
			src: './images/airbnb-brands.svg',
		}),
		elmFactory('img', {
			class: 'brand-logo',
			src: './images/amazon-brands.svg',
		}),
		elmFactory('img', {
			class: 'brand-logo',
			src: './images/apple-brands.svg',
		}),
		elmFactory('img', { class: 'brand-logo', src: './images/ebay-brands.svg' }),
		elmFactory('img', {
			class: 'brand-logo',
			src: './images/google-brands.svg',
		}),
		elmFactory('img', {
			class: 'brand-logo',
			src: './images/instagram-brands.svg',
		}),
		elmFactory('img', { class: 'brand-logo', src: './images/lyft-brands.svg' }),
		elmFactory('img', {
			class: 'brand-logo',
			src: './images/microsoft-brands.svg',
		}),
		elmFactory('img', {
			class: 'brand-logo',
			src: './images/skype-brands.svg',
		}),
		elmFactory('img', {
			class: 'brand-logo',
			src: './images/twitch-brands.svg',
		}),
		elmFactory('img', {
			class: 'brand-logo',
			src: './images/twitter-brands.svg',
		}),
		elmFactory('img', {
			class: 'brand-logo',
			src: './images/youtube-brands.svg',
		}),
	),
);

const footer = elmFactory(
	'footer',
	{ class: 'footer-container', id: 'footer-section' },
	elmFactory(
		'a',
		{
			class: 'footer-text',
			href: 'https://twitter.com/alaincodes',
			target: '_blank',
			rel: 'noopener noreferrer',
		},
		'Twitter: @alaincodes',
	),
	elmFactory(
		'a',
		{
			class: 'footer-text',
			href: 'https://fontawesome.com/',
			target: '_blank',
			rel: 'noopener noreferrer',
		},
		'Logo: @fontawesome',
	),
	elmFactory(
		'a',
		{
			class: 'footer-text',
			href: 'https://undraw.co/',
			target: '_blank',
			rel: 'noopener noreferrer',
		},
		'illustration: @undraw_co',
	),
);

document.body.appendChild(scrollBackBtn);
document.body.appendChild(navBar);
document.body.appendChild(header);
document.body.appendChild(teamGrid);
document.body.appendChild(article);
document.body.appendChild(brandSection);
document.body.appendChild(footer);
