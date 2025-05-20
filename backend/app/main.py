from fastapi import FastAPI
from app.database import engine, Base
from app.routers import form, recommend
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# 允许跨域请求（前端调后端）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 可以改成你的前端地址比如：http://localhost:3000
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 自动建表
Base.metadata.create_all(bind=engine)

# 路由挂载
app.include_router(form.router)
app.include_router(recommend.router)

