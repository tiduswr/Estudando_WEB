import { useState } from 'react';
import './styles/global.css';

import { useForm, useFieldArray, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { supabase } from './lib/supabase';
import { Form } from './components/Form';
import { PlusCircle, XCircle } from 'lucide-react';
import { CreateUserFormData, createUserFormSchema } from './lib/zod/createUserFormSchema';

const strongPasswordRegex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');

export function App(){
  const [output, setOutput] = useState('');

  const createUserForm = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema)
  });

  const { 
    handleSubmit, 
    formState: { isSubmitting },
    watch,
    control
  } = createUserForm;

  const isPasswordStrong = strongPasswordRegex.test(watch('password'));

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'techs',
  });

  const addNewTech = () => {
    append({title: '', knowledge: 0});
  }

  async function createUser(data: CreateUserFormData) {
    const { data: uploadData, error } = await supabase
      .storage
      .from('images')
      .upload(data.avatar?.name, data.avatar, {
        cacheControl: '3600',
        upsert: false
      })

    console.log(uploadData)

    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <main className='h-screen bg-zinc-950 text-zinc-300 flex flex-col gap-10 items-center justify-center'>
        <FormProvider {...createUserForm}>        
          <form 
            className='flex flex-col gap-4 w-full max-w-xs' 
            onSubmit={handleSubmit(createUser)}
          >
            
            <Form.FlexField>
              <Form.Label htmlFor='avatar'>
                Avatar
              </Form.Label>

              <Form.Input type='file' name='avatar'/>
              <Form.ErrorMessage field='avatar'/>
            </Form.FlexField>

            <Form.FlexField>
              <Form.Label htmlFor='name'>
                Nome
              </Form.Label>

              <Form.Input type='text' name='name'/>
              <Form.ErrorMessage field='name'/>
            </Form.FlexField>

            <Form.FlexField>
              <Form.Label htmlFor='email'>
                Email
              </Form.Label>

              <Form.Input type='email' name='email'/>
              <Form.ErrorMessage field='email'/>
            </Form.FlexField>

            <Form.FlexField>
              <Form.Label htmlFor='password'>
                Senha
                {isPasswordStrong 
                  ? <span className="text-xs text-emerald-600">Senha forte</span>
                  : <span className="text-xs text-red-500">Senha fraca</span>
                }
              </Form.Label>

              <Form.Input type='password' name='password'/>
              <Form.ErrorMessage field='password'/>
            </Form.FlexField>
              
            <Form.FlexField>
              <Form.Label>
                Tecnologias
                <button
                  type='button'
                  onClick={addNewTech}
                  className="text-emerald-500 font-semibold text-xs flex items-center gap-1"
                >
                  Add
                  <PlusCircle size={16} />
                </button>
              </Form.Label>
              <Form.ErrorMessage field='techs' />
              
              {fields.map((field, index) => {                
                const fieldName ={
                  title: `techs.${index}.title`,
                  knowledge: `techs.${index}.knowledge`
                };

                return (
                  <Form.GridField key={field.id}>

                    <Form.FlexField className='col-span-6'>
                      <Form.Input type='text' name={fieldName.title}/>
                      <Form.ErrorMessage field={fieldName.title}/>
                    </Form.FlexField>

                    <Form.FlexField className='col-span-3'>
                      <Form.Input type='number' name={fieldName.knowledge}/>
                      <Form.ErrorMessage field={fieldName.knowledge}/>
                    </Form.FlexField>

                    <Form.FlexField className='col-span-1 justify-center'>
                      <button 
                        type="button" 
                        onClick={() => remove(index)}
                        className="text-red-500"
                      >
                        <XCircle size={16} />
                      </button>
                    </Form.FlexField>

                  </Form.GridField>
                );
              })}

            </Form.FlexField>

            <button 
              type='submit' 
              disabled={isSubmitting}
              className='bg-violet-500 text-white rounded px-3 h-10 font-semibold text-sm hover:bg-violet-600'
            >
              Salvar
            </button>
          </form>        
        </FormProvider>
        
        {output && (
          <pre className='text-sm bg-zinc-800 text-zinc-100 p-6 rounded-lg'>
            {output}
          </pre>
        )}

    </main>
  );

}
