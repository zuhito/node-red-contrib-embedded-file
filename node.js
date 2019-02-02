var fs = require('fs');

module.exports = function (RED) {
    "use strict";
    function EmbeddedFileNode(n) {
        RED.nodes.createNode(this, n);
        var node = this;
        this.on('input', function (msg) {
            var index = n.filedata.indexOf(';base64,');
            if (index === -1) {
                node.error('File format error', msg);
            } else {
                var filedata = n.filedata.substring(index + ';base64,'.length);
                var buf = new Buffer(filedata, 'base64');
                if (n.format === 'utf8') {
                    msg.payload = buf.toString();
                } else {
                    msg.payload = buf;
                }
                node.send(msg);
            }
        });
    }
    RED.nodes.registerType("embedded-file", EmbeddedFileNode);
};
