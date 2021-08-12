# Simulate-Real-Time-Data-Source
This project create a real-time data source as a REST API. It models the stock market, where certain symbols (columns, keys, etc.) can be looked up in a database at anytime. Just like the current market price for an asset may not have changed since the last request, the data for an earlier request returned by the simulator may not change in subsequent requests. Changes to data in repeated requests are determined randomly.

This project uses a MongoDB database to store the symbols desired for lookup and each dataset related to that symbol. The format of the dataset must be pre-programmed into the current use of this project since this project has no automatic simulation application setup process.

To setup a specific process... (to be described later)
