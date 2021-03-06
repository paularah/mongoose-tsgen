"use strict";
const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  metadata: Schema.Types.Mixed,
  bestFriend: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  friends: [
    {
      uid: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
      },
      nickname: String
    }
  ],
  city: {
    coordinates: {
      type: [Number]
    },
    subdocWithoutDefault: {
      type: [{
        a: String
      }],
      default: undefined
    }
  },
  tags: [String],
  alternateObjectId: mongoose.Types.ObjectId,
  socialMediaHandles: {
    type: Map,
    of: String
  },
  arrayOfMaps: [
    {
      type: Map,
      of: Number
    }
  ],
  buffer: {
    type: Buffer,
    required: true
  },
  bufferString: 'Buffer',
  decimal128: Schema.Types.Decimal128,
  otherDecimal128: mongoose.Types.Decimal128,
  numberString: "Number",
  stringString: "String",
  otherNumberString: {
    type: "Number",
    required: true
  },
  otherStringString: {
    type: "String",
    required: true
  }
});

UserSchema.virtual("name").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

// method functions
UserSchema.methods = {
  isMetadataString() {
    return typeof this.metadata === "string";
  }
};

// static functions
UserSchema.statics = {
  async getFriends(friendUids) {
    return await this.aggregate([{ $match: { _id: { $in: friendUids } } }]);
  }
};

// query functions
UserSchema.query = {
  populateFriends() {
    return this.populate("friends.uid", "firstName lastName");
  }
};

module.exports = mongoose.model("User", UserSchema);
