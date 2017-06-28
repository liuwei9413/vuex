<template>
  <div>
    <div v-for="(item, index) in formData">
      <span>{{ item.elementName }}：</span><input type="text" v-if="item.elementType === 'text'" v-model="item.elementValue">
    </div>
    <div><button></button></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        formData: [
          {
            "id": 1,
            "parentId": 0,
            "dimenId": 2,
            "elementName": "名称",
            "elementKey": "name",
            "elementValue": "刘伟",
            "elementType": "text",
            "minLength": "2",
            "maxLength": "30",
            "min": "2",
            "max": "30",
            "showIndex": 0,
            "delFlag": 0,
            "mustWrite": 0,
            "required":true,
            "childList": []
          },
          {
            "id": 3,
            "parentId": 0,
            "dimenId": 2,
            "elementName": "次数",
            "elementKey": "times",
            "elementValue": "10",
            "elementType": "text",
            "showIndex": 0,
            "delFlag": 0,
            "mustWrite": 0,
            "required":true,
            "childList": []
          },
          {
            "id": 7,
            "parentId": 0,
            "dimenId": 2,
            "elementName": "完成情况",
            "elementKey": "performance",
            "elementType": "radio",
            "showIndex": 0,
            "delFlag": 0,
            "mustWrite": 0,
            "required":true,
            "childList": [
              {
                "elementName": "已完成",
                "elementKey": "1",
                "showIndex": 0,
                "delFlag": 0,
                "mustWrite": 0,
                "childList": []
              },
              {
                "elementName": "未完成",
                "elementKey": "0",
                "showIndex": 0,
                "delFlag": 0,
                "mustWrite": 0,
                "childList": []
              }
            ]
          },
          {
            "id": 2,
            "parentId": 0,
            "dimenId": 2,
            "elementName": "起止时间",
            "elementKey": "startAndEndTime",
            "elementType": "dateBetween",
            "min": "2017-06-07 11:04:48",
            "max": "2017-07-07 11:04:48",
            "showIndex": 0,
            "delFlag": 0,
            "mustWrite": 0,
            "required":true,
            "childList": [
              {
                "elementName": "",
                "elementKey": "0",
                "showIndex": 0,
                "delFlag": 0,
                "mustWrite": 0,
                "childList": []
              },
              {
                "elementName": "",
                "elementKey": "1",
                "showIndex": 0,
                "delFlag": 0,
                "mustWrite": 0,
                "childList": []
              }
            ]
          }
        ]
      }
    },
    methods: {
      submit () {
        // 在这里可以拿到用户输入的值，通过v-model赋的值
        // 我在这里就直接取值了，这里的麻烦之处就在于可能需要遍历formData来取到对应的值
        // 可以使用数组的find方法
      }
    },
    mounted() {
      var keys = ['name', 'age'];
      const arr = this.formData.map( item => {
        return item.elementValue
      } );
      console.log(arr);
    }
  }

</script>