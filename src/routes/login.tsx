import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useTranslation } from 'react-i18next';
import { ChangeEvent, FormEvent, useState } from "react"
import { Eye, EyeClosed } from "@phosphor-icons/react"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

export function Login() {
  const { t } = useTranslation();
  const [showPassLogin, setShowPassLogin] = useState(false);
  const [showPassRegister, setShowPassRegister] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);

  const [formDataLogin, setFormDataLogin] = useState({});
  const [formDataRegister, setFormDataRegister] = useState({});

  const handleChangeLogin = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormDataLogin((prevFormDataLogin) => ({ ...prevFormDataLogin, [name]: value }))
  }
  
  const handleChangeRegister = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormDataRegister((prevFormData) => ({ ...prevFormData, [name]: value }))
  }
  
  function handleSubmitLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    toast(`${formDataLogin}`)
  }
  
  function handleSubmitRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    toast(`${formDataRegister}`)
  }

  return (
    <div className="h-screen bg-creme bg-[url('/paw_path.png')] bg-left bg-repeat-x">
      <Tabs defaultValue="login" className="w-full m-0 sm:w-[400px] p-2 bg-varOrange rounded-sm fixed left-[50%] top-[50%] z-50 max-w-sm translate-x-[-50%] translate-y-[-50%]">
        <TabsList className="w-full bg-transparent">
          <TabsTrigger className="text-zinc-100 font-bungee rounded-none rounded-l bg-light-brown-500" value="login">{t('pages.login.login')}</TabsTrigger>
          <TabsTrigger className="text-zinc-100 font-bungee rounded-none rounded-r bg-light-brown-500" value="create">{t('pages.login.signUp')}</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <form autoComplete="off" className="flex flex-col gap-5 p-2" onSubmit={handleSubmitLogin}>
            <Input onChange={handleChangeLogin} id="email-login" name="email-login" type="email" placeholder={t('pages.login.input1')} className="w-full ring-1 focus-visible:ring-1 focus-visible:ring-offset-0" required />

            <label htmlFor="password-login" className="flex relative">
              <Input onChange={handleChangeLogin} id="password-login" name="password-login" type={showPassLogin ? "text" : "password"} placeholder={t('pages.login.input2')} className="w-full ring-1 focus-visible:ring-1 focus-visible:ring-offset-0" required />
              <div className="absolute right-2 top-1 z-10" onClick={() => setShowPassLogin(!showPassLogin)}>
                {showPassLogin ? <Eye size={28} /> : <EyeClosed size={28} />}
              </div>
            </label>

            <Dialog>
              <DialogTrigger className="flex text-zinc-100 font-semibold underline pointer hover:text-zinc-200 justify-center">{t("pages.forgotPassword.title")}</DialogTrigger>
              <DialogContent className="flex bg-varOrange border-transparent max-w-sm">
                <DialogHeader>
                  <DialogTitle className="font-bungee text-center text-2xl text-zinc-100">{t("pages.forgotPassword.title")}</DialogTitle>
                  <DialogDescription className="text-md text-zinc-100 flex flex-col gap-3">
                    {t("pages.forgotPassword.text")}
                    <Input id="email-forgotpass" name="email-forgotpass" type="email" placeholder={t("pages.forgotPassword.input")} className="w-full text-black ring-1 focus-visible:ring-1 focus-visible:ring-offset-0" required />
                    <Button className="w-full bg-light-brown-500 hover:bg-light-brown">{t("pages.forgotPassword.btnInput")}</Button>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <Button className="w-full bg-light-brown-500 hover:bg-light-brown">{t('pages.login.btnInput')}</Button>
          </form>
        </TabsContent>

        <TabsContent value="create">
          <form autoComplete="off" className="flex flex-col gap-5 p-2" onSubmit={handleSubmitRegister}>
            <Input onChange={handleChangeRegister} id="name-create" name="name-create" type="text" placeholder={t('pages.signUp.input1')} className="w-full ring-1 focus-visible:ring-1 focus-visible:ring-offset-0" required />
            <Input onChange={handleChangeRegister} id="last-name-create" name="last-name-create" type="text" placeholder={t('pages.signUp.input2')} className="w-full ring-1 focus-visible:ring-1 focus-visible:ring-offset-0" required />
            <Input onChange={handleChangeRegister} id="email-create" name="email-create" type="email" placeholder={t('pages.signUp.input3')} className="w-full ring-1 focus-visible:ring-1 focus-visible:ring-offset-0" required />

            <label htmlFor="password-create" className="flex relative">
              <Input onChange={handleChangeRegister} id="password-create" name="password-create" type={showPassRegister ? "text" : "password"} placeholder={t('pages.signUp.input4')} className="w-full ring-1 focus-visible:ring-1 focus-visible:ring-offset-0" required />
              <div className="absolute right-2 top-1 z-10" onClick={() => setShowPassRegister(!showPassRegister)}>
                {showPassRegister ? <Eye size={28} /> : <EyeClosed size={28} />}
              </div>
            </label>

            <label htmlFor="confirm-password-create" className="flex relative">
              <Input onChange={handleChangeRegister} id="confirm-password-create" name="confirm-password-create" type={showPassConfirm ? "text" : "password"} placeholder={t('pages.signUp.input5')} className="w-full ring-1 focus-visible:ring-1 focus-visible:ring-offset-0" required />
              <div className="absolute right-2 top-1 z-10" onClick={() => setShowPassConfirm(!showPassConfirm)}>
                {showPassConfirm ? <Eye size={28} /> : <EyeClosed size={28} />}
              </div>
            </label>

            <Button className="w-full bg-light-brown-500 hover:bg-light-brown">{t('pages.signUp.btnSignUp')}</Button>
          </form>
        </TabsContent>
      </Tabs>


      <Toaster />
    </div>
  )
}