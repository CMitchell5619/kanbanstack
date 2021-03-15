import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.SchemaTypes.ObjectId

const Board = new Schema(
  {
    title: { type: String, required: true },
    creatorId: { type: ObjectId, ref: 'Account', required: true },
    imgUrl: { type: String, required: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Board.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Board
