import mongoose from 'mongoose'
import AccountSchema from '../models/Account'
import BoardsSchema from '../models/Board'
import ListsSchema from '../models/List'
import TasksSchema from '../models/Task'
import CommentsSchema from '../models/Comment'

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Boards = mongoose.model('Boards', BoardsSchema);
  Lists = mongoose.model('Lists', ListsSchema);
  Tasks = mongoose.model('Tasks', TasksSchema);
  Comment = mongoose.model('Comments', CommentsSchema)
}

export const dbContext = new DbContext()
