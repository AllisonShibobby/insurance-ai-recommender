from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import FormSubmission

import json

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/submit")
def submit_form(data: dict, db: Session = Depends(get_db)):
    submission = FormSubmission(data=json.dumps(data, ensure_ascii=False))
    return {"message": "提交成功"}
