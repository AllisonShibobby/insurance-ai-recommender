export const formConfig = [
  {
    "label": "年龄段",
    "name": "age_group",
    "type": "select",
    "options": [
      {
        "label": "18-24",
        "value": "18-24"
      },
      {
        "label": "25-34",
        "value": "25-34"
      }
    ],
    "required": true,
    "tooltip": "用户的年龄区间"
  },
  {
    "label": "职业类型",
    "name": "job_type",
    "type": "select",
    "options": [
      {
        "label": "企业员工",
        "value": "企业员工"
      }
    ],
    "required": true,
    "tooltip": "用户的职业身份"
  },
  {
    "label": "年收入区间",
    "name": "annual_income",
    "type": "select",
    "options": [
      {
        "label": "<10万",
        "value": "<10万"
      }
    ],
    "required": true,
    "tooltip": "用户年收入预估区间"
  },
  {
    "label": "保障偏好-重疾险",
    "name": "pref_critical_illness",
    "type": "switch",
    "options": [
      {
        "label": "是",
        "value": true
      },
      {
        "label": "否",
        "value": false
      }
    ],
    "required": true,
    "tooltip": "用户是否偏好重疾险保障"
  },
  {
    "label": "是否关注保险公众号",
    "name": "follow_insurance_mp",
    "type": "switch",
    "options": [
      {
        "label": "是",
        "value": true
      },
      {
        "label": "否",
        "value": false
      }
    ],
    "required": true,
    "tooltip": "用户是否曾主动关注保险类公众号"
  }
]

export default formConfig;