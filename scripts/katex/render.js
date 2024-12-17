function renderMathInElement(element) {
    let elementContent = element.innerHTML;
    const inlineMathRegex = /\$(.+?)\$/gs;
    const blockMathRegex = /\$\$(.*?)\$\$/gs;

    elementContent = elementContent.replace(blockMathRegex, (match, math) => {
        return `<span class="katex-block">${katex.renderToString(escapeHTML(math), { displayMode: true })}</span>`;
    });

    elementContent = elementContent.replace(inlineMathRegex, (match, math) => {
        return `<span class="katex-inline">${katex.renderToString(escapeHTML(math), { displayMode: false })}</span>`;
    });

    element.replaceChildren(...createFragmentFromHTML(elementContent));
}

function escapeHTML(math) {
    return math.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function createFragmentFromHTML(htmlString) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    return template.content.childNodes;
}

function renderMathInElements(elements) {
    elements.forEach(element => {
        renderMathInElement(element);
    });
}

function initializeMathRendering() {
    const contentElement = document.getElementById('content');
    renderMathInElements(document.querySelectorAll('.math_equation'));
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('math_equation')) {
                        renderMathInElement(node);
                    }
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        const newMathElements = node.querySelectorAll('.math_equation');
                        renderMathInElements(newMathElements);
                    }
                });
            }
        });
    });
    const config = { childList: true, subtree: true };
    observer.observe(contentElement, config);
}

window.onload = initializeMathRendering;
