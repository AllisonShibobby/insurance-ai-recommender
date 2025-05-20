from sqlalchemy import Column, Integer, String, Text
from app.database import Base

class FormSubmission(Base):
    __tablename__ = "form_submissions"

    id = Column(Integer, primary_key=True, index=True)
    data = Column(Text, nullable=False)  # 存整个问卷 JSON 字符串
