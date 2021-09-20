import React, { useState } from "react";

type UserForm = { username: string; password: string };
type ChangeHandlerType = (e: React.FormEvent<HTMLInputElement>) => void;

const initialState: UserForm = {
  username: "",
  password: "",
};

export function useUserForm(): [
  UserForm,
  React.Dispatch<React.SetStateAction<UserForm>>,
  ChangeHandlerType
] {
  const [formData, setFormData] = useState(initialState);

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return [formData, setFormData, onChangeHandler];
}
