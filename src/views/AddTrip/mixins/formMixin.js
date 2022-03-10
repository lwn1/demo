export default{
  data() {
    return {
      departPlace:undefined,
      departTime:undefined,
      destination:undefined,
      arriveTime:undefined,
      vehicle:undefined,
      vehicleNumber:undefined,
      remainDays:undefined,
      livePlace:undefined
    }
  },
  computed:{
    departPlaceVal(){
      if(this.departPlace){
        const val = this.departPlace.map(index => index.name).join('-')
        // console.log(val)
        return val
      }else{
        return undefined
      }
    },
    destinationVal(){
      if(this.destination){
        const val = this.destination.map(index => index.name).join('-')
        return val
      }else{
        return undefined
      }
    }  
  }
}