<script setup>
import { ref } from 'vue'
import MyGoods from './components/MyGoods.vue'
// 提供数据
const goodsList = ref([
    {
        id: '4001172',
        name: '称心如意手摇咖啡磨豆机咖啡豆研磨机',
        price: 289,
        picture:
            'https://yanxuan-item.nosdn.127.net/84a59ff9c58a77032564e61f716846d6.jpg'
    },
    {
        id: '4001594',
        name: '日式黑陶功夫茶组双侧把茶具礼盒装',
        price: 288,
        picture:
            'https://yanxuan-item.nosdn.127.net/3346b7b92f9563c7a7e24c7ead883f18.jpg'
    },
    {
        id: '4001009',
        name: '竹制干泡茶盘正方形沥水茶台品茶盘',
        price: 109,
        picture:
            'https://yanxuan-item.nosdn.127.net/2d942d6bc94f1e230763e1a5a3b379e1.png'
    },
    {
        id: '4001874',
        name: '古法温酒汝瓷酒具套装白酒杯莲花温酒器',
        price: 488,
        picture:
            'https://yanxuan-item.nosdn.127.net/44e51622800e4fceb6bee8e616da85fd.png'
    },
    {
        id: '4001649',
        name: '大师监制龙泉青瓷茶叶罐',
        price: 139,
        picture: 'https://yanxuan-item.nosdn.127.net/4356c9fc150753775fe56b465314f1eb.png'
    },
    {
        id: '3997185',
        name: '与众不同的口感汝瓷白酒杯套组1壶4杯',
        price: 108,
        picture:
            'https://yanxuan-item.nosdn.127.net/8e21c794dfd3a4e8573273ddae50bce2.jpg'
    },
    {
        id: '3997403',
        name: '手工吹制更厚实白酒杯壶套装6壶6杯',
        price: 100,
        picture:
            'https://yanxuan-item.nosdn.127.net/af2371a65f60bce152a61fc22745ff3f.jpg'
    },
    {
        id: '3998274',
        name: '德国百年工艺高端水晶玻璃红酒杯2支装',
        price: 139,
        picture:
            'https://yanxuan-item.nosdn.127.net/8896b897b3ec6639bbd1134d66b9715c.jpg'
    }
])
const cutPrice = (price, idx) => {
    if(goodsList.value[idx].price > 0){
        goodsList.value[idx].price -= 1;
    } 
}

</script>
<template>
    <div class="list">
        <MyGoods v-for="item, index in goodsList" 
            :imgUrl="item.picture" 
            :title="item.name" 
            :price="item.price" 
            :idx="index" 
            @cut="cutPrice"/>
    </div>
</template>
<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.list {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}

.item {
    width: 240px;
    margin-left: 10px;
    padding: 20px 30px;
    transition: all 0.5s;
    margin-bottom: 20px;

    .item:nth-child(4n) {
        margin-left: 0;
    }

    &:hover {
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
        transform: translate3d(0, -4px, 0);
        cursor: pointer;
    }

    img {
        width: 100%;
    }

    .name {
        font-size: 18px;
        margin-bottom: 10px;
        color: #666;
    }

    .price {
        font-size: 22px;
        color: firebrick;
    }

    .price::before {
        content: '¥';
        font-size: 22px;
    }
}
</style>