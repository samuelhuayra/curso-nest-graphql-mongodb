import { Module } from '@nestjs/common';
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LessonModule } from './lesson/lesson.module';
import { Lesson } from './lesson/lesson.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url:'mongodb+srv://samuel:Sam13792805@cluster0-leqzf.mongodb.net/nest?retryWrites=true&w=majority',
      synchronize: true,
      useUnifiedTopology: true,
      entities:[
        Lesson
      ]

    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    LessonModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
