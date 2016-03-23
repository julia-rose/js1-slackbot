module.exports = function (robot) {
  var prefix = '*beep-boop-beep*';

  robot.respond(/how can entropy be reversed\?/, function(msg) {
    var response = 'There is as yet insufficient data for a meaningful answer';
    return msg.reply(prefix + ' ' + response);
  });

  robot.respond(/can you teach me javascript\?/, function(msg) {
    return msg.reply(prefix + ' lolz no');
  });

  robot.hear(/any plans for the weekend\?/, function(msg) {
    return msg.reply(prefix + ' netflix and software updates');
  });

};
