import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from './roles.model';

@ApiTags('Роли пользователей')
@Controller('roles')
export class RolesController {
    constructor(private rolesService: RolesService) {}

    @ApiOperation({summary: 'Создание роли'})
    @ApiResponse({status: 200, type: Role})
    @Post()
    create(@Body() roleDto: CreateRoleDto) {
        return this.rolesService.createRole(roleDto);
    }

    @ApiOperation({summary: 'Получение всех ролей'})
    @ApiResponse({status: 200, type: [Role]})
    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.rolesService.getRoleByValue(value);
    }
}
