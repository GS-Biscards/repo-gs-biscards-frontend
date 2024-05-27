"use client"
import React from "react";
import UserForm from "./UserForm";
import { Template } from "@/models/template.model";
import { getTemplateList } from "@/services/template.services";


export default function RegisterFormPage() {
  const [templateList, setTemplateList] = React.useState<Template[]>([])
  React.useEffect(() => {
    const loadTemplate = async () => {
      const resTemplateList = await getTemplateList();
      setTemplateList(resTemplateList)
    }
    loadTemplate();
  }, [])

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Formulario de registro</h1>
      <UserForm templateList={templateList} />
    </div>

  );
}