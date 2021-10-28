<template>
<transition name="tips">
	<div class="tips-view" v-if="displayTips">
		<div class="mask" @click="hide()" id="mass"></div>
        <div class="content">
            <div class="close" @click="hide()"></div>
            <div class="tip">{{title}}</div>
            <div class="content1" v-if="!type">
                <img src="~assets/image_connection@2x.png" alt="" srcset="" class="img1">
                <img src="~assets/image_connection@2x.png" alt="" srcset="" class="img2">
                <p v-html="content"></p>
                <a href="http://app.lexun.com/wawa/home/index.html#/Recharge"><div class="content1_btn">去获取Y币</div></a>
            </div>
            <div class="content1" v-else>
                <img src="~assets/image_connection@2x.png" alt="" srcset="" class="img1">
                <img src="~assets/image_connection@2x.png" alt="" srcset="" class="img2">
                <p v-html="content"></p>
                <div class="content1_btn" @click="hide(1)">确定</div>
            </div>
        </div>
	</div>
</transition>
</template>

<script>

export default {
    props: {
        title: { // 标题
            type: String,
            default: '提示'
        },
        content: {
            type: String,
            default: '这是弹框内容'
        },
        type: {
            type: Number,
            default: 0
        },
        name: {
            type: String,
            default: ''
        }

    },

    data () {
        return {
            resolve: '',
            reject: '',
            promise: '', // 保存promise对象
            displayTips: false
        };
    },

    methods: {
        // 关闭
        hide (type) {
            this.displayTips = false;
            if (type) this.reject(this.name);
            else this.resolve(this.name);
            this.remove();
        },

        // 弹出提示框，并且创建一个promise对象
        show () {
            this.displayTips = true;
            this.promise = new Promise((resolve, reject) => {
                this.resolve = resolve;
                this.reject = reject;
            });

            return this.promise;
        },

        // 销毁节点
        remove () {
            setTimeout(() => {
                this.destroy();
            }, 200);
        },

        destroy () {
            this.$destroy();
            document.body.removeChild(this.$el);
        }

    },

    created () {
    }
};
</script>

<style lang="scss" scoped="">
	.tips-view .content, .tips-view .mask {
		transition: all .2s;
	}
	.tips-enter .mask, .tips-leave-to .mask {
		opacity: 0;
	}
	.tips-enter-active, .tips-leave-active {
		transition: all .2s;
	}
	.tips-enter .content, .tips-leave-to .content {
		transform: translate(-50%,-50%) scale(.8);
		opacity: 0;
    }
    .content1 {
        /deep/ a {
            color: #ff2c2c !important;
        }
    }

</style>
