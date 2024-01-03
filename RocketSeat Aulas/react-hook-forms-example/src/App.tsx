import { useState } from 'react';
import { useForm, useFieldArray, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'

import { supabase } from './lib/supabase';
import { Form } from './components/Form';
import GlobalStyles from './styles/global.tsx';
import { CreateUserFormData, createUserFormSchema } from './lib/zod/createUserFormSchema';
import { Main } from './components/Main';
import { AddButton, SubmitButton, RemoveButton } from './components/Button';
import { PasswordStrength } from './components/Form/PasswordStrength';
import { Output } from './components/Main/Output';

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

  async function createUser(data: CreateUserFormData) : Promise<void>{
    const { data: uploadData } = await supabase
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
    <Main.MainWrapper>
        <GlobalStyles />
        <FormProvider {...createUserForm}>        
          <Form.Wrapper onSubmit={handleSubmit(createUser)}>
            
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
                <PasswordStrength $isStrong={isPasswordStrong}/>
              </Form.Label>

              <Form.Input type='password' name='password'/>
              <Form.ErrorMessage field='password'/>
            </Form.FlexField>
              
            <Form.FlexField>
              <Form.Label>
                Tecnologias                
                <AddButton text='Add' onClickFunction={addNewTech}/>
              </Form.Label>
              <Form.ErrorMessage field='techs' />
              
              {fields.map((field, index) => {                
                const fieldName ={
                  title: `techs.${index}.title`,
                  knowledge: `techs.${index}.knowledge`
                };

                return (
                  <Form.GridField key={field.id}>

                    <Form.FlexField $colSpan={6}>
                      <Form.Input type='text' name={fieldName.title}/>
                      <Form.ErrorMessage field={fieldName.title}/>
                    </Form.FlexField>

                    <Form.FlexField $colSpan={3}>
                      <Form.Input type='number' name={fieldName.knowledge}/>
                      <Form.ErrorMessage field={fieldName.knowledge}/>
                    </Form.FlexField>

                    <Form.FlexField $colSpan={1} $justifyContent='center'>

                      <RemoveButton onClickFunction={() => remove(index)} />
                      
                    </Form.FlexField>

                  </Form.GridField>
                );
              })}

            </Form.FlexField>

            <SubmitButton type='submit' disabled={isSubmitting}>
              Salvar
            </SubmitButton>

          </Form.Wrapper>        
        </FormProvider>
        
        <Output $output={output}/>

    </Main.MainWrapper>
  );

}
