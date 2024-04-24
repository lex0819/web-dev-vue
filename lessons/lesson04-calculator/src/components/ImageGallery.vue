<template>
    <div>
        <h2>Image Gallery</h2>
        <div class="gallery">
            <div class="gallery-list">
                <img
                    v-for="image in images"
                    :key="image.id"
                    class="gallery-item"
                    @click="chooseImage(image.id)"
                    :src="image.src"
                />
            </div>
            <Transition name="fade">
                <img
                    :src="currentImgSrc"
                    alt="img"
                    class="gallery-active"
                    :key="currentImgIndex"
                />
            </Transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImageGallery',
    props: ['images'],

    data() {
        return {
            currentImgIndex: 0,
        };
    },

    methods: {
        chooseImage(ind) {
            this.currentImgIndex = ind;
        },
    },
    computed: {
        currentImgSrc() {
            return this.images[this.currentImgIndex].src;
        },
    },
};
</script>

<style lang="scss" scoped>
.gallery {
    max-width: 760px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 120px 1fr;
    grid-template-rows: auto;
    &-list {
        display: grid;
        padding-top: 30px;
        padding-left: 30px;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        z-index: 2;
    }
    &-item {
        cursor: pointer;
    }
    &-active {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
        z-index: 1;
    }
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0.3;
}
</style>
