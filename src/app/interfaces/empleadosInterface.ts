export interface IEmpleado{
    status: string
    message: string
    data:IDataEmpleado[]
}

export interface IDataEmpleado{
    "id": number
    "employee_name": string
    "employee_salary": number
    "employee_age": number
    "profile_image": string
}
