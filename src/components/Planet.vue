<template>
    <div class="planet">
        <h2>{{planetData.name}}</h2>
    </div>
</template>
<script>
export default{
    name: 'Planet',
    props: {
        planetData: {  
            type: Object,
            default(){
                return{}  
            }
        }
    },

}
</script>