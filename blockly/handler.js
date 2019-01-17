'use strict';
var EnsSdk = require('ens-sdk');
// var ensHandler = require();
var eventTopicId = 'a8f7aacf-0c19-44da-8494-27b6c80b27a2';

var event1 = new EnsSdk.PublishEventBody();
var apiInstance = new EnsSdk.EventApi();
module.exports.hello = function(event, context, callback) {
  console.log(event);
  var eventcontent = event.request_body_args.eventContent.split(' ');
  #TOBEREPLACEDWITHCODE
};

// Use this code if you don't use the http event with the LAMBDA-PROXY integration
// return { message: 'Go Serverless v1.0! Your function executed successfully!', event };