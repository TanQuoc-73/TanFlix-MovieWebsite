import { Controller, Get, Put,Delete, Post} from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
    constructor(private readonly favoritesService: FavoritesService) {}

    @Get()
    findAll(){
        return this.favoritesService.findAll();
    }

    @Post()
    create(){
        return this.favoritesService.create({id:4, userId:2, movieId:3, rating:4});
    }


    @Delete()
    delete(): string {
        return 'Delete a favorite';
    }


}
