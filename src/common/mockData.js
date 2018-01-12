
// 使用 Mock
var Mock = require('mockjs');

//场景管理列表
Mock.mock(/.*?\/moment\/queryMomByStatus/, 'post', function (options) {
  return {
    "data":[
      {
        id:randomNum(3),
        name: '场景'+randomNum(3),
        clazzType: [0],
        auditStatus: '2',
        creator: 'creator'+randomNum(3),
        startDate: '2016/05/03',
        endDate: '2016/05/03',
        description:'描述',
        hasDateTag: '0'
      },{
        id:randomNum(3),
        name: '场景'+randomNum(3),
        clazzType: [0,1],
        auditStatus: '2',
        creator: 'creator'+randomNum(3),
        startDate: '2016/05/03',
        endDate: '2016/05/03',
        description:'描述',
        hasDateTag: '0'
      },{
        id:randomNum(3),
        name: '场景'+randomNum(3),
        clazzType: [1],
        auditStatus: '1',
        creator: 'creator'+randomNum(3),
        startDate: '2016/05/03',
        endDate: '2016/05/03',
        description:'描述',
        hasDateTag: '0'
      },{
        id:randomNum(3),
        name: '场景'+randomNum(3),
        clazzType: [0,1],
        auditStatus: '2',
        creator: 'creator'+randomNum(3),
        startDate: '2016/05/03',
        endDate: '2016/05/03',
        description:'描述',
        hasDateTag: '0'
      },{
        id:randomNum(3),
        name: '场景'+randomNum(3),
        clazzType: [1],
        auditStatus: '2',
        creator: 'creator'+randomNum(3),
        startDate: '2016/05/03',
        endDate: '2016/05/03',
        description:'描述',
        hasDateTag: '0'
      },{
        id:randomNum(3),
        name: '场景'+randomNum(3),
        clazzType: [0,1],
        auditStatus: '3',
        creator: 'creator'+randomNum(3),
        startDate: '2016/05/03',
        endDate: '2016/05/03',
        description:'描述',
        hasDateTag: '0'
      },{
        id:randomNum(3),
        name: '场景'+randomNum(3),
        clazzType: [0,1],
        auditStatus: '4',
        creator: 'creator'+randomNum(3),
        startDate: '2016/05/03',
        endDate: '2016/05/03',
        description:'描述',
        hasDateTag: '0'
      },{
        id:randomNum(3),
        name: '场景'+randomNum(3),
        clazzType: [0,1],
        auditStatus: '5',
        creator: 'creator'+randomNum(3),
        startDate: '2016/05/03',
        endDate: '2016/05/03',
        description:'描述',
        hasDateTag: '0'
      },
    ],
    "statusCode":200
  }
});

//审核管理
Mock.mock(/.*?\/auditor\/list/, 'post', function (options) {
  return {
    "data":[
      {
        id:randomNum(3),
        name: '审核'+ randomNum(3),
        auditStatus: '1',
        creator: 'apptest01',
        startDate: '2016/05/03',
        endDate: '2016/05/03',
        description:'描述',
        hasDateTag: '0'
      },{
        id:randomNum(3),
        name: '审核'+ randomNum(3),
        auditStatus: '1',
        creator: 'apptest01',
        startDate: '2016/05/03',
        endDate: '2016/05/03',
        description:'描述',
        hasDateTag: '0'
      },{
        id:randomNum(3),
        name: '审核'+ randomNum(3),
        auditStatus: '1',
        creator: 'apptest01',
        startDate: '2016/05/03',
        endDate: '2016/05/03',
        description:'描述',
        hasDateTag: '0'
      },{
        id:randomNum(3),
        name: '审核'+ randomNum(3),
        auditStatus: '1',
        creator: 'apptest01',
        startDate: '2016/05/03',
        endDate: '2016/05/03',
        description:'描述',
        hasDateTag: '0'
      }
    ],
    "statusCode":200
  }
});
//场景管理-投放管理-优先级配置列表
Mock.mock(/.*?\/moment\/delivery\/priorityList/, 'post', function (options) {
  return {
    "data":[
      {
        id:randomNum(3),
        name: '场景'+ randomNum(3),
        auditStatus: '3',
        creator: 'apptest01',
        description:'描述',
        priority: 1
      },{
        id:randomNum(3),
        name: '场景'+ randomNum(3),
        auditStatus: '3',
        creator: 'apptest01',
        description:'描述',
        priority: 2
      },{
        id:randomNum(3),
        name: '场景'+ randomNum(3),
        auditStatus: '4',
        creator: 'apptest01',
        description:'描述',
        priority: 3
      },{
        id:randomNum(3),
        name: '场景'+ randomNum(3),
        auditStatus: '3',
        creator: 'apptest01',
        description:'描述',
        priority: 5
      }
    ],
    "statusCode":200
  }
});


