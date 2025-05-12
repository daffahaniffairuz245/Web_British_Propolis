
import Button from '@/components/Button'
import InputForm from '@/components/inputForm'
import Label from '@/components/labelform'
import React from 'react'




const loginpage = () => {
  return (
    <div className="p-4">
      <h1 className="text-white text-3xl mb-4">Hello World</h1>

      <div className="mb-4 ">
        <Label htmlFor="username" isRequired={true} title="Username" />
        <InputForm id="username" name="username" value="mhardiansyah" />
      </div>

      <div className="mb-4">
        <Label htmlFor="password" isRequired={true} title="Password" />
        <InputForm id="password" name="password" value="12345678" />
      </div>

      <div className="mb-4">
        <Label htmlFor="name" isRequired={false} title="Name" />
        <InputForm id="name" name="name" value="" />
      </div>

      <div className="flex space-x-5 mt-10">
        <Button title="Simpan" colorSchema="blue" variant="solid" />
        <Button title="Simpan" colorSchema="blue" variant="solid" isDisabled={true} />
        <Button title="Update" colorSchema="blue" variant="outline" />
        <Button title="Update" colorSchema="blue" variant="outline" isDisabled={true} />
        <Button title="Draft" colorSchema="green" variant="outline" />
        <Button title="Batal" colorSchema="red" variant="solid" isDisabled={true}/>
        <Button title="Batal" colorSchema="red" variant="solid" />
      </div>
    </div>
  )
}

export default loginpage