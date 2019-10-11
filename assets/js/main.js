(function () {

	const app = (function () {

		var DOM = {};

		function setValue(element, value) {
			element.textContent = value;
		}

		function getCount() {
			return DOM.text.value.length;
		}

		function getCountWithoutSpace() {
			return DOM.text.value.replace(/\s+/g, '').length;
		}

		function getLines() {
			return DOM.text.value.split('\n').length;
		}

		function getCountSpecificWord(word) {
			return DOM.text.value.replace(/\n+/g, ' ').split(' ').filter((item) => item === word && item != "").length;
		}

		function setCount() {
			setValue(DOM.counter, getCount());
			setValue(DOM.counterWithoutSpace, getCountWithoutSpace());
			setValue(DOM.counterSpace, getCount() - getCountWithoutSpace());
			setValue(DOM.counterSpecificWord, +getCountSpecificWord(DOM.specificWord.value.replace(/\s+/g, '')));
			setValue(DOM.counterLines, getLines());
			animeResult();
		}

		function animeResult() {
			if (!DOM.results.classList.contains('slideInDown')) {
				DOM.results.classList.add('slideInDown');
			}
		}

		function init() {
			DOM = {
				text: document.querySelector('[data-dom=text]'),
				specificWord: document.querySelector('[data-dom=specificWord]'),
				counter: document.querySelector('[data-dom=counter]'),
				counterWithoutSpace: document.querySelector('[data-dom=counterWithoutSpace]'),
				counterSpace: document.querySelector('[data-dom=counterSpace]'),
				counterLines: document.querySelector('[data-dom=counterLines'),
				counterSpecificWord: document.querySelector('[data-dom=counterSpecificWord]'),
				results: document.querySelector('[data-dom=results]'),
			}

			DOM.text.addEventListener('input', setCount);
			DOM.specificWord.addEventListener('input', setCount);
		}

		return {
			init: init
		}
	})();

	app.init();

})();
