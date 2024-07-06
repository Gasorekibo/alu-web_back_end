#!/usr/bin/env python3
"""log stats from collection
"""
from pymongo import MongoClient

def log_stats(mongo_collection):
    """ script that provides some stats about Nginx logs stored in MongoDB
    """
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    # Count the total number of documents in the 'nginx' collection
    total_logs = mongo_collection.count_documents({})
    print(f"{total_logs} logs")

    # Print method counts
    print("Methods:")
    for method in methods:
        method_count = mongo_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {method_count}")

    # Count the number of GET requests to the /status path
    status_check_count = mongo_collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status_check_count} status check")

if __name__ == "__main__":
    # Connect to the MongoDB server and get the 'nginx' collection from the 'logs' database
    client = MongoClient('mongodb://127.0.0.1:27017')
    nginx_collection = client.logs.nginx

    # Call the log_stats function with the nginx collection
    log_stats(nginx_collection)
