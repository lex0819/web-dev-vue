// Создайте компонент списка, который отображает массив элементов. Добавьте текстовое поле для фильтрации списка. При вводе текста в поле, список должен автоматически обновляться, отображая только элементы, содержащие введенный текст.

Vue.component('list', {
    props: ['list'],
    data() {
        return {
            search: '',
        };
    },
    methods: {},
    computed: {
        filterList() {
            return this.list.filter((it) =>
                it.text.toLowerCase().includes(this.search)
            );
        },
    },
    template: `
    <div class="list">
        <p class="fs-3"> Type search
            <input type="text" name="search" v-model="search" class="form-control"/>
        </p>
        <ul class="list-group mt-3">
            <li 
                v-for="item in filterList" 
                :key="item.id"
                class="list-group-item">
                {{item.text}}
            </li>
        </ul>
    </div>
    `,
});
