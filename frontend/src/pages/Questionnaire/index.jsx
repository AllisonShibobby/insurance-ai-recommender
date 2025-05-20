import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, InputNumber, Switch, Select, Checkbox, Button, message } from 'antd';
import formConfig from './formConfig';
import { submitForm } from './submit';
import './style.css';

const normalizeOptions = (options) => {
  // Safety check first
  if (!options) return [];
  if (Array.isArray(options) && typeof options[0] === 'string') {
    return options.map(opt => ({ label: opt, value: opt }));
  }
  if (options.length>0 && typeof options[0] === 'object') {
    return options;
  }
  return options;
};

const Questionnaire = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const renderFormItem = (item) => {
  const commonProps = {
    name: item.name,
    label: item.label,
    rules: item.rules || [],
  };

  switch (item.type) {
    case 'inputNumber':
      return <Form.Item key={item.name} {...commonProps}><InputNumber /></Form.Item>;

    case 'switch':
      return (
        <Form.Item key={item.name} {...commonProps} valuePropName="checked">
          <Switch />
        </Form.Item>
      );

    case 'select':
      return (
        <Form.Item key={item.name} {...commonProps}>
          <Select options={normalizeOptions(item.options)} />
        </Form.Item>
      );

    case 'checkboxGroup':
      return (
        <Form.Item key={item.name} {...commonProps}>
          <Checkbox.Group options={normalizeOptions(item.options)} />
        </Form.Item>
      );

    default:
      return (
        <Form.Item key={item.name} {...commonProps}>
          <Input />
        </Form.Item>
      );
  }
};


  const onFinish = async (values) => {
    try {
      await submitForm(values);
      message.success('提交成功！');
      // TODO: 跳转推荐页或展示结果
      navigate('/recommendation', { state: { formData: values } }); 
    } catch (err) {
      message.error('提交失败');
    }
  };

  return (
    <div className="questionnaire-wrapper">
      <h2>保险推荐问卷</h2>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        {formConfig.map((item) => renderFormItem(item))}
        <Form.Item>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Questionnaire;
