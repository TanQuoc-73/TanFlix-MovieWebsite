import { Controller,Get,Post,Delete,Put, Param,Body } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movies } from './movies.schema';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService:MoviesService){}

    @Get()
    findAll(){
        return this.moviesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.moviesService.findOne(id);
    }

    @Post()
    create(@Body() body:Movies){
        return this.moviesService.create(body)
    }
    

    @Put(':id')
    update(@Param('id') id:string, @Body() body){
        return this.moviesService.update(id,body);
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return this.moviesService.remove(id);
    }
}
