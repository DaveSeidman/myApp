/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
//document.addEventListener("ready")

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();

       // alert("hello world!");

    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {

        var element = document.getElementById("geolocation");

        /*element.innerHTML("binding events");*/
        //document.addEventListener('deviceready', this.onDeviceReady, false);
        
        document.addEventListener('deviceready', function() {
           app.receivedEvent('deviceready');
        
             //navigator.geolocation.getCurrentPosition(onSuccess, onError);
             
             element.innerHTML("device is ready!");
        }, true);
/*       if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
           document.addEventListener("deviceready", onDeviceReady, false);
        } else {
            onDeviceReady();
        }*/
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
   /* onDeviceReady: function() {
        app.receivedEvent('deviceready');
        alert("device is ready");
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        var element = document.getElementById('geolocation');
        element.innerHTML("device is ready!");
    },*/
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};




    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML("success!");
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + position.timestamp                    + '<br />';
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        /*alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');*/

        var element = document.getElementById('geolocation');
        element.innerHTML("error!");
    }

var map;
function initMap() {
  map = new google.maps.Map(document.getElementsByClassName('map')[0], {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}