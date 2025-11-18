module.exports = {
  entry: 'main.py',
  buildCommand: 'uvicorn main:app --reload',
  python: true,
  port: 8000
};

