var childProcess = require('child_process');

module.exports = function(robot) {
  robot.respond(/calendar( me)?/i, function(msg) {
    childProcess.exec('cal', function(error, stdout, stderr) {
      return msg.send(stdout);
    });
  });
};
