'use client';
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  ObjectParamsInput,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Typography,
} from '@/components/ui';
import { cn } from '@/lib';
import { Paperclip } from 'lucide-react';
import React from 'react';

interface Props {
  className?: string;
}

export const ObjectParams: React.FC<Props> = ({ className }) => {
  const [uploadLink, setUploadLink] = React.useState('');
  console.log(uploadLink);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadLink(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Card className={cn('bg-[#262626] max-w-36 border-0', className)}>
      <CardHeader className="text-background  flex flex-row items-center justify-between">
        <CardTitle className="font-medium ">О помещении</CardTitle>

        <Select>
          <SelectTrigger className="select-none focus:outline-0 border-none focus:ring-0 rouded-[5px] w-[220px]">
            <SelectValue placeholder="Тип помещения" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Магазин">Магазин</SelectItem>
            <SelectItem value="Торговый центр">Торговый центр</SelectItem>
            <SelectItem value="Кинотеатр">Кинотеатр</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <ObjectParamsInput placeholder="Название" />

        <div className="text-background  border-dashed border-2 rounded-sm ">
          <label htmlFor="imageUpload" className="flex gap-x-[10px] cursor-pointer ">
            <div className="rounded-full  w-7 h-7 bg-red-500 flex-shrink-0">
              <Paperclip />
            </div>
            <div className="flex flex-col">
              <span>Добавить логотип</span>
              <Typography>Нажмите, чтобы загрузить файл. Максимальный размер - 5MB</Typography>
            </div>
            <input
              onChange={handleImageUpload}
              id="imageUpload"
              type="file"
              accept=".png,.jpg,.pdf"
              className="hidden"
            />
          </label>
        </div>

        <ObjectParamsInput
          placeholder="Краткое описание (80 символов)"
          className="placeholder:text-[#5C5C5C]"
          maxLength={80}
        />
        <textarea
          className=" resize-none rounded-[5px] border-[1.5px] font-medium py-2 px-4 border-[#5A5A5A] bg-[#373737] text-background placeholder:text-background/75 outline-0"
          placeholder="Подробное описание (240 символов)"
          maxLength={240}
        />

        <div className="flex justify-between gap-4">
          <ObjectParamsInput placeholder="Этаж" mark={false} />
          <ObjectParamsInput placeholder="Время" mark={false} />
        </div>

        <ObjectParamsInput placeholder="Ссылка на сайт" mark={false} />
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Button variant="ghost" className="text-background border-[1px] border-background">
          Закрыть
        </Button>
        <Button>Сохранить</Button>
      </CardFooter>
    </Card>
  );
};
