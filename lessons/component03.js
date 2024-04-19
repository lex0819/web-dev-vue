Vue.component('new-component', {
    props: ['header'],
    data() {
        return {
            title: 'Big News!',
        };
    },
    template: `
    <div>
    <h1>{{title}}</h1>
    <h2>{{header}}</h2>
    <h2>Hi guys! From new-component!!!</h2>
    <p>I'm here</p>
    <slot></slot>
    </div>
    `,
});
