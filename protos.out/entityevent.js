// source: protos/entityevents.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.entityevents.EntityEvent');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.entityevents.Entity');

goog.forwardDeclare('proto.entityevents.EntityEventCode');
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entityevents.EntityEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entityevents.EntityEvent.repeatedFields_, null);
};
goog.inherits(proto.entityevents.EntityEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entityevents.EntityEvent.displayName = 'proto.entityevents.EntityEvent';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entityevents.EntityEvent.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entityevents.EntityEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.entityevents.EntityEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entityevents.EntityEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entityevents.EntityEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    entityList: jspb.Message.toObjectList(msg.getEntityList(),
    proto.entityevents.Entity.toObject, includeInstance),
    fromid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    assocattr: jspb.Message.getFieldWithDefault(msg, 4, ""),
    toid: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entityevents.EntityEvent}
 */
proto.entityevents.EntityEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entityevents.EntityEvent;
  return proto.entityevents.EntityEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entityevents.EntityEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entityevents.EntityEvent}
 */
proto.entityevents.EntityEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.entityevents.EntityEventCode} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 2:
      var value = new proto.entityevents.Entity;
      reader.readMessage(value,proto.entityevents.Entity.deserializeBinaryFromReader);
      msg.addEntity(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssocattr(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setToid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entityevents.EntityEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entityevents.EntityEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entityevents.EntityEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entityevents.EntityEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getEntityList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.entityevents.Entity.serializeBinaryToWriter
    );
  }
  f = message.getFromid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAssocattr();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getToid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional EntityEventCode code = 1;
 * @return {!proto.entityevents.EntityEventCode}
 */
proto.entityevents.EntityEvent.prototype.getCode = function() {
  return /** @type {!proto.entityevents.EntityEventCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.entityevents.EntityEventCode} value
 * @return {!proto.entityevents.EntityEvent} returns this
 */
proto.entityevents.EntityEvent.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated Entity entity = 2;
 * @return {!Array<!proto.entityevents.Entity>}
 */
proto.entityevents.EntityEvent.prototype.getEntityList = function() {
  return /** @type{!Array<!proto.entityevents.Entity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entityevents.Entity, 2));
};


/**
 * @param {!Array<!proto.entityevents.Entity>} value
 * @return {!proto.entityevents.EntityEvent} returns this
*/
proto.entityevents.EntityEvent.prototype.setEntityList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.entityevents.Entity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entityevents.Entity}
 */
proto.entityevents.EntityEvent.prototype.addEntity = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.entityevents.Entity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entityevents.EntityEvent} returns this
 */
proto.entityevents.EntityEvent.prototype.clearEntityList = function() {
  return this.setEntityList([]);
};


/**
 * optional string fromId = 3;
 * @return {string}
 */
proto.entityevents.EntityEvent.prototype.getFromid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.entityevents.EntityEvent} returns this
 */
proto.entityevents.EntityEvent.prototype.setFromid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string assocAttr = 4;
 * @return {string}
 */
proto.entityevents.EntityEvent.prototype.getAssocattr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.entityevents.EntityEvent} returns this
 */
proto.entityevents.EntityEvent.prototype.setAssocattr = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string toId = 5;
 * @return {string}
 */
proto.entityevents.EntityEvent.prototype.getToid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.entityevents.EntityEvent} returns this
 */
proto.entityevents.EntityEvent.prototype.setToid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


