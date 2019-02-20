(function (window){
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if(!url){
      throw new Error ('No remote URL supplied.');
    }
    this.serverUrl = url;
  }

  RemoteDataStore.prototype.add = function (key,val) {
    $.post(this.serverUrl, val, function (serverResponce){
      console.log(serverResponce);
    });
  };

  RemoteDataStore.prototype.getAll = function () {
    $.get(this.serverUrl, function(serverResponce){
      console.log(serverResponce);
      cb(serverResponce);
    });
  };

  RemoteDataStore.prototype.get = function (ket,cb){
    $.get(this.serverUrl + '/' + key, function (serverResponce){
      console.log(serverResponce);
      cb(serverResponce);
    });
  };

  RemoteDataStore.prototype.remove = function (key) {
    $.ajax(this.serverUrl + '/' + key, {
      type: 'DELETE'
    });
  };


  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
