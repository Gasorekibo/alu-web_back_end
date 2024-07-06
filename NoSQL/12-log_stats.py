#!/usr/bin/env python3
from pymongo import MongoClient
"""
    Connect to MongoDB server running on localhost at port 27017
"""
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

# Print the counts for each HTTP method
print("Methods:")
for method, count in method_counts.items():
    print(f"    method {method}: {count}")

# Count the number of GET requests to the /status path
status_check_count = collection.count_documents({"method": "GET", "path": "/status"})
print(f"{status_check_count} status check")

# Close the connection to the MongoDB server
client.close()
