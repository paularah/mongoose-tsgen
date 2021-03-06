/* tslint:disable */
/* eslint-disable */

// ######################################## THIS FILE WAS GENERATED BY MONGOOSE-TSGEN ######################################## //

// NOTE: ANY CHANGES MADE WILL BE OVERWRITTEN ON SUBSEQUENT EXECUTIONS OF MONGOOSE-TSGEN.

import mongoose from "mongoose";

declare module "mongoose" {

/**
 * Lean version of UserFriendDocument
 * 
 * This has all Mongoose getters & functions removed. This type will be returned from `UserDocument.toObject()`.
 * ```
 * const userObject = user.toObject();
 * ```
 */
interface UserFriend {
uid: User["_id"] | User;
nickname?: string;
_id: mongoose.Types.ObjectId;
}

/**
 * Lean version of UserCitySubdocWithoutDefaultDocument
 * 
 * This has all Mongoose getters & functions removed. This type will be returned from `UserDocument.toObject()`.
 * ```
 * const userObject = user.toObject();
 * ```
 */
interface UserCitySubdocWithoutDefault {
a?: string;
_id: mongoose.Types.ObjectId;
}

/**
 * Lean version of UserDocument (type alias of `User`)
 * 
 * Use this type alias to avoid conflicts with model names:
 * ```
 * import { User } from "../models"
 * import { UserObject } from "../interfaces/mongoose.gen.ts"
 * 
 * const userObject: UserObject = user.toObject();
 * ```
 */
type UserObject = User

/**
 * Mongoose Query types
 * 
 * Use type assertion to ensure User query type safety:
 * ```
 * UserSchema.query = <UserQueries>{ ... };
 * ```
 */
type UserQueries = {
populateFriends: <Q extends mongoose.Query<any, UserDocument>>(this: Q) => Q;
}

interface Query<ResultType, DocType extends Document> extends UserQueries {}

/**
 * Mongoose Method types
 * 
 * Use type assertion to ensure User methods type safety:
 * ```
 * UserSchema.methods = <UserMethods>{ ... };
 * ```
 */
type UserMethods = {
isMetadataString: (this: UserDocument) => boolean;
}

/**
 * Mongoose Static types
 * 
 * Use type assertion to ensure User statics type safety:
 * ```
 * UserSchema.statics = <UserStatics>{ ... };
 * ```
 */
type UserStatics = {
getFriends: (this: UserModel, friendUids: UserDocument["_id"][]) => Promise<UserObject[]>;
}

/**
 * Mongoose Model type
 * 
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const User = mongoose.model<UserDocument, UserModel>("User", UserSchema);
 * ```
 */
interface UserModel extends mongoose.Model<UserDocument>, UserStatics {}

/**
 * Mongoose Schema type
 * 
 * Assign this type to new User schema instances:
 * ```
 * const UserSchema: UserSchema = new mongoose.Schema({ ... })
 * ```
 */
type UserSchema = mongoose.Schema<UserDocument, UserModel>

/**
 * Lean version of UserDocument
 * 
 * This has all Mongoose getters & functions removed. This type will be returned from `UserDocument.toObject()`. To avoid conflicts with model names, use the type alias `UserObject`.
 * ```
 * const userObject = user.toObject();
 * ```
 */
interface User {
email: string;
firstName: string;
lastName: string;
metadata?: any;
bestFriend?: User["_id"] | User;
friends: UserFriend[];
city: {
coordinates: number[];
subdocWithoutDefault?: UserCitySubdocWithoutDefault[];
};
tags: string[];
alternateObjectId?: mongoose.Types.ObjectId;
socialMediaHandles?: Map<string, string>;
arrayOfMaps: (Map<string, number>)[];
buffer: Buffer;
bufferString?: Buffer;
decimal128?: number;
otherDecimal128?: number;
numberString?: number;
stringString?: string;
otherNumberString: number;
otherStringString: string;
_id: mongoose.Types.ObjectId;
}

/**
 * Mongoose Embedded Document type
 * 
 * Type of `UserDocument["friends"]` element.
 */
interface UserFriendDocument extends mongoose.Types.EmbeddedDocument {
uid: UserDocument["_id"] | UserDocument;
nickname?: string;
_id: mongoose.Types.ObjectId;
}

/**
 * Mongoose Embedded Document type
 * 
 * Type of `UserDocument["city.subdocWithoutDefault"]` element.
 */
interface UserCitySubdocWithoutDefaultDocument extends mongoose.Types.EmbeddedDocument {
a?: string;
_id: mongoose.Types.ObjectId;
}

/**
 * Mongoose Document type
 * 
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const User = mongoose.model<UserDocument, UserModel>("User", UserSchema);
 * ```
 */
interface UserDocument extends mongoose.Document<mongoose.Types.ObjectId>, UserMethods {
email: string;
firstName: string;
lastName: string;
metadata?: any;
bestFriend?: UserDocument["_id"] | UserDocument;
friends: mongoose.Types.DocumentArray<UserFriendDocument>;
city: {
coordinates: mongoose.Types.Array<number>;
subdocWithoutDefault?: mongoose.Types.DocumentArray<UserCitySubdocWithoutDefaultDocument>;
};
tags: mongoose.Types.Array<string>;
alternateObjectId?: mongoose.Types.ObjectId;
socialMediaHandles?: mongoose.Types.Map<string>;
arrayOfMaps: mongoose.Types.Array<mongoose.Types.Map<number>>;
buffer: mongoose.Types.Buffer;
bufferString?: mongoose.Types.Buffer;
decimal128?: mongoose.Types.Decimal128;
otherDecimal128?: mongoose.Types.Decimal128;
numberString?: number;
stringString?: string;
otherNumberString: number;
otherStringString: string;
_id: mongoose.Types.ObjectId;
name: string;
}

}
