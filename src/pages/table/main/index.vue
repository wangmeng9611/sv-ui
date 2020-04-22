<template>
    <div class="k-table">
        <div>
            <slot></slot>
        </div>
        <div>
            <table-header></table-header>
        </div>
        <div>
            <table-body></table-body>
        </div>
        <div>
            <table-footer></table-footer>
        </div>
    </div>
</template>
<script>
import tableHeader from './tableHeader'
import tableBody  from './tableBody'
import tableFooter from './tableFooter'
export default {
    name: 'Ktable',
    components: {
        tableHeader,
        tableBody,
        tableFooter
    },
    props:{
        tableData: {
            // type: Array,
            // default: ''
        },
    },
    created(){
        // console.log(tableData)
    }
}
</script>