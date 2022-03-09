<template>
  <div class="trip">
    <van-form @submit="onSubmit">
      <QuestionModule title="行程信息">
        <QuestionModuleItem title="出发地" required>
          <van-field
            readonly
            clickable
            :rules='[{required: true}]'
            @click="Starting=true"
            placeholder="请选择出发地"
          >
          </van-field>
          <van-popup v-model="Starting" position="bottom">
            <van-area title="请选择" />
          </van-popup>
        </QuestionModuleItem>

        <QuestionModuleItem title="出发日期" required>
          <van-field
            readonly
            clickable
            :rules='[{required: true}]'
            @click="goTime=true"
            placeholder="请选择你的出发日期"
          >
          </van-field>
          <van-popup v-model="goTime" position="bottom">
            <van-area title="请选择" />
          </van-popup>
        </QuestionModuleItem>

        <QuestionModuleItem title="目的地" required>
          <van-field
            readonly
            clickable
            :rules='[{required: true}]'
            @click="goDestination=true"
            placeholder="请选择目的地"
          >
          </van-field>
          <van-popup v-model="goDestination" position="bottom">
            <van-area title="请选择" />
          </van-popup>
        </QuestionModuleItem>

        <QuestionModuleItem title="抵达日期" required>
          <van-field
            readonly
            clickable
            :rules='[{required: true}]'
            @click="arriveTime=true"
            placeholder="请选择抵达日期"
          >
          </van-field>
          <van-popup v-model="arriveTime" position="bottom">
            <van-area title="请选择" />
          </van-popup>
        </QuestionModuleItem>
      </QuestionModule>

      <QuestionModule title="出行交通方式(必选)">
        <van-field
          name="liveType"
          style="padding: 0"
          :rules='[{required: true,message:"选择出行方式"}]'
        >
          <template #input>
            <van-radio-group v-model="traffic" icon-size="18" style="width:100%">
              <van-radio
                :name="index"
                v-for="(item, index) in trafficType"
                :key="item"
              >
                <div class="checkItem">
                  <div class="title">{{ item }}</div>
                </div>
              </van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <QuestionModuleItem
          style="margin-top: 30px"
          
          title="乘坐航班车次或车牌号码及座位号(没有填无)"
          required
        >
          <van-field
            placeholder="请输入"
            :rules='[{required: true}]'> 
          </van-field>
        </QuestionModuleItem>

        <QuestionModuleItem title="目的地停留天数">
          <van-field
            placeholder="请输入目的地停留天数" 
            readonly 
            clickable
            
            @click="stayTime=true"
            >
          </van-field>
          <van-popup v-model="stayTime" position="bottom">
              <van-area title="请选择" />
          </van-popup>
        </QuestionModuleItem>
        
        <QuestionModuleItem title="居住地" required>
          <van-field
          :rules='[{required: true}]'
          type='textarea'
          placeholder="请详细说明到达目标地后的居住地，如酒店名称，住宅地址等"
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
import { trafficType } from "./consts";
export default {
  name: "AddTrip",
  data() {
    return {
      Starting: false,
      goTime:false,
      goDestination:false,
      arriveTime:false,
      stayTime:false,
      trafficType,
      traffic: '',
    };
  },
  components: {
    QuestionModule,
    QuestionModuleItem,
  },
  methods: {
    onSubmit(values) {
      console.log(values);
    },
    editPopup() {
      this.show = true;
    },
  },
};
</script>

<style scoped lang='less'>
.trip {
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  /deep/ .van-cell {
    padding: 10px;
  }
  /deep/ .van-radio {
    padding: 10px 0;
    border-bottom: 1px solid #e6e6e6;
  }
  /deep/ .van-checkbox {
    padding: 10px 0;
    border-bottom: 1px solid #e6e6e6;
  }
  .checkItem {
    .title {
      font-size: 16px;
      font-weight: 400;
    }
    .text {
      color: #bebebe;
    }
  }
}
</style>