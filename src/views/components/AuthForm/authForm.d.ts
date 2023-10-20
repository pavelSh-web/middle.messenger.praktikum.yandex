export interface AuthFormField {
    id: string;
    name: string;
    type?: string;
    label: string;
    placeholder?: string;
}

export interface AuthFormButton {
    content: string;
    type?: string;
    href?: string;
}

export type AuthFormIs = 'login' | 'register';

export interface AuthFormProps {
    is: AuthFormIs;
    onSubmit: (e: SubmitEvent) => void;
}

export interface AuthFormTemplateProps {
    title: string;
    fields: AuthFormField[];
    buttons: AuthFormButton[];
}
