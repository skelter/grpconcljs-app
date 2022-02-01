/**
 * @fileoverview gRPC-Web generated client stub for entityevents
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


goog.provide('proto.entityevents.EntityMonitorClient');
goog.provide('proto.entityevents.EntityMonitorPromiseClient');
goog.boom
goog.require('grpc.web.MethodDescriptor');
goog.require('grpc.web.MethodType');
goog.require('grpc.web.GrpcWebClientBase');
goog.require('grpc.web.AbstractClientBase');
goog.require('grpc.web.ClientReadableStream');
goog.require('grpc.web.RpcError');
goog.require('proto.entityevents.EntityEvent');
goog.require('proto.entityevents.SubscribeReq');

goog.requireType('grpc.web.ClientOptions');



goog.scope(function() {

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.entityevents.EntityMonitorClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.entityevents.EntityMonitorPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.entityevents.SubscribeReq,
 *   !proto.entityevents.EntityEvent>}
 */
const methodDescriptor_EntityMonitor_Subscribe = new grpc.web.MethodDescriptor(
  '/entityevents.EntityMonitor/Subscribe',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.entityevents.SubscribeReq,
  proto.entityevents.EntityEvent,
  /**
   * @param {!proto.entityevents.SubscribeReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.entityevents.EntityEvent.deserializeBinary
);


/**
 * @param {!proto.entityevents.SubscribeReq} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.entityevents.EntityEvent>}
 *     The XHR Node Readable Stream
 */
proto.entityevents.EntityMonitorClient.prototype.subscribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/entityevents.EntityMonitor/Subscribe',
      request,
      metadata || {},
      methodDescriptor_EntityMonitor_Subscribe);
};


/**
 * @param {!proto.entityevents.SubscribeReq} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.entityevents.EntityEvent>}
 *     The XHR Node Readable Stream
 */
proto.entityevents.EntityMonitorPromiseClient.prototype.subscribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/entityevents.EntityMonitor/Subscribe',
      request,
      metadata || {},
      methodDescriptor_EntityMonitor_Subscribe);
};


}); // goog.scope

