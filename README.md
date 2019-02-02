node-red-contrib-embedded-file
=====================

Node-RED node to store file data to flow

Install
-------
Run the following command in your Node-RED user directory - typically `~/.node-red`

        npm install node-red-contrib-embedded-file

How to use
----------
Once uploading file via node property UI, the file node behaves as general file node.
Because file data is stored to the flow data, you can share the flow which contains both flow and file data.

Limitation
----------
The embedded file size should be less than 100KB because the file node needs CPU performance.
