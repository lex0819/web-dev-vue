// Создание простого счетчика: Создайте компонент счетчика, который имеет кнопку "+" и кнопку "-", и отображает текущее значение счетчика. При нажатии на кнопки счетчик должен увеличиваться или уменьшаться соответственно.

Vue.component('counter', {
    data() {
        return { count: 0 };
    },
    methods: {
        increase() {
            this.count++;
        },
        decrease() {
            this.count--;
        },
    },
    template: `
    <div class="counter m-3">
        <button @click="decrease" class="btn btn-primary">-</button>
        <span class="p-3">{{count}}</span>
        <button @click="increase" class="btn btn-primary">+</button>
    </div>
    `,
});
