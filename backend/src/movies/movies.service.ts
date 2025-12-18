import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Movies } from './movies.schema';

@Injectable()
export class MoviesService {
    //test dữ liệu mẫu
    // private movies = [
    //     {id:1, name:'Inception', genre:'Sci-Fi', year:2010},
    //     {id:2, name:'The Dark Knight', genre:'Action', year:2008},
    //     {id:3, name:'Interstellar', genre:'Sci-Fi', year:2014},
    // ];

    constructor(
        @InjectModel(Movies.name)
        private readonly moviesModel: Model<Movies>,
    ){}

    findAll(){
        return this.moviesModel.find();
    }

    findOne(id:string){
        return this.moviesModel.findById(id);
    }

    create(data: Partial<Movies>){   
        const newMovie = new this.moviesModel(data);
        return newMovie.save();
    }

    update(id:string, name:Movies){
        return this.moviesModel.findByIdAndUpdate(
            id,
            name,
            {new:true}
        )
    }

    remove(id:string){
        return this.moviesModel.findByIdAndDelete(id);
    }
    

}


