import "../utils/startedLog";

setTimeout(() => {
    const chatBoxes = [...document.querySelectorAll((`.z-0 .overflow-hidden .group`))];
    const lastChatBox = chatBoxes?.pop();
    const buttonsDiv = lastChatBox.querySelector(`div:has(> button:only-of-type~div)`);
    buttonsDiv?.insertAdjacentHTML('afterbegin', `<button id="">I injected this.</button>`);
}, 10000);