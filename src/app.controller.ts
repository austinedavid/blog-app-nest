import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { userInfo, userInfoType } from './schema/user.dto';
import { ZodValidationPipe } from './utils/zod.base.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Post()
  createpost(@Body() payload:any, @Query("id", new ParseIntPipe({optional:true})) id:number):string{
    console.log(payload)
    console.log(id)
    return "this is true oooo"
  }

  @Post(":userId")
  createWithId(@Param("userId", ParseIntPipe) userId:number, @Body( new ZodValidationPipe(userInfo)) payload:userInfoType){
    console.log(payload)
    console.log(userId)
    return "this is actually for the params"
  }
}
