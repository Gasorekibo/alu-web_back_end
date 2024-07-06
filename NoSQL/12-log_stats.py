#!/usr/bin/env python3
from pymongo import MongoClient

client = MongoClient('localhost', 27017)

db = client.logs
collection = db.nginx

total_logs = collection.count_documents({})
print(f"{total_logs} logs")

methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

method_counts = {method: collection.count_documents({"method": method}) for method in methods}

print("Methods:")
for method, count in method_counts.items():
    print(f"    method {method}: {count}")

status_check_count = collection.count_documents({"method": "GET", "path": "/status"})
print(f"{status_check_count} status check")

client.close()
