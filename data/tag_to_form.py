import json

# 加载标签元数据 JSON 文件
file_path = "./tag_metadata.json"

with open(file_path, "r", encoding="utf-8") as f:
    tag_metadata = json.load(f)

# 生成前端表单配置结构（React用）
form_config = []

for tag in tag_metadata:
    field_config = {
        "label": tag["tag_name"],
        "name": tag["field"],
        "type": None,  # 将根据数据类型推断
        "options": tag["options"] if tag["value_type"] == "枚举" or tag["value_type"] == "布尔" else None,
        "required": True,
        "tooltip": tag["description"]
    }

    # 推断表单类型
    if tag["value_type"] == "枚举":
        field_config["type"] = "select"
    elif tag["value_type"] == "布尔":
        field_config["type"] = "switch"
    elif tag["value_type"] == "数值":
        field_config["type"] = "inputNumber"
    else:
        field_config["type"] = "input"

    form_config.append(field_config)

# 写入 JS 文件
with open('../frontend/src/pages/Questionnaire/formConfig.js', 'w', encoding='utf-8') as f:
    f.write("export const formConfig = ")
    json.dump(form_config, f, ensure_ascii=False, indent=2)
    f.write("\n\nexport default formConfig;")
