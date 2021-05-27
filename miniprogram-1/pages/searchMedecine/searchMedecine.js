
Page({
    data: {
      isSearch:true,
      isClear:false,
      val:"",
      medecine:[
        {name:"1",
         time:"2",
        intro:"c",
        number:45},
        {
          name:"2",
         time:"2",
        intro:"c",
        number:45
        },
        {name:"3",
        time:"2",
       intro:"c",
       number:45}
      ]
    },
    getinput:function(e){
      this.setData({
         val:e.detail.value
      })
      if(this.data.val.length>0){
        this.setData({
          isSearch:false,
        isClear:true
        })
      } else{
      this.setData({
        isSearch:true,
        isClear:false
      
    })}},
    cleartap:function(e){
      this.setData({
        val:"",
        isSearch:true,
      isClear:false
      })
    },
    onLoad() {
       
    }
});
