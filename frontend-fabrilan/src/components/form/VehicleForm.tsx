import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

import '../../styles/styles.css'

import { CancelButton } from '../buttons/cancelButton';

const schema = z.object({
  owner: z.string().min(1, 'O Proprietário é obrigatório').toLowerCase(),
  brand: z.string().min(1, 'A Marca é obrigatória').toLowerCase(),
  model: z.string().min(1, 'O Modelo é obrigatório').toLowerCase(),
  yearManufactured: z.string()
    .transform(value => new Date(value))
    .refine(date => !isNaN(date.getTime()), { message: 'O ano fabricado é obrigatório' }),
  yearModel: z.string()
    .transform(value => new Date(value))
    .refine(date => !isNaN(date.getTime()), { message: 'O ano modelo é obrigatório' }),
  chassis: z.string().min(1, 'O Chassi é obrigatório').toLowerCase(),
  renavam: z.string().min(1, 'O Renavam é obrigatório').toLowerCase(),
  color: z.string().min(1, 'A Cor é obrigatória').toLowerCase(),
  plate: z.string().min(1, 'A Placa é obrigatória').toLowerCase(),
  driver: z.string().min(1, 'O Motorista é obrigatório').toLowerCase(),
  fleet: z.string().min(1, 'A Frota é obrigatória').toLowerCase(),
  mdrv: z.string().min(1, 'O MDRV é obrigatório').toLowerCase(),
  fuel: z.string().min(1, 'A Gasolina é obrigatória').toLowerCase(),
  type: z.string().min(1, 'O Tipo de Monitoramento é obrigatório').toLowerCase(),
  installationDate: z.string()
  .transform(value => new Date(value))
  .refine(date => !isNaN(date.getTime()), { message: 'A data de instalação é obrigatória' }),
  status: z.enum(['ativo', 'inativo']),
  images: z.array(z.instanceof(File)).min(1, 'A Imagem é obrigatória'),
});

type FormData = z.infer<typeof schema>;

const VehicleForm: React.FC = () => {
  const { register, handleSubmit, reset, control, formState: { errors }, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData();
      console.log('data.images:', data.images);
      Object.entries(data).forEach(([key, value]) => {
        if (key === 'images' && Array.isArray(value)) {
          (value as File[]).forEach((file) => {
            formData.append('images', file);
          });
        } else {
          formData.append(key, String(value));
        }
        console.log(key, value);
      });
      
      await axios.post('http://localhost:3001/vehicle', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Formulário enviado com sucesso!');
      reset();
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('Erro ao enviar o formulário.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Cadastrar Veículos</h1>
      <div>
        <label>Proprietário:</label>
        <input type='text' {...register('owner')} />
        {errors.owner && <span>{errors.owner.message}</span>}
      </div>
      <div>
        <label>Marca:</label>
        <input type='text' {...register('brand')} />
        {errors.brand && <span>{errors.brand.message}</span>}
      </div>
      <div>
        <label>Modelo:</label>
        <input type='text'{...register('model')} />
        {errors.model && <span>{errors.model.message}</span>}
      </div>
      <div>
        <label>Ano Fabricado:</label>
        <input type="date" {...register('yearManufactured')} />
        {errors.yearManufactured && <span>{errors.yearManufactured.message}</span>}
      </div>
      <div>
        <label>Ano Modelo:</label>
        <input type="date" {...register('yearModel')} />
        {errors.yearModel && <span>{errors.yearModel.message}</span>}
      </div>
      <div>
        <label>Chassi:</label>
        <input type='text' {...register('chassis')} />
        {errors.chassis && <span>{errors.chassis.message}</span>}
      </div>
      <div>
        <label>Renavam:</label>
        <input type='text' {...register('renavam')} />
        {errors.renavam && <span>{errors.renavam.message}</span>}
      </div>
      <div>
        <label>Cor:</label>
        <input type='text' {...register('color')} />
        {errors.color && <span>{errors.color.message}</span>}
      </div>
      <div>
        <label>Placa:</label>
        <input type='text' {...register('plate')} />
        {errors.plate && <span>{errors.plate.message}</span>}
      </div>
      <div>
        <label>Motorista:</label>
        <input type='text' {...register('driver')} />
        {errors.driver && <span>{errors.driver.message}</span>}
      </div>
      <div>
        <label>Frota:</label>
        <input type='text' {...register('fleet')} />
        {errors.fleet && <span>{errors.fleet.message}</span>}
      </div>
      <div>
        <label>MDRV:</label>
        <input type='text' {...register('mdrv')} />
        {errors.mdrv && <span>{errors.mdrv.message}</span>}
      </div>
      <div>
        <label>Gasolina:</label>
        <input type='text' {...register('fuel')} />
        {errors.fuel && <span>{errors.fuel.message}</span>}
      </div>
      <div>
        <label>Tipo de Monitoramento:</label>
        <input type='text' {...register('type')} />
        {errors.type && <span>{errors.type.message}</span>}
      </div>
      <div>
        <label>Data de instalação:</label>
        <input type="date" {...register('installationDate')} />
        {errors.installationDate && <span>{errors.installationDate.message}</span>}
      </div>
      <div>
        <label>Status:</label>
        <select {...register('status')}>
          <option value="ativo">Ativo</option>
          <option value="inativo">Inativo</option>
        </select>
        {errors.status && <span>{errors.status.message}</span>}
      </div>
      <div className="upload-label">
        <label>Imagens:</label>
        <input
          type="file"
          multiple
          accept="image/*" 
          onChange={(e) => {
            const files = Array.from(e.target.files || []);
            setValue('images', files);
          }}
        />
        {errors.images && <span>{errors.images.message}</span>}
        {control._formValues.images && (
          <ul>
            {control._formValues.images?.map((file: File, index: number) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        )}
      </div>
      <div className='button-container'>
        <button type="submit">Enviar</button>
        <CancelButton />
      </div>
    </form>
  );
};

export default VehicleForm;