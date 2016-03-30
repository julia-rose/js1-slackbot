// Do at least 3 things:
  // - send classmate a DM/reply
  // - use a conditional
  // - do something random (include image - gif)

var gifs = {
  'amazed': ['hepburn-sunglasses-off.gif', 'tom-hardy-glasses-off.gif'],
  'badass': ['skate-rope.gif', 'split.gif'],
  'boss': ['breakfast-club-sunglasses.gif', 'like-a-ross.gif'],
  'clap': ['applause.gif', 'clap-transformers-bumblebee.gif', 'clap.gif', 'dance.gif', 'picard-slow-clap.gif'],
  'contempt': ['Dwight-Schrute-look-of-disapproval.gif', 'enough-internet.gif', 'oh-please.gif', 'no_way_Neil_deGrasse_Tyson.gif'],
  'crying': ['bugs-crying.gif', 'raining.gif'],
  'dancing': ['ace-ventura-dance.gif', 'calvin-hobbes-dance.gif', 'carlton.gif']

};

module.exports = function (robot) {

  var get_channel, get_username; 
  
  // helper functions from Slackbot tutorial - https://github.com/michikono/slackbot-tutorial/blob/master/scripts/slackbot-examples.coffee
  
  get_username = function(response) { 
    return "@" + response.message.user.name; 
  }; 

  get_channel = function(response) { 
    if (response.message.room === response.message.user.name) 
      { 
        return "@" + response.message.room; 
      } else { 
      return "#" + response.message.room; 
    } 
  }; 

  robot.hear(/Oy! Potter!/i, function(msg) {
    var response = 'Shut it, Malfoy.';
    return msg.send(response);
  });

  robot.hear(/wingardium leviosa/i, function(msg) {
    var response = 'It\'s levi-OH-sa, not levio-SAH.\n http://4.bp.blogspot.com/-Rx_7BLal-0Y/TsMl5KYTvqI/AAAAAAAABVA/pnVizukwa8E/s1600/wingardium+leviosa.gif';
    return msg.send(response);
  });

  robot.hear(/Accio ( .*)/i, function(msg) {
    var input = msg.match[1];
    var array = gifs.input;
    var response = 'http://gifs.joelglovier.com/' + input + msg.random(array);
    return msg.send(response);
  });

  robot.hear(/.*!.*/, function(msg) { 
    return msg.reply(msg.match[0]); 
  });

  robot.hear(/secret meeting/i, function(msg) {
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var today = new Date();
    if (weekdays[today.getDay()] === 'Wednesday') {
      var response = "Meeting tonight. Room of Requirement. Don't be late."
    } else {
      var response = "Next meeting not 'til next Wednesday."
    }
    return msg.send(response);
  });

  robot.hear(/\bweasley\b/i, function(msg) { 
    return robot.brain.set('weasley_count', (robot.brain.get('weasley_count') || 0) + 1); 
  }); 

  robot.hear(/how many weasleys\?/i, function(msg) { 
    return msg.send("Total Weasleys: " + (robot.brain.get('weasley_count') || "0")); 
  });

};
