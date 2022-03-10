<template>
  <div class="contactRecord">
    <div class="header">
      <van-icon
       class="back"
       name="arrow-left"
       @click="$router.go(-1)">
      </van-icon>
    </div>

    <van-form @submit="onSubmit">
      <QuestionModule>
        <QuestionModuleItem title="确诊或疑似病例名字">
          <van-field
            placeholder="请输入确诊或疑似病例姓名"
            :rules='[{required: true}]'
          >
          </van-field>
        </QuestionModuleItem>

        <QuestionModuleItem title="确诊或疑似病例身份证号">
          <van-field
            placeholder="请输入确诊或疑似病例身份证号"
            :rules='[{required: true}]'
          >
          </van-field>
        </QuestionModuleItem>

        <QuestionModuleItem title="确诊或疑似病例关系">
          <van-field
            placeholder="请输入确诊或疑似病例关系"
            :rules='[{required: true}]'
          >
          </van-field>
        </QuestionModuleItem>

        <QuestionModuleItem title="接触时间">
          <van-field
            readonly
            clickable
            @click="contactTime=true"
            placeholder="请输入接触时间"
            :rules='[{required: true}]'
          >
          </van-field>
          <van-popup v-model="contactTime" position="bottom">
            <van-datetime-picker
             title="请选择"
             :max-date='maxDate'
             v-model="maxDate"
             type='date'>

            </van-datetime-picker>
          </van-popup>
        </QuestionModuleItem>

        <QuestionModuleItem title="情况描述">
          <van-field
            placeholder="请输入情况描述"
            :rules='[{required: true}]'
          >
          </van-field>
        </QuestionModuleItem>

      </QuestionModule>
      <div>
        <van-button block type='info'>提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import QuestionModule from "@/components/QuestionModule";
import QuestionModuleItem from "@/components/QuestionModuleItem";
export default {
  name: "ContactRecord",
  components: {
    QuestionModule,
    QuestionModuleItem,
  },
  data() {
    return {
      contactTime:false,
      maxDate:new Date()
    }
  },
  methods: {
    onSubmit(values) {
      console.log(values);
    },
  },
};
</script>

<style scoped lang='less'>
.contactRecord {
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  position: relative;
  padding-top: 60px;
  .header {
    position: fixed;
    width: 100%;
    height: 40px;
    line-height: 40px;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 10;
    .back {
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
      font-size: 16px;
    }
  }
  /deep/ .van-cell {
    padding: 10px 0;
  }
}
</style>