import { parseTime } from '@/utils/dateFormat'
export default {
  data() {
    return {
      Starting: false,
      goTime: false,
      goDestination: false,
      goArriveTime: false,
      stayTime: false,
    }
  },
  methods: {
    startingVal(value){
      // console.log(value)
      this.departPlace = value
      this.Starting = false
    },
    goDestinationVal(value){
      this.destination = value
      this.goDestination = false
    },
    goTimeVal(value){
      // console.log(value)
      if(value){
        this.departTime = parseTime(value,'{y}-{m}-{d}')
      }else{
        this.departTime = undefined
      }
      this.goTime = false
    },
    goArriveTimeVal(value){
      // console.log(value)
      if(value){
        this.arriveTime = parseTime(value,'{y}-{m}-{d}')
      }else{
        this.arriveTime = undefined
      }
      this.goArriveTime = false
    }
  },
}