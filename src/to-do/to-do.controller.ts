import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { ToDoService } from './to-do.service';
import { CreateToDoDto } from './dto/create-to-do.dto';
import { UpdateToDoDto } from './dto/update-to-do.dto';
import { UpdateStatusToDoDto } from './dto/updateStatus-to-do.dts';
import {
  ResponseResultSuccess,
  ResponseResultError,
} from 'src/utils/response.dto';
import { Response } from 'express';

@Controller('to-do')
export class ToDoController {
  constructor(private readonly toDoService: ToDoService) {}

  @Post()
  create(@Body() createToDoDto: CreateToDoDto) {
    const addData = this.toDoService.create(createToDoDto);

    let message = 'Data Gagal disimpan';
    let code = 500;
    let data;
    if (addData) {
      message = 'Data berhasil disimpan';
      code = 200;
      data = createToDoDto;
    }

    const result = {
      code: code,
      message: message,
      data: data,
    };
    return result;
  }

  @Get()
  async findAll(@Res() res: Response) {
    const dataAll = await this.toDoService.findAll();
    const totalRows = await this.toDoService.getTotalRows();

    if (dataAll) {
      const customResult = new ResponseResultSuccess(
        200,
        'Data berhasil dipatch',
        dataAll,
        totalRows,
      );
      res.status(200).json(customResult);
    } else {
      const Error = new ResponseResultError(500, 'Data gagal dipatch');
      res.status(500).json(Error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    // return await this.toDoService.findOne(+id);
    const findData = await this.toDoService.findOne(+id);
    if (findData) {
      const customResult = new ResponseResultSuccess(
        200,
        'Data berhasil dipatch',
        findData,
      );
      res.status(200).json(customResult);
    } else {
      const Error = new ResponseResultError(500, 'Data gagal diubah');
      res.status(500).json(Error);
    }
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateToDoDto: UpdateToDoDto,
    @Res() res: Response,
  ) {
    const updateData = this.toDoService.update(+id, updateToDoDto);
    if (updateData) {
      const customResult = new ResponseResultSuccess(
        200,
        'Data berhasil diubah',
        updateToDoDto,
      );
      res.status(200).json(customResult);
    } else {
      const Error = new ResponseResultError(500, 'Data gagal diubah');
      res.status(500).json(Error);
    }
  }

  @Patch('update-status/:id')
  updateStatus(
    @Param('id') id: string,
    @Body() UpdateStatusToDoDto: UpdateStatusToDoDto,
    @Res() res: Response,
  ) {
    const updateData = this.toDoService.updateStatus(+id, UpdateStatusToDoDto);
    if (updateData) {
      const customResult = new ResponseResultSuccess(
        200,
        'Data berhasil diubah',
        UpdateStatusToDoDto,
      );
      res.status(200).json(customResult);
    } else {
      const Error = new ResponseResultError(500, 'Data gagal diubah');
      res.status(500).json(Error);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const checkData = await this.toDoService.findOne(+id);
    if (checkData) {
      await this.toDoService.remove(+id);
      const customResult = new ResponseResultSuccess(
        200,
        'Data berhasil dihapus',
      );
      res.status(200).json(customResult);
    } else {
      const Error = new ResponseResultError(500, 'Data tidak ada');
      res.status(500).json(Error);
    }
  }
}
