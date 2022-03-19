<template>
  <div class="trip">
    <div class="header">
      <van-icon
       class="back"
       name="arrow-left"
       @click="$router.go(-1)">
      </van-icon>
    </div>
    <van-form scroll-to-error @submit="onSubmit">
      <QuestionModule title="行程信息">
        <QuestionModuleItem title="出发地" required>
          <van-field
            readonly
            clickable
            name='departPlace'
            v-model="departPlaceVal"
            :rules='[{required: true}]'
            @click="Starting=true"
            placeholder="请选择出发地"
          >
          </van-field>
          <van-popup v-model="Starting" position="bottom">
            <van-area 
              title="请选择"
              @cancel='Starting=false'
              @confirm='startingVal'
              :area-list="areaList"/>
          </van-popup>
        </QuestionModuleItem>

        <QuestionModuleItem title="出发日期" required>
          <van-field
            readonly
            clickable
            name='departTime'
            v-model="departTime"
            :rules='[{required: true}]'
            @click="goTime=true"
            placeholder="请选择你的出发日期"
          >
          </van-field>
          <van-popup v-model="goTime" position="bottom">
            <van-datetime-picker
             title="请选择"
             v-model="maxDate"
             :max-date='maxDate'
             @confirm='goTimeVal'
             @cancel='goTime=false'
             type='date'>

            </van-datetime-picker>
          </van-popup>
        </QuestionModuleItem>

        <QuestionModuleItem title="目的地" required>
          <van-field
            readonly
            clickable
            name='destination'
            v-model="destinationVal"
            :rules='[{required: true}]'
            @click="goDestination=true"
            placeholder="请选择目的地"
          >
          </van-field>
          <van-popup v-model="goDestination" position="bottom">
            <van-area
             title="请选择"
             @cancel='goDestination=false'
             @confirm='goDestinationVal'
             :area-list="areaList"/>
          </van-popup>
        </QuestionModuleItem>

        <QuestionModuleItem title="抵达日期" required>
          <van-field
            readonly
            clickable
            name='arriveTime'
            v-model="arriveTime"
            :rules='[{required: true}]'
            @click="goArriveTime=true"
            placeholder="请选择抵达日期"
          >
          </van-field>
          <van-popup v-model="goArriveTime" position="bottom">
            <van-datetime-picker
            title="请选择"
             type='date'
             v-model="maxDate"
             :max-date='maxDate'
             @cancel='goArriveTime=false'
             @confirm='goArriveTimeVal'
             >

            </van-datetime-picker>
          </van-popup>
        </QuestionModuleItem>
      </QuestionModule>

      <QuestionModule title="出行交通方式(必选)">
        <van-field
          name="vehicle"
          style="padding: 0"
          :rules='[{required: true,message:"选择出行方式"}]'
        >
          <template #input>
            <van-radio-group v-model="traffic" icon-size="18" style="width:100%;">
              <van-radio
                :name="index"
                v-for="(item, index) in trafficType"
                :key="item"
              >
                <div class="checkItem">
                  <div style="fontSize:18px;padding:10px 0" class="title">{{ item }}</div>
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
            v-model="vehicleNumber"
            name='vehicleNumber'
            :rules='[{required: true}]'> 
          </van-field>
        </QuestionModuleItem>

        <QuestionModuleItem title="目的地停留天数" required>
          <van-field
            placeholder="请输入目的地停留天数" 
            clickable
            name='remainDays'
            v-model="remainDays"
            :rules='[{required: true}]'
            >
          </van-field>
        </QuestionModuleItem>
        
        <QuestionModuleItem title="居住地" required>
          <van-field
          name='livePlace'
          v-model='livePlace'
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
import formMixin from './mixins/formMixin'
import popupMixin from './mixins/popupMixin'
import { areaList } from "@/utils/area";
export default {
  name: "AddTrip",
  data() {
    return {
      trafficType,
      traffic: '',
      areaList:'',
      maxDate:new Date()
    };
  },
  components: {
    QuestionModule,
    QuestionModuleItem,
  },
  mixins:[formMixin,popupMixin],
  created() {
    this.areaList = areaList
  },
  methods: {
    onSubmit(values) {
      // console.log(values)
      this.$store.dispatch('getTripList',values)
      this.$router.go(-1)
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
  padding-top: 40px;
  .header{
    position: fixed;
    width: 100%;
    height: 40px;
    line-height: 40px;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 10;
    .back{
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
      font-size: 16px;

    }
  }
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