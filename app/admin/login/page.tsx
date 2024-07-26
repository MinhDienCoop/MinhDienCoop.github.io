import PageTitle from "@/app/components/Common/pageTitle";
import Logo from "@/app/components/Header/logo";
import LoginFormAdmin from "@/app/components/Sections/loginFormAdmin";

export default function AdminHome() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center bg-white p-10 rounded-xl w-full max-w-[500px]">
        <div className="w-[120px] h-[120px] mx-auto">
          <Logo />
        </div>
        <div className="mb-3">
          <PageTitle title="MDC Admin" />
        </div>
        <LoginFormAdmin />
      </div>
    </div>
  );
}
