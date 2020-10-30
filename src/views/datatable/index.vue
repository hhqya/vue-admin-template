<template>
    <div>
        <div class="Tabel_Data">
            <el-table
                    ref="multipleTable"
                    tooltip-effect="dark"
                    @selection-change="handleSelectionChange"
                    :data="tableData"
                    style="width: 100%"
            >
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item>
                <span>
                  <img src="../../assets/images/bg.jpg" width="80px" alt=""/>
                </span>
                            </el-form-item>
                            <el-form-item label="投放主题：">
                                <span>{{ props.row.tfzt }}</span>
                            </el-form-item>
                            <el-form-item label="广告主：">
                                <span>{{ props.row.ggz }}</span>
                            </el-form-item>
                            <el-form-item label="监测地点：">
                                <span>{{ props.row.jcdd }}</span>
                            </el-form-item>
                            <el-form-item label="预计估刊例价：">
                                <span>{{ props.row.jg }}</span>
                            </el-form-item>
                            <el-form-item label="行政区县：">
                                <span>{{ props.row.cs }}</span>
                            </el-form-item>
                            <el-form-item label="广告规格：">
                                <span>{{ props.row.gg }}</span>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column label="产品名称" prop="cpmc"></el-table-column>
                <el-table-column label="行业类型" prop="hylx"></el-table-column>
                <el-table-column prop="hylm" label="行业类目" width="120">
                </el-table-column>
                <el-table-column prop="tfpp" label="投放品牌" width="160">
                </el-table-column>
                <el-table-column prop="mtlx" label="媒体类型" width="180">
                </el-table-column>
                <el-table-column prop="cs" label="城市" width="180"></el-table-column>
                <el-table-column prop="jcsj" label="监测时间" width="180">
                </el-table-column>
                <el-table-column width="160">
                    <template slot-scope="scope">
                        <router-link
                                v-bind:to="'#' + scope.row.id"
                                style="color: dodgerblue"
                        >详情
                        </router-link
                        >
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-drawer
                :visible.sync="tableShow"
                direction="rtl"
                :before-close="handleClose"
                size="50%"
        >
            <div></div>
        </el-drawer>
    </div>
</template>

<script>
    export default {
        name: 'datatable',
        data() {
            return {
                tableData: [
                    {
                        cpmc: '东风雷诺',
                        hylx: '交通',
                        hylm: '轿车/客车',
                        tfpp: '东风雷诺',
                        mtlx: '楼宇-框架/看板',
                        cs: '成都',
                        jcsj: '2019-8-01',
                        tfzt: '长轴A级轿车0首付2.83万起 包牌',
                        ggz: '成都中升星辉汽车销售服务有限公司',
                        jcdd: '万达广场（锦华路店）',
                        jg: '3672元/月',
                        cs: '锦江区',
                        gg: '430mm*580mm'
                    }
                ],
                tableShow: false
            }
        },
        methods: {
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            ChangeRow(index, rows) {
                alert(index, rows)
                // this.tableShow = true;
            },
            handleClose() {
                this.$confirm('确认关闭吗，还有暂未保存的工作？')
                    .then(_ => {
                        //触发抽屉状态=> 关闭抽屉
                        this.tableShow = false
                    })
                    .catch(_ => {
                    })
            }
        },
        mounted() {
        }
    }
</script>

<style lang="stylus" scoped>
    .Tabel_Data {
        margin-top: 20px;
        box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.2);

        .demo-table-expand {
            width: 100%;
            display: flex;
            font-size: 10px;
            font-weight: bold;
            background-color: #F5F8FF;
            justify-content: center;
        }
        .demo-table-expand label {
            width: 90px;
            font-weight: bold;
        }
        .demo-table-expand .el-form-item:nth-child(1) {
            margin-right: 30px;
        }
        .demo-table-expand .el-form-item {
            margin-right: 0;
            margin-bottom: 0;
            /*width: 40%;*/
            line-height: 30px;
            color: black;
        }
    }
</style>
