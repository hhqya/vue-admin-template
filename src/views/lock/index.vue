<template>
  <div class="lock-wrap">
    <el-carousel
      :loop="true"
      :interval="4000"
      :height="carouselHeight"
      indicator-position="none"
    >
      <el-carousel-item v-for="item in swipers" :key="item.id">
        <div class="img_swiper">
          <img
            style="width: 100%;height: 360px"
            :src="item.url"
            alt="锁屏图片"
          />
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="lock-container">
      <div class="lock-container__box">
        <h1>
          <span>{{ $t('app.unlock') }} {{ $t('login.edenPart1') }}</span
          ><span class="subtitle">{{ $t('login.edenPart2') }}</span>
        </h1>
        <el-input v-model="pwd" placeholder="Enter Password"></el-input>
        <el-button class="btn" @click="unlock">unlock</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lock',
  data() {
    return {
      carouselHeight: '',
      pwd: '',
      swipers: [
        { id: 0, url: require('../../assets/swiper/bg1.jpg') },
        { id: 1, url: require('../../assets/swiper/bg2.jpg') },
        { id: 2, url: require('../../assets/swiper/bg3.jpg') },
      ]
    }
  },
  created() {
    this.carouselHeight = `${window.innerHeight / 2}px`
  },
  methods: {
    unlock() {
      if (this.pwd === '') {
        this.$message.error('Please Enter Password!')
      } else {
        this.$message.success(this.$t('lock.unlock'))
        this.$store.dispatch('setLockState', 'unlock')
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.lock-wrap
  width 100%
  height 100%
  overflow hidden

.lock-container
  width 100%
  height 50%
  display flex
  align-items center
  justify-content center
  &__box
    color #659c84
    h1
      text-align center
    .btn
      margin-top 20px
      width 100%
    .subtitle
      color #374b63

.el-carousel__item
  display flex
  align-items center
  justify-content center
  div
    font-size 35px
    color white
.el-carousel__item:nth-child(2n)
  background-color #659c84
.el-carousel__item:nth-child(2n+1)
  background-color #374b63
</style>
