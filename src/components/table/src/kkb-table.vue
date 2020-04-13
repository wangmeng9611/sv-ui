<template>
    <div class="table">
        <kkbTableColumn>
            <slot></slot>
        </kkbTableColumn>
    </div>
</template>
<script>
import kkbTableColumn from './kkb-table-column'
export default {
    components: {
        kkbTableColumn
    }
}
</script>
<style lang="less">
    
</style>