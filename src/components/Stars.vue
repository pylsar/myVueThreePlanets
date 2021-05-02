<template>
    <div>
        <div class="stars">
            <span></span>
        </div>
        <div class="stars stars__two">
            <span></span>
        </div>
        <div class="stars stars__three">
            <span></span>
        </div>
        <div class="stars stars__four">
            <span></span>
        </div>
        <div class="stars stars__five">
            <span></span>
        </div>
        <div class="stars stars__six">
            <span></span>
        </div>
    </div>
</template>
<script>
export default{
    name: 'Stars'
}
</script>
<style lang="scss">
    .stars{
        position: absolute;
        top: 0;
        right: 0;
        transform: rotateZ(45deg);
        & span{
            width: 170px;
            height: 2px;
            display: block;
            background-image: linear-gradient(to right, #fff, transparent);
            margin: 50px;
            margin-bottom: 150px;
            position: relative;
            animation: fallenStars 2s linear infinite;
            opacity: 0;
            &::before{
                content: '';
                width: 3px;
                height: 3px;
                position: absolute;
                left: -1px;
                bottom: -1px;
                background-color: #fff;
                box-shadow: 0 0 6px #fff;
                border-radius: 50px;
            }
        }   
        &__two{
            right: 500px;
            & span {
            animation-delay: 3s;
            }
        }
        &__three{
            right: 800px;
            & span {
            animation-delay: 2s;
            }
        }
        &__four{
            right: 1200px;
            & span {
            animation-delay: 4s;
            }
        }
        &__five{
            right: -130px;
            & span {
            animation-delay: 5s;
            }
        }
        &__six{
            right: -350px;
            & span {
            animation-delay: 2s;
            }
        }
    }
    @keyframes fallenStars {
    0%{
        transform: translateY(-200px) rotate(-90deg);
        opacity: 1;
    }
    100%{
        transform: translateY(600px) rotate(-90deg);
        opacity: 0;
    }   
}
</style>