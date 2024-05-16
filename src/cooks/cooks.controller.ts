import { CooksService } from "./cooks.service";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Cook } from "src/cooks/cook.entity";
import { ApiTags } from '@nestjs/swagger';

@Controller("cooks")
@ApiTags("Повара") 
export class CooksController {
    constructor(private readonly cooksService: CooksService) {}
    
    @Get()
        findAll() {
            return this.cooksService.findAll();
        }

    @Get(":id")
    findOne (@Param("id") id: string) {
        return this.cooksService.findOne(+id);
    }


    @Put(":id")
    update(@Param("id") id: string, @Body() updateCook: Cook) {
        return this.cooksService.update(+id, updateCook);
    }

    @Post()
    create (@Body() createCook: Cook) {
        return this.cooksService.create(createCook)
    }

    @Delete(":id")
    remove (@Param("id") id: string) {
        return this.cooksService.remove(+id);
    }
}