//用户列表
Mock.mock(/api\/user\/list/, 'post', function (options) {
  var list = [];
  for(let i=0;i<60;i++){
    list.push({
      "id": 'id'+i,
      "loginName": "fazvzbwe2阿发fafa".slice(0,Math.random()*15),
      "cnName": "fazvzbwe2阿发fafa".slice(0,Math.random()*15),
      "mobile": 182+(Math.random()*100000000).toFixed(0),
      "mail": (Math.random()*10000).toFixed(0)+"@qq.com",
      "access": i%4
    })
  }
    
  return {
    "data": {
      "total": 4,
      "list": list
    },
    "message": "成功获取用户列表",
    "statusCode": 200
  }
});
Mock.mock(/api\/user\/add/, 'post', function (options) {
  return {
    "message": "成功添加用户",
    "statusCode": 200
  }
});
Mock.mock(/api\/user\/modify/, 'post', function (options) {
  return {
    message: "成功修改用户信息",
    statusCode: 200,
  }
});
Mock.mock(/api\/user\/delete/, 'post', function (options) {
  return {
    message: "成功删除用户",
    statusCode: 200,
  }
});

//报表管理
Mock.mock(/api\/table\/list/, 'post', function (options) {
  return {
    data: {
      total: 5,
      list: [{
          id: 1,
          name: '测试报表',
          url: 'http://tableau.saic-gm.com/t/CCX/views/iMoment/iMoment?:embed=y&:showAppBanner=false&:showShareOptions=true&:display_count=no&:showVizHome=no',
        },
        {
          id: 2,
          name: 'smart',
          url: 'www.smart.com',
        },
        {
          id: 3,
          name: 'intelegent',
          url: 'www.spring.com',
        },
        {
          id: 4,
          name: '现代智能',
          url: 'www.ai.com',
        },
        {
          id: 5,
          name: '犀利',
          url: 'www.xili.com',
        },

      ]
    },
    message: "成功获取报表列表",
    statusCode: 200,
  }
});
Mock.mock(/api\/table\/add/, 'post', function (options) {
  return {
    message: "成功添加",
    statusCode: 200,
  }
});
Mock.mock(/api\/table\/modify/, 'post', function (options) {
  return {
    message: "成功修改",
    statusCode: 200,
  }
});
Mock.mock(/api\/table\/delete/, 'post', function (options) {
  return {
    message: "成功删除",
    statusCode: 200,
  }
});
//标签管理
Mock.mock(/api\/label\/list/, 'post', function (options) {
  return {
    data: {
      total: 5,
      list: [{
          id: 1,
          startDate: '1515513600000',
          endDate: '1505513600000',
          name: '国庆节'
        },
        {
          id: 1,
          startDate: '1515511600000',
          endDate: '1515523600000',
          name: '妇女节'
        },
        {
          id: 1,
          startDate: '1415513600000',
          endDate: '1515512000000',
          name: '元旦节'
        }
      ]
    },
    message: "成功获取列表",
    statusCode: 200,
  }
});
Mock.mock(/api\/label\/add/, 'post', function (options) {
  return {
    message: "成功添加",
    statusCode: 200,
  }
});
Mock.mock(/api\/label\/modify/, 'post', function (options) {
  return {
    message: "成功修改",
    statusCode: 200,
  }
});
Mock.mock(/api\/label\/delete/, 'post', function (options) {
  return {
    message: "成功删除",
    statusCode: 200,
  }
});
//系统配置
Mock.mock(/api\/system\/frequency\/config/, 'post', function (options) {
  return {
    message: "成功配置",
    statusCode: 200,
  }
});
Mock.mock(/api\/system\/frequency\/fetch/, 'post', function (options) {
  return {
    wechat:{
      frequency:	3,
      maxNumberPerMonth: 2,
    },
    sms:{
      frequency:1,
      maxNumberPerMonth: 2,
    },
    message: "成功配置",
    statusCode: 200,
  }
});
Mock.mock(/api\/system\/update\/iconsumer/, 'post', function (options) {
  return {
    message: "成功配置",
    statusCode: 200,
  }
});
Mock.mock(/api\/system\/update\/wifi/, 'post', function (options) {
  return {
    message: "成功配置",
    statusCode: 200,
  }
});
//场景分类
Mock.mock(/api\/classified_scene\/list/, 'post', function (options) {
  return {
    data: {
      total: 5,
      list: [{
          id: 1,
          momentCode: '1231QDAS',
          momentName: '场景1'
        },
        {
          id: 2,
          momentCode: 'adafKM1',
          momentName: '场景21'
        },
        {
          id: 3,
          momentCode: '1231QDAS',
          momentName: '场景451'
        },
        {
          id: 4,
          momentCode: '1231QDAS',
          momentName: '场景12'
        },
        {
          id: 5,
          momentCode: '1231QDAS',
          momentName: '场景12'
        },
      ]
    },
    message: "成功获取列表",
    statusCode: 200,
  }
});
Mock.mock(/api\/classified_scene\/add/, 'post', function (options) {
  return {
    message: "成功添加",
    statusCode: 200,
  }
});
Mock.mock(/api\/classified_scene\/modify/, 'post', function (options) {
  return {
    message: "成功修改",
    statusCode: 200,
  }
});
Mock.mock(/api\/classified_scene\/delete/, 'post', function (options) {
  return {
    message: "成功删除",
    statusCode: 200,
  }
});
//渠道列表
Mock.mock(/api\/channel\/list/,'post',function(options){
  return {
    data: [{
          id: 0,
          name: '短信',
          type:0,
        },
        {
          id: 2,
          name: '微信',
          type:1,
        },
        {
          id: 1,
          name: '安吉星',
          type:2,
        }
      ],
    message: "成功获取报表列表",
    statusCode: 200,
  }
})
//1.推荐位策略查询
Mock.mock(/api\/strategy\/query/,'post',function(options){
  return {
    data:{
      name: '策略名1',
      description: '描述',
      people:  1,
      peopleName:'人群标签1',
      group1: {
        id:23,
        percentage:20,
        groupType:0,
        artificial:{
          classed1:2,
          classed2:1,
          classed1Name:'1级分类名称',
          classed2Name:'#二级分类名称',
          description: '#详情描述',
        },
      },
      group2: {
        id:12,
        groupType:1,
        percentage:80,
        smart:[
          {
            percentage:20,
            id:6,
            name:'算法名称1112212'
          },
          {
            percentage:40,
            id:7,
            name:'算法名称12121212'
          }
        ]
      },
    },
    message: "成功获取报表列表",
    statusCode: 200,
  }
})
//1.推荐位策略拷贝
Mock.mock(/api\/strategy\/copy/,'post',function(options){
  return {
    message: "成功拷贝推荐位策略",
    statusCode: 200,
  }
})
//1.人群
Mock.mock(/api\/strategy\/people\/list/,'post',function(options){
  return {
    data: [{
          id: 1,
          name: '人群1',

        },
        {
          id: 2,
          name: '人群2',

        },
        {
          id: 3,
          name: '人群3',

        },
        {
          id: 4,
          name: '人群4',
        }
      ],
    message: "成功获取报表列表",
    statusCode: 200,

  }
})
//一级分类
Mock.mock(/api\/strategy\/specified1\/list/,'post',function(options){
  return {
    data: [{
          id: 1,
          name: '分类1',

        },
        {
          id: 2,
          name: '分类1-1',

        },
        {
          id: 3,
          name: '分类1-2',

        },
        {
          id: 4,
          name: '分类1-3',
        }
      ],
    message: "成功获取报表列表",
    statusCode: 200,

  }
})
//二级分类
Mock.mock(/api\/strategy\/specified2\/list/,'post',function(options){
  return {
    data: [{
          id: 1,
          name: '分类2-1',

        },
        {
          id: 2,
          name: '分类2-2',

        },
        {
          id: 3,
          name: '分类2-3',

        }
      ],
    message: "成功获取报表列表",
    statusCode: 200,

  }
})
//策略
Mock.mock(/api\/strategy\/list/,'post',function(options){
  return {
    data: {
      total: 5,
      list: [{
          id: 1,
          name: 'important',
          description: '重要的策略',
          type:0
        },
        {
          id: 1,
          name: 'important',
          description: '重要的策略',
          type:1
        },
        {
          id: 1,
          name: 'important',
          description: '重要的策略',
          type:0
        },
        {
          id: 1,
          name: 'important',
          description: '重要的策略',
          type:1
        }
      ]
    },
    message: "成功获取报表列表",
    statusCode: 200,

  }
})
//2.新建
Mock.mock(/api\/strategy\/add/,'post',function(options){
  console.log(options);
  return {
    message:'成功',
    statusCode:200
  }
})
//3.删除
Mock.mock(/api\/strategy\/delete/,'post',function(options){
  console.log(options);
  return {
    message:'成功删除推荐位策略',
    statusCode:200
  }
})
//4.修改
Mock.mock(/api\/strategy\/modify/,'post',function(options){
  console.log(options);
  return {
    message:'成功',
    statusCode:200
  }
})
//2.分组算法
Mock.mock(/api\/strategy\/group_algorithm\/list/,'post',function(options){
  return {
    data:[{
          id: 1,
          name: 'group_算法1',

        },
        {
          id: 2,
          name: 'group_算法2',

        },
        {
          id: 3,
          name: 'group_算法3',
        }
      ],
    message: "成功获取算法列表",
    statusCode: 200,
  }
})
//算法管理
//1.列表
Mock.mock(/api\/algorithm\/list/,'post',function(options){
  return {
    data: {
      total: 5,
      list: [{
          id: 1,
          name: '算法test',
          description: '用于甄别不同用户',
          algKey: '精准',
        },
        {
          id: 2,
          name: '算法test2',
          description: '用户画像',
          algKey: '微妙',
        },
        {
          id: 3,
          name: '算法test3',
          description: '用于甄别不同用户',
          algKey: '精准',
        },
        {
          id: 4,
          name: '算法test4',
          description: '用户画像',
          algKey: '精准',
        },
        {
          id: 5,
          name: '算法test5',
          description: '用于甄别不同用户',
          algKey: '精准',
        },
      ]
    },
    message: "成功获取算法列表",
    statusCode: 200,
  }
})

