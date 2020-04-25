import { Resolver, Query, Mutation, Args, Parent, ResolveField } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { CreateLessonInput } from "./lesson.input";
import { AssignStudentsToLessonInput } from "./assing-students-to-lesson.input";
import { Lesson } from "./lesson.entity";
import { StudentService } from "src/student/student.service";

@Resolver(of=>LessonType)
export class LessonResolver {
    constructor(
        private lessonService:LessonService,
        private studentService:StudentService
    ){}
    
    @Query(returns=>LessonType)
    lesson(
        @Args('id') id:string,
    ){
        return this.lessonService.getLesson(id)
    }

    @Query(returns=>[LessonType])
    lessons(){
        return this.lessonService.getLessons()
    }

    @Mutation(returns => LessonType)
    createLesson(
        // @Args('name') name:string,
        // @Args('startDate') startDate:string,
        // @Args('endDate') endDate:string
        @Args('createLessonInput') createLessonInput:CreateLessonInput
    ){
        return this.lessonService.createLesson(createLessonInput)
    }
    @Mutation(returns => LessonType)
    assignStudentsToLesson(
        // @Args('name') name:string,
        // @Args('startDate') startDate:string,
        // @Args('endDate') endDate:string
        @Args('assignStudentsToLessonInput') assignStudentsToLessonInput:AssignStudentsToLessonInput
    ){
        const {lessonId,studentIds} = assignStudentsToLessonInput
        return this.lessonService.assignStudentsToLesson(lessonId,studentIds)
    }

    @ResolveField()
    students(@Parent() lesson:Lesson){
        // console.log('object>>>',lesson);
        // object>>> Lesson {
            // _id: 5ea4ae3f58517024a0a94957,
            // id: '0ea585ef-8733-4e3c-9a5b-49c0eff8fcf6',
            // name: 'AWS Class',
            // startDate: '2020-03-28T18:00:00Z',
            // endDate: '2020-03-28T18:30:00Z',
            // students: []
        //   }
        return this.studentService.getManyStudents(lesson.students)
    }
}
