<template>
    <div class="login">
        <div class="container">
            <h4>超级管理系统管理系统（小飞侠v10）</h4>
            <el-form ref="ruleFormRef" :model="formData" :rules="rules" label-width="80px" >
                <el-form-item label="账号" prop="account">
                    <el-input v-model="formData.account" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="formData.password" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleLogin()" style="width:100%" :loading="loading">
                        登录
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
    account: string
    password: string
}
const router = useRouter()
const loading = ref(false)
const ruleFormRef = ref<FormInstance>()
const formData = reactive<RuleForm>({
    account: 'admin',
    password: '123456',
})

const rules = reactive<FormRules<RuleForm>>({
    account: [
        { required: true, message: '请输入账号', trigger: 'blur' },
    ],
    password: [
        {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
        },
    ],
})
const handleLogin = async () => {
    if (!ruleFormRef.value) return
    await ruleFormRef.value?.validate((valid) => {
        if (valid) {
            loading.value = true
            setTimeout(() => {
                router.push({
                    path: '/main-content'
                })
                loading.value = false
            }, 500)
        }
    })
}
</script>
<style lang="scss" scoped>
.login {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(0deg);

    .container {
        width: 350px;

        h4 {
            margin-left: 80px;
        }
    }
}
</style>