//2.新建
Mock.mock(/api\/algorithm\/add/,'post',function(options){
  console.log(options);
  return {
    message:'成功新建',
    statusCode:200
  }
})
//3.删除
Mock.mock(/api\/algorithm\/delete/,'post',function(options){
  console.log(options);
  return {
    message:'成功删除',
    statusCode:200
  }
})
//4.修改
Mock.mock(/api\/algorithm\/modify/,'post',function(options){
  console.log(options);
  return {
    message:'成功修改',
    statusCode:200
  }
})
//模板管理
//1.列表
Mock.mock(/api\/template\/list/,'post',function(options){
  return {
    data: {
      total: 2,
      list: [
        {
          content:"而且", creator:null,crt:1515126635000,id: 5,name:"何泽兵测试",
          positionName:"雪佛兰微信消息",
          status:0,
          templateId:"fagagg",
          tmBrandId:1,
          tmMsgPositionId:2,
          udt:null,
        },
        {
          content:"测试", creator:null,crt:1515126635000,id: 6,name:"测试",
          positionName:"安吉星信息",
          status:0,
          templateId:"",
          tmBrandId:1,
          tmMsgPositionId:1,
          udt:null,
        },
      ]
    },
    message: "成功获取模板列表",
    statusCode: 200,
  }
})
//2.新建
Mock.mock(/api\/template\/add/,'post',function(options){
  console.log(options);
  return {
    message:'成功新建',
    statusCode:200
  }
})
//3.删除
Mock.mock(/api\/template\/delete/,'post',function(options){
  console.log(options);
  return {
    message:'成功删除',
    statusCode:200
  }
})
//4.修改
Mock.mock(/api\/template\/modify/,'post',function(options){
  console.log(options);
  return {
    message:'成功修改',
    statusCode:200
  }
})
//活动模板
//1.列表
Mock.mock(/api\/activity\/list/,'post',function(options){
  return {
    data: {
      total: 2,
      list: [
        {
          content:"intele", creator:null,crt:1515126635000,id: 1,
          name:'阿帆',
          status:0,
          tmBrandId:0,
          udt:null,
        },
        {
          name:'test',
          content:"smart", creator:null,crt:1515126635000,id: 2,
          status:0,
          tmBrandId:1,
          udt:null,
        },
        {
          name:'ai',
          content:"智能测试系统", creator:null,crt:1515126635000,id: 3,
          status:0,
          tmBrandId:2,
          udt:null,
        },
        {
          name:'love',
          content:"是啊测试随影", creator:null,crt:1515126635000,id: 4,
          status:0,
          tmBrandId:1,
          udt:null,
        }
      ]
    },
    message: "成功获取模板列表",
    statusCode: 200,
  }
})
//2.新建
Mock.mock(/api\/activity\/add/,'post',function(options){
  console.log(options);
  return {
    message:'成功新建',
    statusCode:200
  }
})
//3.删除
Mock.mock(/api\/activity\/delete/,'post',function(options){
  console.log(options);
  return {
    message:'成功删除',
    statusCode:200
  }
})
//4.修改
Mock.mock(/api\/activity\/modify/,'post',function(options){
  console.log(options);
  return {
    message:'成功修改',
    statusCode:200
  }
})



//公共函数，用来创建n位随机数
function randomNum(bites){
  var zeros = '1';
  for(var i=0;i<bites;i++){
    zeros += '0';
  }
  return Math.random().toFixed(bites)*zeros
}
