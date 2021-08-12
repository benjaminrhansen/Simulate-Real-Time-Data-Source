# Simulate-Real-Time-Data-Source
This project creates a real-time data source as a REST API. It models the stock market, where certain symbols (columns, keys, etc.) can be looked up in a dictionary (or JavaScript object) at any time. Just like the current market price for an asset may not have changed since the last request, the data for an earlier request returned by the simulator may not change in subsequent requests. Changes to data in repeated requests are determined randomly.

This project uses a global-dictionary variable to store the symbols desired for lookup and each data point related to that symbol (the key's value). 

To setup a specific process... (to be described later)
