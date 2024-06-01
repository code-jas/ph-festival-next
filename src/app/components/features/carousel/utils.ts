/**
 * Resets the specified classes from the given elements.
 * 
 * @param elements - The array of HTML elements to remove classes from.
 * @param classes - The classes to be removed from the elements.
 */
export const resetClasses = (elements: HTMLElement[], classes: string[]) => {
    elements.forEach((el: HTMLElement) => el?.classList.remove(...classes));
};

/**
 * Swaps the info classes based on the given direction.
 * @param direction - The direction of the swap ('right' or 'left').
 * @param currentInfoEl - The current info element.
 * @param previousInfoEl - The previous info element.
 * @param nextInfoEl - The next info element.
 */
export const swapInfosClass = (direction: string, currentInfoEl: HTMLElement, previousInfoEl: HTMLElement, nextInfoEl: HTMLElement) => {
    // Reset classes
    resetClasses([currentInfoEl, previousInfoEl, nextInfoEl], ['current--info', 'previous--info', 'next--info']);

    // Apply new classes based on direction
    if (direction === 'right') {
        currentInfoEl.classList.add('previous--info');
        nextInfoEl.classList.add('current--info');
        previousInfoEl.classList.add('next--info');
    } else {
        currentInfoEl.classList.add('next--info');
        nextInfoEl.classList.add('previous--info');
        previousInfoEl.classList.add('current--info');
    }
};

/**
 * Swaps the classes and z-index values of the carousel cards and background images based on the given direction.
 *
 * @param direction - The direction of the card swap. Can be either 'right' or 'left'.
 * @param currentCardEl - The current card element.
 * @param previousCardEl - The previous card element.
 * @param nextCardEl - The next card element.
 * @param currentBgImageEl - The current background image element.
 * @param previousBgImageEl - The previous background image element.
 * @param nextBgImageEl - The next background image element.
 */
export const swapCardsClass = (
    direction: string,
    currentCardEl: HTMLElement,
    previousCardEl: HTMLElement,
    nextCardEl: HTMLElement,
    currentBgImageEl: HTMLElement,
    previousBgImageEl: HTMLElement,
    nextBgImageEl: HTMLElement
) => {
    console.log('test');
    resetClasses([currentCardEl, previousCardEl, nextCardEl], ['current--card', 'previous--card', 'next--card']);
    resetClasses([currentBgImageEl, previousBgImageEl, nextBgImageEl], ['current--image', 'previous--image', 'next--image']);

    currentCardEl.style.zIndex = '20';
    currentBgImageEl.style.zIndex = '-2';

    if (direction === 'right') {
        previousCardEl.style.zIndex = '20';
        nextCardEl.style.zIndex = '30';
        nextBgImageEl.style.zIndex = '-1';

        currentCardEl.classList.add('previous--card');
        previousCardEl.classList.add('next--card');
        nextCardEl.classList.add('current--card');

        currentBgImageEl.classList.add('previous--image');
        previousBgImageEl.classList.add('next--image');
        nextBgImageEl.classList.add('current--image');
    } else {
        previousCardEl.style.zIndex = '30';
        nextCardEl.style.zIndex = '20';
        previousBgImageEl.style.zIndex = '-1';

        currentCardEl.classList.add('next--card');
        previousCardEl.classList.add('current--card');
        nextCardEl.classList.add('previous--card');

        currentBgImageEl.classList.add('next--image');
        previousBgImageEl.classList.add('current--image');
        nextBgImageEl.classList.add('previous--image');
    }
};
