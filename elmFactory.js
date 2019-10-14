export const elmFactory = (type, attributes, ...children) => {
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
