from fastapi import FastAPI

app = FastAPI(name ="backend")

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/health")
def healthcheck():
    return {"status": "ok"}

