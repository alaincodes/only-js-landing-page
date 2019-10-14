const elmFactory = (type, attributes, ...children) => {
	const elm = document.createElement(type);

	for (key in attributes) {
		elm.setAttribute(key, attributes[key]);
	}

	children.forEach((child) => {
		if (typeof child === 'string') {
			elm.appendChild(document.createTextNode(child));
		} else {
			elm.appendChild(child);
		}
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
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		scrollBackBtn.style.display = 'block';
	} else {
		scrollBackBtn.style.display = 'none';
	}
}

function scrollingBackTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

const navBar = elmFactory(
	'nav',
	{ class: 'navbar' },
	elmFactory(
		'ul',
		{ class: 'nav-links' },
		elmFactory('li', { class: 'nav-link' }, 'Menu'),
		elmFactory('li', { class: 'nav-link' }, 'Team'),
		elmFactory('li', { class: 'nav-link' }, 'Contact'),
	),
);

const header = elmFactory(
	'header',
	{ class: 'header-container' },
	elmFactory('img', { src: './horse_img.svg', class: 'header-img' }),
	elmFactory('h1', { class: 'header-title' }, 'ONLY JS RULE'),
);

const teamGrid = elmFactory(
	'section',
	{ class: 'team-container' },
	elmFactory('img', { class: 'team-img', src: './finish_line.svg' }),
	elmFactory('img', { class: 'team-img', src: './react.svg' }),
	elmFactory('img', { class: 'team-img', src: './taking_selfie.svg' }),
	elmFactory('p', { class: 'team-desc' }, 'Alain'),
	elmFactory('p', { class: 'team-desc' }, 'Spiderman'),
	elmFactory('p', { class: 'team-desc' }, 'Peach'),
);

const article = elmFactory(
	'article',
	{ class: 'article-container' },
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

const footer = elmFactory(
	'footer',
	{ class: 'footer-container' },
	elmFactory('h3', { class: 'footer-text' }, 'Twitter: @alaincodes'),
	elmFactory('h3', { class: 'footer-text' }, 'illustration: @undraw_co'),
);
document.body.appendChild(scrollBackBtn);
document.body.appendChild(navBar);
document.body.appendChild(header);
document.body.appendChild(teamGrid);
document.body.appendChild(article);

document.body.appendChild(footer);
