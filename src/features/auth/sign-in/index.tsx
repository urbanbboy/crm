import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import AuthLayout from '../auth-layout'
import { UserAuthForm } from './components/user-auth-form'

export default function SignIn() {
  return (
    <AuthLayout>
      <Card className='gap-4'>
        <CardHeader>
          <CardTitle className='text-xl tracking-tight'>Логин</CardTitle>
          <CardDescription>
            Введите свой логин и пароль ниже для <br />
            входа в учетную запись
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UserAuthForm />
        </CardContent>
        <CardFooter className='px-0'>
          <p className='text-muted-foreground px-8 text-center text-sm'>
            Нажимая «Войти», вы соглашаетесь с нашими{' '}
            <a
              href='/terms'
              className='hover:text-primary underline underline-offset-4'
            >
              Условиями обслуживания
            </a>{' '}
            и{' '}
            <a
              href='/privacy'
              className='hover:text-primary underline underline-offset-4'
            >
              Политикой конфиденциальности
            </a>
            .
          </p>
        </CardFooter>
      </Card>
    </AuthLayout>
  )
}
