<template>
  <div>
      <el-table
              ref="multipleTable"
              tooltip-effect="dark"
              @selection-change="handleSelectionChange"
              :data="tableData"
              style="width: 100%">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column
                  fixed
                  prop="id"
                  label="序号"
                  width="150">
          </el-table-column>
          <el-table-column
                    prop="name"
                    label="名称"
                    width="200">
          </el-table-column>
          <el-table-column
                  prop="permission"
                  label="当前权限"
                  width="200">
          </el-table-column>
          <el-table-column
                  prop="key"
                  label="个人简述"
                  width="200">
          </el-table-column>
          <el-table-column
                  label="操作"
                  width="200">
              <template slot-scope="scope">
                  <el-button type="warning" size="mini" @click="handlePermission">
                      禁用
                  </el-button>
                  <el-button
                          @click.native.prevent="deleteRow(scope.$index, tableData)"
                          type="danger"
                          size="mini">
                      移除
                  </el-button>
              </template>
          </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
  name: "permission",
    data(){
      return{
          tableData:[
              {id: 1,name: '超级管理员',permission: 'super admin',key: 'i am super admin'},
              {id:2,name: '吃瓜群众',permission: 'admin',key: 'i am  admin'},
              {id:3,name: '看热闹不嫌事大',permission:'user',key: 'i am user'}
          ]
      }
    },
    methods:{
        handlePermission(){
            this.$message({
                showClose: true,
                message: '禁用成功！',
                type: 'success'
            });
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        deleteRow(index,rows){
            this.$confirm('此操作将永久删除数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'danger'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
                rows.splice(index, 1);
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        }
    },
    mounted(){},
    mounted:{}

};
</script>

<style lang="stylus" scoped>

</style>
