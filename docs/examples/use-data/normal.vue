<script setup lang="ts">
import { useData } from '@blinkjun/elements/hooks/index'

interface Data {
    title: string
    content: string
}

const getData = () =>
    new Promise<Data>((resolve, reject) => {
        setTimeout(() => {
            resolve({
                title: 'Dynamic migration',
                content: 'The Football Is Good For Training And Recreational Purposes national'
            })
        }, 2000)
    })

const { load, state } = useData<Data>(getData)

load()
console.log(state)
/*
{
    loading:false,
    error:false,
    data:{
        title: 'Dynamic migration',
        content: 'The Football Is Good For Training And Recreational Purposes national'
    },
    errorMessage:""
}

*/
</script>
