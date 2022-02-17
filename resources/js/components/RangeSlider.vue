<template>
    <div class="range-slider">
        <div class="label text-sm pl-3 mb-0.5">Возраст</div>
        <div class="values flex w-full items-center">
            <div id="range1" class="relative flex flex-1 p-3 text-sm items-center bg-slate-100 font-semibold rounded-xl justify-center">
                <span class="absolute top-3 text-slate-500 left-4 font-medium">от</span>
                {{valRangeStart}}
            </div>
            <span class="p-3"> - </span>
            <div id="range2" class="relative flex flex-1 text-sm p-3 items-center bg-slate-100 font-semibold rounded-xl justify-center">
                <span class="absolute top-3 text-slate-500 left-4 font-medium">до</span>
                {{valRangeEnd}}
            </div>
        </div>
        <div class="container relative mt-2">
            <div ref="block_count_resp" class="count-resp py-3 flex flex-col items-center absolute rounded-2xl bg-teal-50">
                <div class="p font-medium mb-4 max-w-max">{{formattingNumber(countRespondents)}}</div>
                <span class="text-sm text-teal-500 mt-2">респондентов</span>
            </div>
            <div ref="sliderTrack" class="slider-track bg-slate-100"></div>
            <input ref="sliderOne" type="range" min="0" max="80" :value="this.valRangeStart" id="slider-1" @input="slideOne">
            <input ref="sliderTwo" type="range" min="0" max="80" :value="this.valRangeEnd" id="slider-2" @input="slideTwo">
        </div>
    </div>
</template>

<script>
    import {getCountUniqueData, getListObjects} from "../utilities/utilities";

    export default {
        name: "range-slider",
        data: () =>({
            valRangeStart: 18,
            valRangeEnd: 60,
            minGap: 0,
            sliderMaxValue: 0,
            countRespondents: 0,
            listAges: []
        }),
        props: {
            list_ages: {
                type: Array,
                required: true
            }
        },
        methods: {
            slideOne() {
                if(parseInt(this.valRangeStart) < parseInt(this.valRangeEnd)) {
                    if (parseInt(this.$refs.sliderTwo.value) - parseInt(this.$refs.sliderOne.value) <= this.minGap) {
                        this.$refs.sliderOne.value = parseInt(this.$refs.sliderTwo.value) - this.minGap;
                    }
                    this.valRangeStart = parseInt(this.$refs.sliderOne.value);
                } else {
                    this.valRangeStart = parseInt(this.$refs.sliderTwo.value)-1;
                    this.$refs.sliderOne.value = parseInt(this.valRangeStart);
                }
            },
            slideTwo(){
                if(parseInt(this.valRangeStart) < parseInt(this.valRangeEnd)) {
                    if (parseInt(this.$refs.sliderTwo.value) - parseInt(this.$refs.sliderOne.value) <= this.minGap) {
                        this.$refs.sliderTwo.value = parseInt(this.$refs.sliderOne.value) + this.minGap;
                    }
                    this.valRangeEnd = parseInt(this.$refs.sliderTwo.value);
                } else {
                    this.valRangeEnd= parseInt(this.$refs.sliderOne.value)+1;
                    this.$refs.sliderTwo.value = parseInt(this.valRangeEnd);
                }
            },
            fillColor(){
                let percent1 = (this.$refs.sliderOne.value / this.sliderMaxValue) * 100;
                let percent2 = (this.$refs.sliderTwo.value / this.sliderMaxValue) * 100;
                this.$refs.sliderTrack.style.background = `linear-gradient(to right, #EAEAF2 ${percent1}% , #14B8A6 ${percent1}% , #14B8A6 ${percent2}%, #EAEAF2 ${percent2}%)`;
                this.changeBlockRespondents(percent1, percent2)
            },
            changeBlockRespondents(percent1, percent2){
                this.$refs.block_count_resp.style.left = `${percent1+1.3}%`
                let widthBlockCount = percent2 - percent1;
                this.$refs.block_count_resp.style.width = `${widthBlockCount-2}%`
                //this.countRespondents = (this.valRangeEnd - this.valRangeStart) * 1238

                this.calculateRespondents()
            },
            calculateRespondents(){
                this.countRespondents = 0
                //let listAges = getCountUniqueData(this.$props.list_ages,'age')
                //console.log(listAges)
                //console.log(this.listAges.length)
                for (let key in this.listAges){
                    if(key >= this.valRangeStart && key <= this.valRangeEnd){
                        this.countRespondents += this.listAges[key]
                    }
                    //console.log(key+ ':' + listAges[key])
                }

                // for(let i = this.valRangeStart; i <= this.valRangeEnd; i++){
                //     console.log(this.$props.list_ages)
                // }
            },
            initUsersData(){
                //console.log(this.$props.list_ages)
                this.listAges = this.$props.list_ages
            }
        },
        mounted() {
            this.initUsersData()
            this.sliderMaxValue = this.$refs.sliderOne.max
            this.slideOne();
            this.slideTwo();
            this.$refs.block_count_resp.style.left = `23%`
            this.fillColor();
            //console.log(this.$props.list_ages)
        },
        watch: {
            valRangeStart(){
                this.fillColor()
            },
            valRangeEnd(){
                this.fillColor()
            },
            countRespondents(){
                this.$emit('age-count-resp', {
                    count: this.countRespondents,
                    startAge: this.valRangeStart,
                    endAge: this.valRangeEnd,
                })
            },
            list_ages(){
                this.listAges = getCountUniqueData(this.$props.list_ages,'age')
                //console.log(this.listAges)
                //alert('recieved! - ' + this.listAges)
                //console.log(getCountUniqueData(this.$props.list_ages,'age'))
                //console.log(this.$props.list_ages)
                this.calculateRespondents()
            }
        },
        created() {
            // alert('created!')
            // this.$on('sendListUsersData',listUsersData => {
            //     this.listAges = listUsersData;// Никакого нового this не создается внутри стрелочной функции. Если он не используется здесь =>, это относится к событию
            // })
        }
    }
</script>

<style scoped>

    .count-resp{
        top: 5%;
    }

    .container{
        position: relative;
        width: 100%;
        height: 100px;
    }
    input[type="range"]{
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 100%;
        outline: none;
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        background-color: transparent;
        pointer-events: none;
    }
    .slider-track{
        width: 100%;
        height: 5px;
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        border-radius: 5px;
    }
    input[type="range"]::-webkit-slider-runnable-track{
        -webkit-appearance: none;
        height: 5px;
    }
    input[type="range"]::-moz-range-track{
        -moz-appearance: none;
        height: 5px;
    }
    input[type="range"]::-ms-track{
        appearance: none;
        height: 5px;
    }
    input[type="range"]::-webkit-slider-thumb{
        -webkit-appearance: none;
        height: 16px;
        width: 16px;
        background-color: #14B8A6;
        cursor: pointer;
        margin-top: -6px;
        pointer-events: auto;
        border-radius: 50%;
    }
    input[type="range"]::-moz-range-thumb{
        -webkit-appearance: none;
        height: 16px;
        width: 16px;
        cursor: pointer;
        border-radius: 50%;
        background-color: #0cae9e;
        pointer-events: auto;
    }
    input[type="range"]::-ms-thumb{
        appearance: none;
        height: 16px;
        width: 16px;
        cursor: pointer;
        border-radius: 50%;
        background-color: #0cae9e;
        pointer-events: auto;
    }
    input[type="range"]:active::-webkit-slider-thumb{
        background-color: #069687;
    }
</style>
