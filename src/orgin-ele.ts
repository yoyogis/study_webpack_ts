export class OrginEle extends HTMLElement{
    connectedCallback() {
        this.textContent = 'I am a custom element.';
        console.log('conn');
    }
}