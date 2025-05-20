from fastapi import APIRouter, Request
from app.services.recommend_engine import load_rules, apply_rules

router = APIRouter()

@router.post("/recommend")
async def get_recommendation(request: Request):
    user_data = await request.json()
    rules = load_rules()
    results = apply_rules(user_data, rules)
    print(f'results: {results}')
    return {"recommendations": results}
