import { Table, Column, Model, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript'
import Mentor from './Mentor'
import Student from './Student'

@Table({ timestamps: true })
export class MentorStudent extends Model<MentorStudent> {

  @Column({ primaryKey: true, autoIncrement: true })
  id: number

  @ForeignKey(() => Mentor)
  @Column
  MentorId: number

  @ForeignKey(() => Student)
  @Column
  studentId: number

}

export default MentorStudent
