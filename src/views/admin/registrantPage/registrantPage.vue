<template>
    <div id="app" class="registrant">
        <el-dialog title="编辑报名信息" :visible.sync="dialogVisible" width="50%">
            <el-form ref="form" :model="newItemObj" label-width="80px">
                <el-form-item label="id">
                    <el-input v-model="newItemObj.id"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="newItemObj.name"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-select v-model="newItemObj.sex">
                        <el-option label="男" :value="0"></el-option>
                        <el-option label="女" :value="1"></el-option>
                        <el-option label="保密" :value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="专业">
                    <el-input v-model="newItemObj.major"></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model="newItemObj.phone_number"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="newItemObj.email"></el-input>
                </el-form-item>
                <el-form-item label="部门">
                    <el-select v-model="newItemObj.department">
                        <el-option label="APP开发" :value="1"></el-option>
                        <el-option label="Web开发" :value="2"></el-option>
                        <el-option label="程序开发" :value="3"></el-option>
                        <el-option label="游戏开发" :value="4"></el-option>
                        <el-option label="UI设计" :value="5"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="状态">
                    <el-select v-model="newItemObj.status">
                        <el-option label="未处理" :value="0"></el-option>
                        <el-option label="已报名" :value="1"></el-option>
                        <el-option label="初审中" :value="2"></el-option>
                        <el-option label="面试中" :value="3"></el-option>
                        <el-option label="笔试中" :value="4"></el-option>
                        <el-option label="成功录取" :value="5"></el-option>
                        <el-option label="初审失败" :value="6"></el-option>
                        <el-option label="面试失败" :value="7"></el-option>
                        <el-option label="笔试失败" :value="8"></el-option>
                        <el-option label="复试失败" :value="9"></el-option>
                        <el-option label="未录取" :value="10"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="期望">
                    <el-input type="textarea" v-model="newItemObj.expectation"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="changeProfile()">确 定</el-button>
            </span>
        </el-dialog>

        <el-dialog title="新建" :visible.sync="addDialogVisible" width="50%">
            <el-form ref="form" :model="addRegistrantObj" label-width="80px">
                <el-form-item label="姓名">
                    <el-input v-model="addRegistrantObj.name"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-select v-model="addRegistrantObj.sex">
                        <el-option label="男" :value="0"></el-option>
                        <el-option label="女" :value="1"></el-option>
                        <el-option label="保密" :value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="专业">
                    <el-input v-model="addRegistrantObj.major"></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model="addRegistrantObj.phone_number"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="addRegistrantObj.email"></el-input>
                </el-form-item>
                <el-form-item label="部门">
                    <el-select v-model="addRegistrantObj.department">
                        <el-option label="APP开发" :value="1"></el-option>
                        <el-option label="Web开发" :value="2"></el-option>
                        <el-option label="程序开发" :value="3"></el-option>
                        <el-option label="游戏开发" :value="4"></el-option>
                        <el-option label="UI设计" :value="5"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="状态">
                    <el-select v-model="addRegistrantObj.status">
                        <el-option label="已报名" :value="1"></el-option>
                        <el-option label="初审中" :value="2"></el-option>
                        <el-option label="面试中" :value="3"></el-option>
                        <el-option label="笔试中" :value="4"></el-option>
                        <el-option label="成功录取" :value="5"></el-option>
                        <el-option label="初审失败" :value="6"></el-option>
                        <el-option label="面试失败" :value="7"></el-option>
                        <el-option label="笔试失败" :value="8"></el-option>
                        <el-option label="复试失败" :value="9"></el-option>
                        <el-option label="未录取" :value="10"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="期望">
                    <el-input type="textarea" v-model="addRegistrantObj.expectation"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addRegistrant()">确 定</el-button>
            </span>
        </el-dialog>

        <el-dialog title="提示" :visible.sync="deleteItemVisible" width="30%">
            <span>确定删除吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="deleteItemCancle()">取 消</el-button>
                <el-button type="primary" @click="deleteItem()">确 定</el-button>
            </span>
        </el-dialog>


        <el-dialog title="提示" :visible.sync="remarkDialogVisible" width="50%" @close="cancleRemark()">
            <span>编辑备注</span>
            <br><br>
            <el-input type="textarea" :rows="10" v-model="remark"></el-input>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancleRemark()">取 消</el-button>
                <el-button type="primary" @click="changeRemark()">确 定</el-button>
            </span>
        </el-dialog>


        <div class="main-top2">
            <span class="main-top-title">管理报名信息</span>
            <div class="main-top">
                <el-select v-model="dataListFilter.department" class="main-top-select">
                    <el-option label="全部" :value="-10"></el-option>
                    <el-option label="APP开发" :value="1"></el-option>
                    <el-option label="Web开发" :value="2"></el-option>
                    <el-option label="程序开发" :value="3"></el-option>
                    <el-option label="游戏开发" :value="4"></el-option>
                    <el-option label="UI设计" :value="5"></el-option>
                </el-select>
                <el-select v-model="dataListFilter.status" class="main-top-select">
                    <el-option label="全部" :value="-1"></el-option>
                    <el-option label="未处理" :value="0"></el-option>
                    <el-option label="已报名" :value="1"></el-option>
                    <el-option label="初审中" :value="2"></el-option>
                    <el-option label="面试中" :value="3"></el-option>
                    <el-option label="笔试中" :value="4"></el-option>
                    <el-option label="成功录取" :value="5"></el-option>
                    <el-option label="初审失败" :value="6"></el-option>
                    <el-option label="面试失败" :value="7"></el-option>
                    <el-option label="笔试失败" :value="8"></el-option>
                    <el-option label="复试失败" :value="9"></el-option>
                    <el-option label="未录取" :value="10"></el-option>
                </el-select>
                <el-input v-model="dataListFilter.name" class="main-top-input" placeholder="输入姓名搜索"></el-input>
                <div class="main-top-button">
                    <el-button-group>
                        <el-button type="primary" icon="el-icon-circle-plus-outline"
                            @click="addDialogVisible = true">增加</el-button>
                        <!-- <el-button type="primary" icon="el-icon-share">搜索</el-button> -->
                    </el-button-group>
                </div>
            </div>

        </div>


        <div class="main-table">
            <el-table :v-loading="tableLoading" :data="dataListShow" :border="true" class="main-table-eltable"
                :height="'calc(100vh - 100px)'">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="id">
                                <span>{{ props.row.id }}</span>
                            </el-form-item>
                            <el-form-item label="姓名">
                                <span>{{ props.row.name }}</span>
                            </el-form-item>
                            <el-form-item label="性别">
                                <span>{{ props.row.sex }}</span>
                            </el-form-item>
                            <el-form-item label="专业">
                                <span>{{ props.row.major }}</span>
                            </el-form-item>
                            <el-form-item label="手机号">
                                <span>{{ props.row.phone_number }}</span>
                            </el-form-item>
                            <el-form-item label="邮箱">
                                <span>{{ props.row.email }}</span>
                            </el-form-item>
                            <el-form-item label="部门">
                                <span>{{ props.row.department }}</span>
                            </el-form-item>
                            <el-form-item label="状态">
                                <span>{{ props.row.status }}</span>
                            </el-form-item>
                            <el-form-item label="期望">
                                <span>{{ props.row.expectation }}</span>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column prop="id" label="id" width="50">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="80">
                </el-table-column>
                <el-table-column prop="sex" label="性别" width="80">
                </el-table-column>
                <el-table-column prop="major" label="专业" width="80">
                </el-table-column>
                <el-table-column prop="phone_number" label="手机号" width="120">
                </el-table-column>
                <el-table-column prop="email" label="邮箱" width="120">
                </el-table-column>
                <el-table-column prop="department" label="部门" width="90">
                </el-table-column>
                <el-table-column prop="status" label="状态" width="70">
                </el-table-column>
                <el-table-column prop="expectation" label="期望">
                </el-table-column>
                <el-table-column fixed="right" label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" @click="openDialog(scope.row)" size="small">编辑</el-button>
                        <el-button type="text" @click="openRemark(scope.row.id)" size="small">备注</el-button>
                        <el-button type="text" @click="deleteItemOpen(scope.row.id)" size="small">删除</el-button>
                    </template>
                </el-table-column>
                
            </el-table>
        </div>

        <div class="block">
            <el-pagination :current-page.sync="currentPage" :page-size="30" layout="prev, pager, next, jumper"
                :total="dataListNew.length">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {

    data() {
        return {
            remark:"",
            remarkId:0,
            departmentLists: ["APP开发", "Web开发", "程序开发", "游戏开发", "UI设计"],
            sexLists: ["男", "女", "保密"],
            statusLists: [],
            dataListAll: [
                {
                    "id": 0,
                    "name": "string",
                    "major": "string",
                    "phone_number": "string",
                    "email": "string",
                    "department": 4,
                    "expectation": "哈哈哈哈",
                    "sex": 0
                }, {
                    "id": 1,
                    "name": "string",
                    "major": "string",
                    "phone_number": "string",
                    "email": "string",
                    "department": 3,
                    "expectation": "请按时打卡就是v北京看法v不看",
                    "sex": 1
                }, {
                    "id": 2,
                    "name": "string",
                    "major": "string",
                    "phone_number": "string",
                    "email": "string",
                    "department": 1,
                    "expectation": "捏捏捏",
                    "sex": 2
                }
            ],
            dataListShow: [],
            dataListNew: [],
            dataListFilter: {
                name: "",
                id: -10,
                department: -10,
                status: -1
            },
            dialogVisible: false,
            newItemObj: {
                "id": 0,
                "name": "",
                "major": "",
                "phone_number": "",
                "email": "",
                "department": 2,
                "expectation": 3,
                "sex": 1
            },
            addRegistrantObj: {
                "name": "",
                "major": "",
                "phone_number": "",
                "email": "",
                "department": 1,
                "expectation": "",
                "sex": 0
            },
            addDialogVisible: false,
            remarkDialogVisible:false,
            currentPage: 1,
            tableLoading: true,
            deleteItemVisible: false,
            deleteItemId: 0
        }
    },
    methods: {
        async openRemark(id){
            this.remarkDialogVisible=true
            let remark = await this.$http.get("/registrant/remark/",{id})
            this.remark=remark.data.content;
            this.remarkId=id
        },
        async changeRemark(){
            let msg = await this.$http.post("/registrant/remark/",{
                id:this.remarkId,
                content:this.remark
            })
            console.log(msg);
            if(msg.status == 200){
                this.$message.success("编辑成功")
                this.remarkDialogVisible=false
                this.remarkId=0
                this.remark=""
            }else{
                this.$message.error(msg.data.code+": "+msg.data.msg)
            }
        },
        cancleRemark(){
            this.remarkDialogVisible=false
            this.remark=""
        },
        openDialog(obj) {
            this.dialogVisible = true
            this.newItemObj = JSON.parse(JSON.stringify(obj))
            this.newItemObj.department = this.departmentLists.indexOf(obj.department) + 1;
            this.newItemObj.sex = this.sexLists.indexOf(obj.sex);
            let status;
            switch (this.newItemObj.status) {
                case "未处理": status = 0; break;
                case "已报名": status = 1; break;
                case "初审中": status = 2; break;
                case "面试中": status = 3; break;
                case "笔试中": status = 4; break;
                case "成功录取": status = 5; break;
                case "初审失败": status = 6; break;
                case "面试失败": status = 7; break;
                case "笔试失败": status = 8; break;
                case "复试失败": status = 9; break;
                case "未录取": status = 10; break;
            }
            this.newItemObj.status = status;
            // console.log(obj.sex,this.sexLists.indexOf(obj.sex+1));

            console.log(obj);
        },

        dataListShowTrans() {
            // console.log(this.departmentLists[this.dataListNew[3].department]);
            for (let i = 0; i < this.dataListShow.length; i++) {
                if (typeof (this.dataListShow[i].department) === "number") {
                    // console.log(typeof (this.dataListShow[i].department));
                    this.dataListShow[i].department = this.departmentLists[this.dataListShow[i].department - 1]
                    this.dataListShow[i].sex = this.sexLists[this.dataListShow[i].sex]
                    let status;
                    switch (this.dataListShow[i].status) {
                        case 0: status = "未处理"; break;
                        case 1: status = "已报名"; break;
                        case 2: status = "初审中"; break;
                        case 3: status = "面试中"; break;
                        case 4: status = "笔试中"; break;
                        case 5: status = "成功录取"; break;
                        case 6: status = "初审失败"; break;
                        case 7: status = "面试失败"; break;
                        case 8: status = "笔试失败"; break;
                        case 9: status = "复试失败"; break;
                        case 10: status = "未录取"; break;
                    }


                    this.dataListShow[i].status = status;
                }
            }
        },
        async refreshDate() {


            this.tableLoading = true
            let dataList = await this.$http.get("/registrant/", {
                "id": "",
                "sex": "",
                "phone_number": "",
                "department": ""
            })

            if (dataList.status == 200) {
                this.dataListAll = dataList.data.data
            }
            else {
                this.$message({ message: '获取失败, code: ' + dataList.status + ", " + dataList.statusText, type: 'error' });
            }

            this.tableLoading = false
        },
        async changeProfile() {
            console.log(this.newItemObj);
            this.newItemObj.department = this.newItemObj.department + ""
            this.newItemObj.sex = this.newItemObj.sex + ""
            this.newItemObj.status = this.newItemObj.status + ""
            this.newItemObj.id += 0
            console.log(this.newItemObj);
            // this.newItemObj.status = this.statusToNewStatus(this.newItemObj.status)
            let changeProfileStatus = await this.$http.post("/registrant/", this.newItemObj)
            this.dialogVisible = false
            if (changeProfileStatus.status == 200) {
                await this.refreshDate();
                this.dataListFilt()
                this.dataListShow = this.dataListNew.slice((this.currentPage - 1) * 30, this.currentPage * 30)
                this.dataListShowTrans();
                this.$message({ message: '修改成功', type: 'success' });

            } else {
                this.$message({ message: '修改失败, code: ' + changeProfileStatus.status + ", " + changeProfileStatus.statusText, type: 'error' });
            }
        },
        deleteItemCancle() {
            this.deleteItemVisible = false
            this.deleteItemId = -1
        },
        async deleteItem() {
            this.deleteItemVisible = false
            let msg = await this.$http.post("/registrant/delete/", {
                id: this.deleteItemId
            })
            if (msg.status == 200) {
                await this.refreshDate()
                this.dataListFilt()
                this.dataListNew = this.dataListAll
                this.dataListShow = this.dataListNew.slice((this.currentPage - 1) * 30, this.currentPage * 30)
                this.dataListShowTrans();
                this.$message({ message: '删除成功', type: 'success' });
            } else {
                this.$message({ message: '删除失败, code: ' + msg.status + ", " + msg.statusText, type: 'error' });
                // console.log();
            }
            console.log("被删除的id", this.deleteItemId);
        },
        deleteItemOpen(id) {
            this.deleteItemVisible = true
            this.deleteItemId = id
        },
        dataListFilt() {
            let dataListNew2 = JSON.parse(JSON.stringify(this.dataListAll))
            if (this.dataListFilter.id != -10) {
                dataListNew2 = JSON.parse(JSON.stringify(dataListNew2.filter((i) => {
                    if (i.id == this.dataListFilter.id) return true
                })))
                console.log("匹配id");

            }
            if (this.dataListFilter.status != -1) {
                dataListNew2 = JSON.parse(JSON.stringify(dataListNew2.filter((i) => {
                    if (i.status == this.dataListFilter.status) return true
                })))
                console.log("匹配status");

            }
            if (this.dataListFilter.name != "") {
                dataListNew2 = JSON.parse(JSON.stringify(dataListNew2.filter((i) => {
                    if (i.name.includes(this.dataListFilter.name)) return true
                })))
                console.log("匹配name");

            }
            if (this.dataListFilter.department != -10) {
                dataListNew2 = JSON.parse(JSON.stringify(dataListNew2.filter((i) => {
                    if (i.department == this.dataListFilter.department) return true
                })))
                console.log("匹配department");
                // console.log(this.dataListNew);
            }

            this.dataListNew = JSON.parse(JSON.stringify(dataListNew2))
            this.currentPageChange()
        },
        currentPageChange() {
            this.dataListShow = this.dataListNew.slice((this.currentPage - 1) * 30, this.currentPage * 30)
            this.dataListShowTrans();
            // console.log(this.dataListFilter);
        },
        async addRegistrant() {
            this.addRegistrantObj.sex = this.addRegistrantObj.sex + ""
            this.addRegistrantObj.department = this.addRegistrantObj.department + ""
            // this.addRegistrantObj.status = this.statusToNewStatus(this.addRegistrantObj.status)
            this.addDialogVisible = false
            let addRegMsg = await this.$http.post("/registrant/", this.addRegistrantObj)
            console.log("要新建的信息", this.addRegistrantObj);
            if (addRegMsg.status == 200) {
                this.$message({ message: '增加成功', type: 'success' });
                this.addRegistrantObj = {
                    "name": "",
                    "major": "",
                    "phone_number": "",
                    "email": "",
                    "department": 1,
                    "expectation": "",
                    "sex": 0
                }
                await this.refreshDate()
                this.dataListFilt()
                this.dataListShow = this.dataListNew.slice((this.currentPage - 1) * 30, this.currentPage * 30)
                this.dataListShowTrans();
            } else {
                this.$message({ message: '增加失败, code: ' + addRegMsg.status + ", " + addRegMsg.statusText, type: 'error' });
            }
        },
        statusToNewStatus(oldStatus) {
            if (oldStatus >= 0) return oldStatus
            else return -oldStatus + 5
        }
    },
    async mounted() {
        await this.refreshDate()
        this.dataListFilt()
        this.dataListShow = this.dataListNew.slice((this.currentPage - 1) * 30, this.currentPage * 30)
        this.dataListShowTrans();
        console.log(this.dataListAll);
        // console.log(this.dataListShow, this.dataListNew, this.dataListAll);
    },
    watch: {
        currentPage: {
            handler(newVal, oldVal) {
                this.currentPageChange()
                console.log("now page change to", newVal);
            }
        },
        dataListFilter: {
            deep: true,
            handler(newVal, oldVal) {
                this.dataListFilt()
            }
        }
    },

}
</script>

<style scoped>
.demo-table-expand {
    font-size: 0;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 0px;
    padding-bottom: 0px;
}

/* .demo-table-expand:hover{
    background-color: rgb(245, 247, 250);
  } */
.demo-table-expand label {
    width: 90px;
    color: #99a9bf !important;
}

.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}

.main-table {
    /* position: relative;
    width: 100%; */
    /* height: 100% */
}

.main-table-eltable {
    width: 100%;
}

.main-top {
    /* width: 100%; */
    position: relative;
    display: flex;
    justify-content: right;
}

.main-top-title {
    margin-left: 50px;
    font-size: 18px;
}

.main-top-button {
    margin-right: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.registrant {
    width: calc(100% - 5px);
}

.main-top-input {
    width: 200px;
    margin-top: 10px;
    margin-right: 10px;
}

.main-top-select {
    margin-top: 10px;
    margin-right: 10px;
}

.main-top2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
