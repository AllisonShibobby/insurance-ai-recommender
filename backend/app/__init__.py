# app/__init__.py
# This file makes the app directory a Python package

# You can optionally expose certain modules or functions at the package level
from .database import engine, Base

# You can also define a __version__
__version__ = '0.1.0'