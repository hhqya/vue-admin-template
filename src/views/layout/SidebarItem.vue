<template>
  <div class="sidebar-wrap">
    <template v-for="item in routes" v-if="!item.hidden && item.children">
      <!-- 单级菜单 -->
        <!-- 设置导航路由以及将要去到的目标路由-->
      <router-link
        v-if="
          onlyOneShowingChildren(item.children) &&
            !item.children[0].children &&
            !item.alwaysShow
        "
        :key="item.children[0].name"
        :to="item.path + '/' + item.children[0].path"
      >
          <!--子菜单下的路由将要去到的地方-->
        <el-menu-item :index="item.path + '/' + item.children[0].path">
            <!--绑定图标-->
          <icon
            v-if="item.children[0].meta && item.children[0].meta.icon"
            :name="item.children[0].meta.icon"
            :scale="2"
          >
          </icon>
            <!--判断和绑定当前路由的标题-->
          <span
            slot="title"
            v-if="item.children[0].meta && item.children[0].meta.title"
          >
              <!--标题-->
            {{ getTitle(item.children[0].meta.title) }}
          </span>
        </el-menu-item>
      </router-link>

      <!-- 一级菜单 -->
      <el-submenu
        class="sidebar-wrap__menu"
        v-else
        :key="item.name"
        :index="item.name || item.path"
      >

        <template slot="title">
          <icon
            v-if="item.meta && item.meta.icon"
            :name="item.meta.icon"
            :scale="2"
          >
          </icon>
          <span slot="title" v-if="item.meta && item.meta.title">
            {{ sliderState === 'full' ? getTitle(item.meta.title) : '' }}
          </span>
        </template>
        <template v-for="child in item.children" v-if="!child.hidden">
          <!-- 二级菜单，判断子集的长度，指向子集的路由 -->
          <sidebar-item
            v-if="child.children && child.children.length > 0"
            :routes="[child]"
            :key="child.path"
          >
          </sidebar-item>

            <!--绑定子集的路由，指向子集将要去到的路由地址-->
          <router-link
            v-else
            :to="item.path + '/' + child.path"
            :key="child.name"
          >
              <!--绑定图标-->
            <el-menu-item :index="item.path + '/' + child.path">
              <icon
                v-if="child.meta && child.meta.icon"
                :name="child.meta.icon"
                :scale="2"
              >
              </icon>
                <!--绑定标题-->
              <span slot="title" v-if="child.meta && child.meta.title">
                {{ getTitle(child.meta.title) }}
              </span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    }
  },
  computed: {
    sliderState() {
      return this.$store.getters.sidebar.sliderState
    }
  },
  methods: {
      //展示当前点击的页面，判断子集的长度等于1，隐藏其他页面
    onlyOneShowingChildren(children) {
      return children.filter(item => !item.hidden).length === 1
    },
      //判断标题，并指向当前标题
    getTitle(title) {
      if (this.$te(`route.${title}`)) {
        return this.$t(`route.${title}`)
      }
      return title
    },
  }
}
</script>

<style lang="stylus" scoped>
.sidebar-wrap
  .el-submenu,
  .el-menu-item
    font-size 0
    svg
      margin-right 17px
    span
      font-size 14px
  .svg-icon
    fill currentColor
</style>
