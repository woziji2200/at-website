<template>
    <div id="app">
        <el-dialog title="编辑报名信息" :visible.sync="dialogVisible" width="50%">
            <el-form ref="form" :model="newItemObj" label-width="80px">
                <el-form-item label="id">
                    <el-input v-model="newItemObj.id"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="newItemObj.name"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-select  v-model="sexLists[newItemObj.sex]">
                        <el-option label="男" value="0"></el-option>
                        <el-option label="女" value="1"></el-option>
                        <el-option label="未知" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="爱好">
                    <el-input v-model="newItemObj.major"></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model="newItemObj.phone_number"></el-input>
                </el-form-item>
                <el-form-item label="部门">
                    <el-select v-model="departmentLists[newItemObj.department]">
                        <el-option label="APP开发" value="1"></el-option>
                        <el-option label="Web开发" value="2"></el-option>
                        <el-option label="程序开发" value="3"></el-option>
                        <el-option label="游戏开发" value="4"></el-option>
                        <el-option label="UI设计" value="5"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="期望">
                    <el-input v-model="newItemObj.expectation"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <el-table :data="listNew" :border="true" style="width: 100%" height="100%">
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
                            <span>{{ sexLists[props.row.sex] }}</span>
                        </el-form-item>
                        <el-form-item label="爱好">
                            <span>{{ props.row.major }}</span>
                        </el-form-item>
                        <el-form-item label="手机号">
                            <span>{{ props.row.phone_number }}</span>
                        </el-form-item>
                        <el-form-item label="部门">
                            <span>{{ departmentLists[props.row.department] }}</span>
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
            <el-table-column prop="major" label="爱好" width="80">
            </el-table-column>
            <el-table-column prop="phone_number" label="手机号" width="120">
            </el-table-column>
            <el-table-column prop="department" label="部门" width="120">
            </el-table-column>
            <el-table-column prop="expectation" label="期望">
            </el-table-column>
            <el-table-column fixed="right" label="操作">
                <template slot-scope="scope">
                    <el-button type="text" @click="openDialog(scope.row)" size="small">编辑</el-button>
                    <el-button type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>


    </div>
</template>
<script>
export default {

    data() {
        return {
            departmentLists:["APP开发","Web开发","程序开发","游戏开发","UI设计"],
            sexLists:["男","女","保密"],
            listNew: [{
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
            }],
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
            }
        }
    },
    methods: {
        openDialog(obj) {
            this.dialogVisible = true
            this.newItemObj = obj
            console.log(obj);
        },
        async refreshDate(){
            this.listNew=await this.$http.get("/registrant/",{})
        }
    },
    async mounted() {

        await this.refreshDate()
        console.log(this.$http);
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
</style>
