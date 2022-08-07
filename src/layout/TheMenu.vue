<template>
<div class="menu-container">
    <div class="logo-container">
        <div class="logo icon"></div>
        <div class="logo-image">
            <img src="https://actappg1.misacdn.net/img/Logo_Module_TiengViet_White.66947422.svg"/>
        </div>
    </div>
    <div class="menu-item-list scroller">
        <div class="menu-item" @click="handleMenuClick">
            <div class="menu-item__icon">
                <div class="icon icon-tq"></div>
            </div>
            <div class="menu-item__text">Tổng quan</div>
        </div>
        <div class="menu-item" @click="handleMenuClick">
            <div class="menu-item__icon">
                <div class="icon icon-tm"></div>
            </div>
            <div class="menu-item__text">Tiền mặt</div>
        </div>
        <div class="menu-item" @click="handleMenuClick">
            <div class="menu-item__icon">
                <div class="icon icon-tg"></div>
            </div>
            <div class="menu-item__text">Tiền gửi</div>
        </div>
        <div class="menu-item" @click="handleMenuClick">
            <div class="menu-item__icon">
                <div class="icon icon-mh"></div>
            </div>
            <div class="menu-item__text">Mua hàng</div>
        </div>
        <div class="menu-item" @click="handleMenuClick">
            <div class="menu-item__icon">
                <div class="icon icon-bh"></div>
            </div>
            <div class="menu-item__text">Bán hàng</div>
        </div>
        <div class="menu-item" @click="handleMenuClick">
            <div class="menu-item__icon">
                <div class="icon icon-qlhd"></div>
            </div>
            <div class="menu-item__text">Quản lý hóa đơn</div>
        </div>
        <div class="menu-item" @click="handleMenuClick">
            <div class="menu-item__icon">
                <div class="icon icon-k"></div>
            </div>
            <div class="menu-item__text">Kho</div>
        </div>
        <div class="menu-item" @click="handleMenuClick">
            <div class="menu-item__icon">
                <div class="icon icon-ccdc"></div>
            </div>
            <div class="menu-item__text">Công cụ dụng cụ</div>
        </div>
        <div class="menu-item" @click="handleMenuClick">
            <div class="menu-item__icon">
                <div class="icon icon-tscd"></div>
            </div>
            <div class="menu-item__text">Tài sản cố định</div>
        </div>
        <div class="menu-item" @click="handleMenuClick">
            <div class="menu-item__icon">
                <div class="icon icon-tl"></div>
            </div>
            <div class="menu-item__text">Tiền lương</div>
        </div>
        <div class="menu-item" @click="handleMenuClick">
            <div class="menu-item__icon">
                <div class="icon icon-t"></div>
            </div>
            <div class="menu-item__text">Thuế</div>
        </div>
        <div class="menu-item" @click="handleMenuClick">
            <div class="menu-item__icon">
                <div class="icon icon-gt"></div>
            </div>
            <div class="menu-item__text">Giá thành</div>
        </div>
        <div class="menu-item" @click="handleMenuClick">
            <div class="menu-item__icon">
                <div class="icon icon-th"></div>
            </div>
            <div class="menu-item__text">Tổng hợp</div>
        </div>
        <div class="menu-item"  @click="handleMenuClick">
            <div class="menu-item__icon">
                <div class="icon icon-ns"></div>
            </div>
            <div class="menu-item__text">Ngân sách</div>
        </div>
        <div class="menu-item" @click="handleMenuClick">
            <div class="menu-item__icon">
                <div class="icon icon-bc"></div>
            </div>
            <div class="menu-item__text">Báo cáo</div>
        </div>
        <div class="menu-item" @click="handleMenuClick">
            <div class="menu-item__icon">
                <div class="icon icon-pttc"></div>
            </div>
            <div class="menu-item__text">Phân tích tài chính</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'MenuContainer',
    props: {

    },
    methods: {
        handleMenuClick(event) {
            let item = event.currentTarget,
                menu = this.$el.querySelectorAll('.menu-item');

            menu.forEach(function(items) {
                items.classList.remove("menu-item-active");
            })

            item.classList.add('menu-item-active');
        }
    }
}
</script>

<style scoped>
.menu-container {
    font-size: 13px;
    position: relative;
    background-color: #393a3d;
    height: 100%;
    width: auto;
}

.logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
}

.logo{
    background: url('../assets/Sprites.5c668001.png') no-repeat -424px -86px;
    margin-right: 10px;
}

.logo-image{
    height: 32px;
    display: block;
}

.logo-image img{
    height: 32px;
}

.menu-item-list{
    height: calc(100vh - 48px);
    padding-top: 14px;
}

.scroller{
    overflow: auto;
}

.scroller::-webkit-scrollbar {
    width: 6px;
    height: 6px;
} 

.scroller::-webkit-scrollbar-thumb {
    background-color: #d4d7dc;
}

.scroller::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(236,238,241,1);
    background-color: #eceef1;
}

.menu-item{
    height: 42px;
    border-left: 6px solid transparent;
    padding-left: 8px;
    padding-right: 14px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #fff;
    cursor: pointer;
}

.menu-item:hover, .menu-item:focus{
    background-color: rgba(212,215,220,0.2);
    /* border-left-color: rgb(44, 160, 28); */
}

.menu-item-active{
    background-color: rgba(212,215,220,0.2);
    border-left-color: rgb(44, 160, 28);
}

/* .menu-item .menu-item__text{
    font-weight: 400;
} */

.menu-item-active .menu-item__text{
    font-weight: 700;
}

.menu-item__icon {
    width: 24px;
}

.menu-item__text{
    line-height: 42px;
    font-weight: 400;
    margin-left: 8px;
}

.menu-logo{
    display: flex;
    background-color: #38393d;
    padding: 10px;
    height: 28px;
    align-items: center;
    justify-content: center;
}

.menu-bars__icon{
    background: url(../assets/Sprites.5c668001.png) no-repeat -312px -32px;
    width: 24px;
    height: 24px;
    min-height: 24px;
    min-width:24px;
    cursor: pointer;
}
</style>
