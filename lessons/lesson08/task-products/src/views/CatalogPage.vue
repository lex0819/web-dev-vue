<template>
    <div>
        <h1>This is Catalog page</h1>
        <Catalog />
    </div>
</template>
<script>
import Catalog from '@/components/Catalog.vue';
export default {
    name: 'CatalogPage',
    components: {
        Catalog,
    },
};
</script>
