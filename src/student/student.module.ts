import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { StudentResolver } from './studen.resolver';

@Module({
  imports:[
    TypeOrmModule.forFeature([Student])
  ],
  providers: [StudentResolver,StudentService],
  exports:[StudentService]
})
export class StudentModule {}
