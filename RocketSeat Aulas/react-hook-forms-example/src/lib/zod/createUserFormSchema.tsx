import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5mb
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const createUserFormSchema = z.object({
    avatar: z.instanceof(FileList)
      .refine(files => !!files.item(0), 'A imagem é obrigatória')
      .transform(files => files.item(0)!)
      .refine(file => file.size <= MAX_FILE_SIZE, 'Tamanho máximo de 5mb')
      .refine(file => ACCEPTED_IMAGE_TYPES.includes(file.type), 'Formato de imagem inválido')      ,

    name: z.string()
      .min(1, 'O nome é obrigatório')
      .transform(name => {
        return name.trim().split(' ').map(word => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        }).join(' ');
      }),

    email: z.string()
      .min(1, 'O e-mail é obrigatório') //nonempty
      .email('Formato de e-mail inválido')
      .toLowerCase()
      .refine(email => {
        return email.endsWith('@gmail.com');
      }, 'O email precisa ser GMail'),

    password: z.string()
      .min(6, 'A senha precisa de no minimo 6 caracteres'),

    techs: z.array(z.object({
      title: z.string().min(1, 'O título é obrigatório'),
      knowledge: z.coerce.number()
      .min(1, 'Precisa ser um número maior que 0')
      .max(100, 'Precisa ser um número menor que 100')
    }))
      .min(2, 'Insira pelo menos 2 tecnologias')
      .refine((techs) => techs.some(tech => tech.knowledge > 50), 'Conhecimento muito baixo(<=50)')
  });
  
  export type CreateUserFormData = z.infer<typeof createUserFormSchema>;