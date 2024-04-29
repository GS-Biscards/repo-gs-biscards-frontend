'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { User } from '@/models/user.model';
import InputForm from '@/components/InputForm';
import { searchUsersByValue } from '@/services/user.services';
import UsersFoundList from './UsersFoundList';
import Spin from '@/components/Spin';

interface Props {
  setShowSearchSection?: any
  toggleSection?: any;
  slidePrev?: any;
}

const SearchUserForm = ({ setShowSearchSection, toggleSection, slidePrev }: Props) => {

  const { register, getValues, setValue, formState: { errors }, handleSubmit: handleSearch } = useForm<{
    searchValue: string
  }>({ defaultValues: { searchValue: "" } });
  const [usersFound, setUsersFound] = React.useState<User[]>([]);
  const [loadingUsers, setLoadingUsers] = React.useState<boolean>(false)

  const handleKeyPress = () => {
    setUsersFound([])
    slidePrev()
  };

  const serchBusinessCards = async (data: { searchValue: string; }) => {
    try {
      setLoadingUsers(true)
      const users = await searchUsersByValue(data.searchValue);
      setUsersFound(users);
      setLoadingUsers(false)
    } catch (error) {
      setUsersFound([])
    }
  }

  return (
    <div className="bg-[#FFF]">
      <div className='flex flex-row items-center lg:pl-28 lg:pt-8'>
        <button
          className="text-black h-16 w-16 text-3xl block "
          onClick={() => { handleKeyPress() }}
        >
          <span className="flex items-center justify-center text-black block ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  >
              <path d="M19 12a1 1 0 0 1-1 1H8.414l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L8.414 11H18a1 1 0 0 1 1 1z" fill="currentColor" data-name="Left" />
            </svg>
          </span>
        </button>
        <h2 className="ff-arvo text-[20px] lg:text-[42px] text-[#273732]">
          Buscar business card
        </h2>
      </div>
      <div className='w-full p-5 lg:pl-40 lg:pr-40 lg:pt-8'>
        <form onSubmit={handleSearch(serchBusinessCards)}>
          <div className='flex flex-row w-[400px] gap-x-10'>
            <InputForm
              id={'search-field-select-search-value'}
              register={register}
              errors={errors}
              fieldName={'searchValue'}
              placeholder={"Ingese nombre o profeción o rubro"}
            />
            <button
              className='cursor-pointer h-[60px] w-[260px] flex justify-center items-center bg-[#203F51] rounded-lg'
              type='submit'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 38.912 38.923" strokeWidth="0">
                <path id="Trazado_5" data-name="Trazado 5" d="M38.383,33.651l-7.58-7.58a1.826,1.826,0,0,0-1.293-.537H28.272a15.809,15.809,0,1,0-2.737,2.737V29.51a1.819,1.819,0,0,0,.537,1.293l7.573,7.582a1.818,1.818,0,0,0,2.57.013l.013-.013,2.148-2.148a1.834,1.834,0,0,0,.008-2.586M15.809,25.54H15.8a9.727,9.727,0,1,1,.011,0" transform="translate(0 0)" fill="#FFF" />
              </svg>
              Buscar
            </button>
          </div>
        </form>
      </div>
      {
        loadingUsers && <Spin showSpin={loadingUsers} />
      }
      <UsersFoundList usersFound={usersFound} />


    </div >
  )
}

export default SearchUserForm