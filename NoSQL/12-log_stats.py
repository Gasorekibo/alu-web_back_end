#!/usr/bin/env python3
from pymongo import MongoClient
""" pythong with pymongo"""
client = MongoClient('localhost', 27017)

# Access the 'logs' database and 'nginx' collection
db = client.logs
collection = db.nginx

# Count the total number of documents in the 'nginx' collection
total_logs = collection.count_documents({})
print(f"{total_logs} logs")

# Define HTTP methods to count
methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

# Count the number of documents for each HTTP method
method_counts = {method: collection.count_documents({"method": method}) for method in methods}

print("Methods:")
"""Print the counts for each HTTP method"""
for method, count in method_counts.items():
    print(f"    method {method}: {count}")


status_check_count = collection.count_documents({"method": "GET", "path": "/status"})
"""Count the number of GET requests to the /status path"""
print(f"{status_check_count} status check")

client.close()
