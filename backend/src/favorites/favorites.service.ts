import { Injectable } from '@nestjs/common';

export interface Favorites{
    id:number;
    userId:number;
    movieId:number;
    rating:number;

}

@Injectable()
export class FavoritesService {
    private favorites:Favorites[]=[
        {id:1, userId:1, movieId:2, rating:5},
        {id:2, userId:1, movieId:3, rating:4},
        {id:3, userId:2, movieId:1, rating:5},
    ]

    findAll():Favorites[]{
        return this.favorites;
    }

    create(favorite:Favorites):Favorites{
        this.favorites.push(favorite);
        return favorite;
    }
}
