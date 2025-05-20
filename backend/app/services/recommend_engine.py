import json

def load_rules(filepath="rules.json"):
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)

def apply_rules(user_data, rules):
    recommendations = []

    for rule in rules:
        if all(user_data.get(k) == v for k, v in rule["conditions"].items()):
            recommendations.extend(rule["recommendations"])

    return list(set(recommendations))

